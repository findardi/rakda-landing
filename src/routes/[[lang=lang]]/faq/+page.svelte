<script lang="ts">
	import TrialCta from '$lib/components/TrialCta.svelte';
	import { getI18n } from '$lib/i18n/context';
	import { localePath } from '$lib/i18n';
	import { jsonLd } from '$lib/seo';
	import { FAQ_COUNT, FAQ_GROUPS, FAQ_INTRO } from '$lib/faq/content';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import FaqIndex from '$lib/components/FaqIndex.svelte';
	import FaqClause from '$lib/components/FaqClause.svelte';

	const { t, locale } = getI18n();

	const ld = jsonLd({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		inLanguage: locale,
		mainEntity: FAQ_GROUPS.flatMap((g) =>
			g.items.map((item) => ({
				'@type': 'Question',
				name: item.q[locale],
				acceptedAnswer: { '@type': 'Answer', text: item.a[locale] }
			}))
		)
	});

	// The index marks the topic on screen; a hash opens its clause.
	let active = $state<string | null>(FAQ_GROUPS[0].id);
	let root = $state<HTMLElement | null>(null);

	function openHash() {
		const id = decodeURIComponent(location.hash.slice(1));
		if (!id) return;
		const el = document.getElementById(id);
		if (el instanceof HTMLDetailsElement) el.open = true;
		const group = el?.closest<HTMLElement>('section[data-group]');
		if (group) active = group.id;
	}

	$effect(() => {
		openHash();
		window.addEventListener('hashchange', openHash);
		const heads = root ? [...root.querySelectorAll<HTMLElement>('section[data-group]')] : [];
		let raf = 0;
		const mark = () => {
			raf = 0;
			// The reading line sits just under the sticky nav (3.5rem) plus the scroll margin.
			const line = 6 * 16;
			let current = heads[0]?.id ?? null;
			for (const h of heads) if (h.getBoundingClientRect().top <= line) current = h.id;
			if (current !== active) active = current;
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(mark);
		};
		mark();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('hashchange', openHash);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	});
</script>

<Seo title={t('faq.metaTitle')} description={t('faq.metaDescription')} path="/faq" {ld} />

<Nav />
<main id="main" class="faq">
	<div class="wrap split">
		<div class="intro">
			<h1>{t('faq.title')}</h1>
			<p class="lede">{FAQ_INTRO[locale]}</p>
			<p class="total font-mono">{t('faq.count', { n: FAQ_COUNT })}</p>
			<FaqIndex {active} />
		</div>
		<div class="content" bind:this={root}>
			{#each FAQ_GROUPS as group, gi (group.id)}
				<section id={group.id} data-group class="group" aria-labelledby="{group.id}-h">
					<h2 id="{group.id}-h" class="gh">
						<span class="gn font-mono">{gi + 1}</span>
						<span>{group.title[locale]}</span>
					</h2>
					{#each group.items as item, ii (item.id)}
						<FaqClause {item} number="{gi + 1}.{ii + 1}" open={gi === 0 && ii === 0} />
					{/each}
				</section>
			{/each}

			<section id="trial" class="close" aria-labelledby="faq-close-h">
				<h2 id="faq-close-h">{t('faq.close.title')}</h2>
				<p>{t('faq.close.body')}</p>
				<div class="act">
					<TrialCta label={t('faq.close.cta')} />
					<a class="back" href={localePath(locale)}>{t('faq.close.back')}</a>
				</div>
			</section>
		</div>
	</div>
</main>
<Footer />

<style>
	.faq {
		padding-block: 3rem 5rem;
	}
	h1 {
		font-size: clamp(1.625rem, 1.2rem + 1.6vw, 2.25rem);
		font-weight: 600;
		line-height: 1.08;
		color: var(--color-ink);
	}
	.total {
		margin-top: 0.75rem;
		font-size: 0.6875rem;
		letter-spacing: 0.02em;
		color: var(--color-muted);
	}
	.group {
		margin-bottom: 3rem;
		scroll-margin-top: 4.5rem;
	}
	.gh {
		display: grid;
		grid-template-columns: 3.25rem minmax(0, 1fr);
		gap: 0.5rem;
		align-items: baseline;
		padding-bottom: 0.625rem;
		font-size: 1.375rem;
		font-weight: 600;
		letter-spacing: -0.015em;
		color: var(--color-ink);
	}
	.gn {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-muted);
		letter-spacing: 0.02em;
	}
	.group :global(.clause:last-child) {
		border-bottom: 1px solid var(--color-line);
	}
	.close {
		margin-top: 1rem;
		padding-top: 2.5rem;
		border-top: 1px solid var(--color-line-strong);
	}
	.close h2 {
		font-size: 1.375rem;
		font-weight: 600;
		color: var(--color-ink);
	}
	.close p {
		margin-top: 0.5rem;
		font-size: 1.0625rem;
		color: var(--color-ink-2);
		max-width: 52ch;
	}
	.act {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1.25rem;
		margin-top: 1.5rem;
	}
	.back {
		font-size: 0.875rem;
		color: var(--color-ink-2);
	}
	.back:hover {
		color: var(--color-ink);
	}
	@media (max-width: 767px) {
		.faq {
			padding-block: 2rem 3.5rem;
		}
		.gh {
			grid-template-columns: 2.5rem minmax(0, 1fr);
			font-size: 1.25rem;
		}
	}
</style>
