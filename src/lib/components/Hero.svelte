<script lang="ts">
	import { page } from '$app/state';
	import { pushState } from '$app/navigation';
	import type { Key } from '$lib/i18n';
	import { getI18n } from '$lib/i18n/context';
	import { secnum } from '$lib/refs';
	import { appConfigured, sandboxUrl } from '$lib/app-url';
	import { localePath } from '$lib/i18n';
	import {
		ACCESS_UNTIL,
		DEMO_IP,
		HERO_FOLDERS as FOLDERS,
		HERO_GROUPS as GROUPS,
		ROOM_NAME,
		TEMPLATES
	} from '$lib/demo/data';
	import type { Entry } from '$lib/demo/activity';
	import {
		DEFAULT_ENCODED,
		DEFAULT_GRID,
		cloneGrid,
		decodeGrid,
		encodeGrid,
		HERO_PERMS,
		toggleMini,
		type Grid,
		type Perm
	} from '$lib/demo/permissions';
	import Matrix from './Matrix.svelte';
	import TrialCta from './TrialCta.svelte';
	import DocPreview from './DocPreview.svelte';
	import ActivityLine from './ActivityLine.svelte';
	import SimBadge from './SimBadge.svelte';
	import DemoVideo from './DemoVideo.svelte';
	import { setUrlSearch, startUrlSearchSync, urlSearch } from '$lib/url-search.svelte';
	import { heroCta } from '$lib/hero-cta.svelte';

	const { t, locale, tag } = getI18n();

	// The grid lives in the URL (?g=…), so a configuration is a shareable link and
	// the back button undoes a choice. The server renders the starting setup; in
	// the browser the grid follows the query string through every push and pop.
	$effect(() => startUrlSearchSync());
	// Back and forward change the grid without a click; the trail records that too,
	// so the log never disagrees with the cells. Hash jumps that leave the grid
	// alone are ignored.
	let lastEncoded = DEFAULT_ENCODED;
	$effect(() => {
		const onPop = () => {
			const enc = new URLSearchParams(window.location.search).get('g') ?? DEFAULT_ENCODED;
			if (enc === lastEncoded) return;
			lastEncoded = enc;
			status = push({ actor: you, text: t('activity.navigated') }) + '.';
		};
		window.addEventListener('popstate', onPop);
		return () => window.removeEventListener('popstate', onPop);
	});
	let grid = $derived<Grid>(
		decodeGrid(new URLSearchParams(urlSearch.current).get('g'), DEFAULT_GRID)
	);

	let focus = $state({ g: 0, f: 1 });

	let now = $state<Date | null>(null);
	$effect(() => {
		now = new Date();
		const i = setInterval(() => (now = new Date()), 30_000);
		return () => clearInterval(i);
	});
	const fmtTime = new Intl.DateTimeFormat(tag, {
		hour: '2-digit',
		minute: '2-digit',
		hourCycle: 'h23'
	});
	// "05 Sep 2026" in both locales: id-ID gives it directly; en-GB would print
	// "Sept", so the English date is assembled from parts.
	const fmtDate = new Intl.DateTimeFormat(locale === 'id' ? tag : 'en-US', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});
	const dateOf = (d: Date) => {
		if (locale === 'id') return fmtDate.format(d);
		const part = (type: string) => fmtDate.formatToParts(d).find((x) => x.type === type)?.value;
		return `${part('day')} ${part('month')} ${part('year')}`;
	};
	const fixedTime = (h: number, m: number) => fmtTime.format(new Date(2026, 0, 1, h, m));
	let clock = $derived(now ? fmtTime.format(now) : fixedTime(10, 51).replace(/\d/g, '–'));
	let today = $derived(now ? dateOf(now) : '–– ––– ––––');

	let isDefault = $derived(encodeGrid(grid) === DEFAULT_ENCODED);
	let group = $derived(GROUPS[focus.g]);
	let folder = $derived(FOLDERS[focus.f]);
	let cell = $derived(grid[focus.g][focus.f]);
	let stamp = $derived(`${group.name[locale]} · ${group.reader} · ${today} ${clock} · ${DEMO_IP}`);

	let seq = 0;
	const you = t('activity.you');
	// The one live region: a single sentence per action, so a toggle is announced
	// once instead of the whole preview and list being re-read.
	let status = $state('');
	// Seeded entries sit a few hours before the live clock, so an entry appended
	// now never reads as earlier than the ones below it. Before hydration (and
	// without JavaScript, when nothing can be appended) they show fixed times.
	const SEEDS = [
		{
			minutesAgo: 112,
			fixed: fixedTime(10, 2),
			actor: you,
			text: t('activity.seed.invite', {
				email: GROUPS[0].reader,
				group: GROUPS[0].name[locale],
				date: ACCESS_UNTIL[locale]
			})
		},
		{ minutesAgo: 143, fixed: fixedTime(9, 31), actor: you, text: t('activity.seed.template') },
		{
			minutesAgo: 172,
			fixed: fixedTime(9, 14),
			actor: you,
			text: t('activity.seed.created', { room: ROOM_NAME })
		}
	];
	let seeds = $derived<Entry[]>(
		SEEDS.map((s, i) => ({
			id: -1 - i,
			time: now ? fmtTime.format(new Date(now.getTime() - s.minutesAgo * 60_000)) : s.fixed,
			actor: s.actor,
			text: s.text
		}))
	);
	let log = $state<Entry[]>([]);
	let entries = $derived([...log, ...seeds].slice(0, 7));
	let latest = $derived(entries.slice(0, 3));

	// Under 1024px the aside is a sheet stuck to the bottom of the viewport while the
	// matrix scrolls beneath it. A sentinel right after the sheet's natural position
	// tells us whether it is floating: while it floats, the newest activity lines ride
	// inside it; once it settles, the full list sits directly below it instead.
	let sentinel = $state<HTMLElement | null>(null);
	let stuck = $state(false);

	// The nav's trial action stays quiet while this one is on screen (below the nav).
	let act = $state<HTMLElement | null>(null);
	$effect(() => {
		if (!act) return;
		const io = new IntersectionObserver(([e]) => (heroCta.visible = e.isIntersecting), {
			rootMargin: '-56px 0px 0px 0px' // the nav's height; rootMargin takes px or % only
		});
		io.observe(act);
		return () => {
			io.disconnect();
			heroCta.visible = false;
		};
	});
	$effect(() => {
		if (!sentinel) return;
		const io = new IntersectionObserver(
			([e]) => {
				const vh = e.rootBounds?.height ?? window.innerHeight;
				stuck = !e.isIntersecting && e.boundingClientRect.top >= vh;
			},
			{ threshold: 0 }
		);
		io.observe(sentinel);
		return () => io.disconnect();
	});

	function push(entry: Omit<Entry, 'id' | 'time'>): string {
		log = [{ id: seq++, time: clock, ...entry }, ...log].slice(0, 7);
		return `${entry.actor} ${entry.text}`;
	}

	function navigateTo(next: Grid) {
		const url = new URL(page.url);
		const enc = encodeGrid(next);
		if (enc === DEFAULT_ENCODED) url.searchParams.delete('g');
		else url.searchParams.set('g', enc);
		lastEncoded = enc;
		pushState(url, {});
		setUrlSearch(url.search);
	}

	function onToggle(g: number, f: number, perm: Perm) {
		const before = grid[g][f];
		const after = toggleMini(before, perm);
		const next = cloneGrid(grid);
		next[g][f] = after;
		navigateTo(next);
		focus = { g, f };
		const lines = [
			push({
				actor: you,
				text: t(after[perm] ? 'activity.on' : 'activity.off', {
					perm: t(`grid.perm.${perm}` as Key),
					group: GROUPS[g].name[locale],
					folder: FOLDERS[f].name[locale]
				})
			})
		];
		// The reader opens the document when view is newly granted, or when the
		// watermark changes while they can view (a different rendition is served).
		const opened = after.view && (!before.view || before.watermark !== after.watermark);
		if (opened) {
			lines.push(
				push({
					actor: GROUPS[g].reader,
					mono: true,
					text: t('activity.viewed', { doc: FOLDERS[f].doc[locale] })
				})
			);
		}
		status = lines.join('. ') + '.';
	}

	function reset() {
		navigateTo(DEFAULT_GRID);
		status = push({ actor: you, text: t('activity.reset') }) + '.';
	}
</script>

<section class="hero" aria-labelledby="hero-h">
	<!-- The first fold is the promise and the one action; the grid starts below it. -->
	<div class="wrap band">
		<div class="copy">
			<h1 id="hero-h">{t('hero.h1')}</h1>
			<p class="sub">{t('hero.sub')}</p>
			<div class="act" bind:this={act}>
				<TrialCta label={t('hero.cta')} size="lg" />
				{#if sandboxUrl}
					<p class="hint">{t('try.hint')}</p>
				{:else if appConfigured}
					<p class="hint">{t('hero.ctaHint')}</p>
				{/if}
			</div>
		</div>
		<a class="scroll" href="#access">
			{t('hero.scroll')}
			<svg
				viewBox="0 0 16 16"
				width="14"
				height="14"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" /></svg
			>
		</a>
	</div>

	<div class="wrap deck" id="access">
		<div class="gridcol">
			<SimBadge />
			<div class="roomhead">
				<p class="roomname">
					<span class="secnum font-mono">{secnum('grid')}</span>
					<span class="room">{ROOM_NAME}</span>
					<span class="tpl">{t('grid.template')}</span>
				</p>
				<p class="meta">
					<button
						type="button"
						class="link-quiet resetbtn"
						class:idle={isDefault}
						disabled={isDefault}
						aria-hidden={isDefault}
						tabindex={isDefault ? -1 : 0}
						onclick={reset}>{t('grid.reset')}</button
					>
				</p>
				<p class="subset">{t('grid.subset', { n: TEMPLATES[0].count })}</p>
			</div>
			<p class="try">
				{t('hero.tryHint')}
				<span class="wide">{t('hero.tryHint.wide')}</span>
				<span class="narrow">{t('hero.tryHint.narrow')}</span>
			</p>
			<Matrix
				{grid}
				{focus}
				groups={GROUPS}
				folders={FOLDERS}
				perms={HERO_PERMS}
				ontoggle={onToggle}
				onfocuscell={(g, f) => (focus = { g, f })}
				describedby="grid-rules"
			/>
			<p class="rule" id="grid-rules">
				{t('grid.mini')}
				{t('grid.flow')}
				<a href={localePath(locale, '', '/fitur')}>{t('grid.full')}</a>
				<span class="sr-only">{t('grid.keys')}</span>
			</p>
			<p class="sr-only" aria-live="polite">{status}</p>
		</div>
		<aside class="side" class:stuck aria-label={t('preview.doc')}>
			<DocPreview groupName={group.name[locale]} {folder} {cell} {stamp} />
			<div class="latest" aria-hidden="true">
				<p class="ltitle">{t('activity.title')}</p>
				<ol>
					{#each latest as e, i (e.id)}
						<li class="l{i}">
							<time class="font-mono">{e.time}</time>
							<span class="lbody"
								><span class="lactor" class:font-mono={e.mono}>{e.actor}</span> {e.text}</span
							>
						</li>
					{/each}
				</ol>
			</div>
		</aside>
		<div class="sentinel" bind:this={sentinel} aria-hidden="true"></div>
		<div class="actcol">
			<ActivityLine {entries} />
		</div>
		<div class="reccol">
			<DemoVideo
				src="/video/demo-management-access-1788698462914.mp4"
				poster="/video/demo-management-access-1788698462914.jpg"
				width={1044}
				height={568}
				title={t('demo.access.t')}
				note={t('demo.access.n')}
			/>
		</div>
	</div>
</section>

<style>
	.hero {
		padding-block: 2.25rem 4.5rem;
	}
	.band {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 1.75rem;
	}
	h1 {
		font-size: clamp(2.125rem, 1.3rem + 2.6vw, 3.25rem);
		font-weight: 600;
		line-height: 1.05;
		letter-spacing: -0.025em;
		max-width: 26ch;
		color: var(--color-ink);
	}
	.sub {
		margin-top: 1rem;
		font-size: 1.125rem;
		line-height: 1.5;
		color: var(--color-ink-2);
		max-width: 58ch;
	}
	.act {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		margin-top: 1.75rem;
		width: 100%;
	}
	.scroll {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		margin-top: 2.5rem;
		font-size: 0.8125rem;
		color: var(--color-ink-2);
		text-decoration: none;
	}
	.scroll:hover {
		color: var(--color-ink);
		text-decoration: underline;
	}
	/* On a desktop the first viewport holds the headline, the subline, and the form
	   only: the band is the viewport less the nav and the hero's top padding, so the
	   grid begins exactly at the first scroll. Capped so a very tall screen does not
	   push the grid out of reach. */
	@media (min-width: 1024px) {
		.band {
			min-height: min(calc(100svh - 5.75rem), 60rem);
		}
		.copy {
			margin-block: auto;
		}
		.scroll {
			padding-top: 2.5rem;
		}
	}
	.hint {
		font-size: 0.8125rem;
		color: var(--color-muted);
	}
	.deck {
		display: grid;
		/* The matrix column is never narrower than the table itself, so the two
		   columns cannot collide between 1024 and 1130px. */
		grid-template-columns: minmax(max-content, 1.3fr) minmax(19rem, 1fr);
		grid-template-areas:
			'grid side'
			'grid act'
			'rec rec';
		/* The preview row is exactly its own height; the tall matrix column's extra
		   height goes to the activity row, so the list sits directly under the preview. */
		grid-template-rows: auto 1fr auto;
		gap: 0 2.5rem;
		align-items: start;
		border-top: 1px solid var(--color-line);
		padding-top: 1.25rem;
	}
	.gridcol {
		grid-area: grid;
	}
	.reccol {
		grid-area: rec;
		margin-top: 2.5rem;
	}
	.side {
		grid-area: side;
	}
	.actcol {
		grid-area: act;
	}
	.sentinel {
		display: none;
		height: 0;
	}
	/* The newest lines that ride inside the floating sheet. Hidden on desktop and
	   whenever the sheet has settled, where the full list is right below it. */
	.latest {
		display: none;
		margin-top: 0.625rem;
		padding-top: 0.5rem;
		border-top: 1px solid var(--color-line);
	}
	.ltitle {
		font-size: 0.6875rem;
		color: var(--color-muted);
		margin-bottom: 0.125rem;
	}
	.latest li {
		display: grid;
		grid-template-columns: 3rem minmax(0, 1fr);
		gap: 0.5rem;
		padding-block: 0.3125rem;
		border-top: 1px solid var(--color-line);
		font-size: 0.8125rem;
		line-height: 1.45;
	}
	.latest li:first-child {
		border-top: 0;
		padding-top: 0.125rem;
	}
	.latest .l0 {
		color: var(--color-ink);
	}
	.latest .l1 {
		color: var(--color-ink-2);
	}
	.latest .l2 {
		color: var(--color-ink-3);
	}
	.latest time {
		font-size: 0.6875rem;
		padding-top: 0.125rem;
	}
	.lactor {
		font-weight: 500;
	}
	.lactor.font-mono {
		font-size: 0.75rem;
		font-weight: 400;
	}
	.roomhead {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 0.5rem;
		/* Its single-line width must not set the column's minimum; the table does. */
		contain: inline-size;
	}
	.room {
		font-weight: 600;
		color: var(--color-ink);
	}
	.tpl {
		color: var(--color-muted);
		font-size: 0.875rem;
		margin-left: 0.625rem;
	}
	.subset {
		flex-basis: 100%;
		font-size: 0.8125rem;
		color: var(--color-muted);
	}
	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.125rem 1rem;
	}
	.resetbtn {
		font-size: 0.8125rem;
	}
	/* Space is reserved so the grid never shifts when the link appears. */
	.resetbtn.idle {
		visibility: hidden;
	}
	.try {
		font-size: 0.875rem;
		color: var(--color-ink-2);
		margin-bottom: 0.875rem;
		max-width: 60ch;
	}
	.try .narrow {
		display: none;
	}
	.rule {
		margin-top: 0.875rem;
		font-size: 0.8125rem;
		line-height: 1.5;
		color: var(--color-muted);
		max-width: 60ch;
	}
	@media (max-width: 1023px) {
		.try .wide {
			display: none;
		}
		.try .narrow {
			display: inline;
		}
		/* Stacked: the deck is a block so the aside can stick to the bottom of the
		   viewport for the whole height of the matrix (a grid item could only stick
		   inside its own row). The preview and the newest activity lines ride along
		   as a sheet under the matrix; a tap shows its consequence on the same screen. */
		.deck {
			display: block;
		}
		.gridcol {
			margin-bottom: 1.5rem;
		}
		.reccol {
			margin-top: 2rem;
		}
		.sentinel {
			display: block;
		}
		.side.stuck .latest {
			display: block;
		}
		.side {
			position: sticky;
			bottom: 0;
			z-index: 2;
			display: grid;
			grid-template-columns: minmax(0, 26rem) minmax(0, 1fr);
			gap: 0 1.5rem;
			align-items: start;
			margin-inline: -2rem;
			padding: 0.625rem 2rem max(0.75rem, env(safe-area-inset-bottom));
			background: color-mix(in oklch, var(--color-ground) 92%, transparent);
			backdrop-filter: blur(8px);
			border-top: 1px solid var(--color-line-strong);
		}
		@supports not (backdrop-filter: blur(8px)) {
			.side {
				background: var(--color-ground);
			}
		}
	}
	/* Short viewports (a phone in landscape) have no room for a sheet; flow instead. */
	@media (max-width: 1023px) and (max-height: 560px) {
		.side {
			position: static;
		}
	}
	@media (max-width: 767px) {
		.hero {
			padding-block: 2.25rem 3rem;
		}
		.band {
			padding-bottom: 1.75rem;
		}
		.side {
			grid-template-columns: 1fr;
			gap: 0;
			padding-top: 0.5rem;
		}
		/* One line on the phone, clamped to two rows of text. */
		.ltitle,
		.latest li:nth-child(n + 2) {
			display: none;
		}
		.latest {
			margin-top: 0.375rem;
			padding-top: 0.125rem;
		}
		.lbody {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}
	@media (max-width: 639px) {
		.side {
			margin-inline: -1.25rem;
			padding-inline: 1.25rem;
		}
	}
</style>
