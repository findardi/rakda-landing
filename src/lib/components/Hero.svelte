<script lang="ts">
	import { page } from '$app/state';
	import { pushState } from '$app/navigation';
	import { appUrl } from '$lib/app-url';
	import type { Key } from '$lib/i18n';
	import { getI18n } from '$lib/i18n/context';
	import { secnum } from '$lib/refs';
	import { ACCESS_UNTIL, DEMO_IP, FOLDERS, GROUPS, ROOM_NAME } from '$lib/demo/data';
	import type { Entry } from '$lib/demo/activity';
	import {
		DEFAULT_ENCODED,
		DEFAULT_GRID,
		cloneGrid,
		decodeGrid,
		encodeGrid,
		toggle,
		type Grid,
		type Perm
	} from '$lib/demo/permissions';
	import Matrix from './Matrix.svelte';
	import DocPreview from './DocPreview.svelte';
	import ActivityLine from './ActivityLine.svelte';
	import { setUrlSearch, startUrlSearchSync, urlSearch } from '$lib/url-search.svelte';

	const { t, locale, tag } = getI18n();

	// The grid lives in the URL (?g=…), so a configuration is a shareable link and
	// the back button undoes a choice. The server renders the starting setup; in
	// the browser the grid follows the query string through every push and pop.
	$effect(() => startUrlSearchSync());
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
	const fmtDate = new Intl.DateTimeFormat(tag, { day: '2-digit', month: 'short', year: 'numeric' });
	let clock = $derived(now ? fmtTime.format(now) : '––:––');
	let today = $derived(now ? fmtDate.format(now) : '–– ––– ––––');

	let isDefault = $derived(encodeGrid(grid) === DEFAULT_ENCODED);
	let group = $derived(GROUPS[focus.g]);
	let folder = $derived(FOLDERS[focus.f]);
	let cell = $derived(grid[focus.g][focus.f]);
	let stamp = $derived(`${group.name[locale]} · ${group.reader} · ${today} ${clock} · ${DEMO_IP}`);

	let seq = 0;
	const you = t('activity.you');
	// Seeded entries sit a few hours before the live clock, so an entry appended
	// now never reads as earlier than the ones below it. Before hydration (and
	// without JavaScript, when nothing can be appended) they show fixed times.
	const SEEDS = [
		{
			minutesAgo: 112,
			fixed: '10:02',
			actor: you,
			text: t('activity.seed.invite', {
				email: GROUPS[0].reader,
				group: GROUPS[0].name[locale],
				date: ACCESS_UNTIL[locale]
			})
		},
		{ minutesAgo: 143, fixed: '09:31', actor: you, text: t('activity.seed.template') },
		{
			minutesAgo: 172,
			fixed: '09:14',
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

	function push(entry: Omit<Entry, 'id' | 'time'>) {
		log = [{ id: seq++, time: clock, ...entry }, ...log].slice(0, 7);
	}

	function navigateTo(next: Grid) {
		const url = new URL(page.url);
		const enc = encodeGrid(next);
		if (enc === DEFAULT_ENCODED) url.searchParams.delete('g');
		else url.searchParams.set('g', enc);
		pushState(url, {});
		setUrlSearch(url.search);
	}

	function onToggle(g: number, f: number, perm: Perm) {
		const after = toggle(grid[g][f], perm);
		const next = cloneGrid(grid);
		next[g][f] = after;
		navigateTo(next);
		focus = { g, f };
		push({
			actor: you,
			text: t(after[perm] ? 'activity.on' : 'activity.off', {
				perm: t(`grid.perm.${perm}` as Key),
				group: GROUPS[g].name[locale],
				folder: FOLDERS[f].name[locale]
			})
		});
		if (after.view) {
			push({
				actor: GROUPS[g].reader,
				mono: true,
				text: t('activity.viewed', { doc: FOLDERS[f].doc[locale] })
			});
		}
	}

	function reset() {
		navigateTo(DEFAULT_GRID);
	}

	function onDownload(clean: boolean) {
		push({
			actor: group.reader,
			mono: true,
			text: t(clean ? 'activity.downloaded.clean' : 'activity.downloaded.marked', {
				doc: folder.doc[locale]
			})
		});
	}
</script>

<section class="hero" aria-labelledby="hero-h">
	<div class="wrap band">
		<div>
			<h1 id="hero-h">{t('hero.h1')}</h1>
			<p class="sub">{t('hero.sub')}</p>
		</div>
		<div class="act">
			<a class="btn btn-primary" href={appUrl('/register')}>{t('hero.cta')}</a>
			<p class="hint">{t('hero.ctaHint')}</p>
		</div>
	</div>

	<div class="wrap deck" id="access">
		<div class="gridcol">
			<div class="roomhead">
				<p class="roomname">
					<span class="secnum font-mono">{secnum('grid')}</span>
					<span class="room">{ROOM_NAME}</span>
					<span class="tpl">{t('grid.template')}</span>
				</p>
				<p class="meta">
					<span class="synthetic font-mono">{t('grid.synthetic')}</span>
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
			</div>
			<p class="try">{t('hero.tryHint')}</p>
			<Matrix {grid} {focus} ontoggle={onToggle} />
			<p class="rule">{t('grid.flow')} {t('grid.rule')} {t('grid.exclusive')}</p>
		</div>
		<aside class="side" aria-label={t('preview.doc')}>
			<DocPreview groupName={group.name[locale]} {folder} {cell} {stamp} ondownload={onDownload} />
			<ActivityLine {entries} />
		</aside>
	</div>
</section>

<style>
	.hero {
		padding-block: 2.25rem 4.5rem;
	}
	.band {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem 3rem;
		align-items: end;
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
	}
	.act .btn {
		min-height: 3rem;
		padding-inline: 1.375rem;
		font-size: 1rem;
	}
	.hint {
		font-size: 0.8125rem;
		color: var(--color-muted);
	}
	.deck {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(19rem, 1fr);
		gap: 2.5rem;
		align-items: start;
		border-top: 1px solid var(--color-line);
		padding-top: 1.25rem;
	}
	.roomhead {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 0.5rem;
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
	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.125rem 1rem;
	}
	.synthetic {
		font-size: 0.6875rem;
		letter-spacing: 0.02em;
		color: var(--color-muted);
		white-space: nowrap;
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
	}
	.rule {
		margin-top: 0.875rem;
		font-size: 0.75rem;
		line-height: 1.5;
		color: var(--color-muted);
		max-width: 72ch;
	}
	@media (max-width: 1023px) {
		.band {
			grid-template-columns: 1fr;
			align-items: start;
		}
		.deck {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
	@media (max-width: 767px) {
		.hero {
			padding-block: 2.25rem 3rem;
		}
		.band {
			padding-bottom: 1.75rem;
		}
		.act .btn {
			width: 100%;
		}
	}
</style>
