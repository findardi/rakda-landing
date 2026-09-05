<script lang="ts">
	import { page } from '$app/state';
	import { getI18n } from '$lib/i18n/context';
	import { LEGAL, ORG, type LegalSlug } from '$lib/legal/content';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';

	const { t, locale } = getI18n();
	let doc = $derived(LEGAL[page.params.doc as LegalSlug]);
	const fill = (s: string) => s.replaceAll('{org}', ORG.legalName).replaceAll('{email}', ORG.email);
</script>

<Seo title="{doc.title[locale]} — Rakda" description={doc.description[locale]} path="/{doc.slug}" />

<Nav />
<main id="main" class="legal">
	<div class="wrap split">
		<div class="intro">
			<h1>{doc.title[locale]}</h1>
			<p class="lede">{doc.description[locale]}</p>
			<p class="updated font-mono">{t('legal.updated', { date: doc.updated })}</p>
		</div>
		<div class="content">
			{#if doc.slug === 'contact'}
				<dl class="org">
					<div>
						<dt>{t('legal.org')}</dt>
						<dd>{ORG.legalName}</dd>
					</div>
					<div>
						<dt>{t('legal.address')}</dt>
						<dd>{ORG.address}</dd>
					</div>
					<div>
						<dt>{t('legal.email')}</dt>
						<dd><a href="mailto:{ORG.email}">{ORG.email}</a></dd>
					</div>
				</dl>
			{/if}
			{#each doc.sections as s (s.h.en)}
				<section class="clause">
					<h2>{s.h[locale]}</h2>
					{#each s.p as p (p.en)}
						<p>{fill(p[locale])}</p>
					{/each}
				</section>
			{/each}
		</div>
	</div>
</main>
<Footer />

<style>
	.legal {
		padding-block: 3rem 5rem;
	}
	h1 {
		font-size: clamp(1.625rem, 1.2rem + 1.6vw, 2.25rem);
		font-weight: 600;
		line-height: 1.08;
		color: var(--color-ink);
	}
	.updated {
		margin-top: 0.75rem;
		font-size: 0.6875rem;
		letter-spacing: 0.02em;
		color: var(--color-muted);
	}
	.org {
		display: grid;
		gap: 0.75rem;
		padding: 1.25rem 1.5rem;
		margin-bottom: 2rem;
		background: var(--color-panel);
		border: 1px solid var(--color-line);
		border-radius: var(--radius-box);
	}
	.org div {
		display: grid;
		grid-template-columns: 8rem minmax(0, 1fr);
		gap: 1rem;
		font-size: 0.9375rem;
	}
	.org dt {
		color: var(--color-muted);
	}
	.org dd {
		color: var(--color-ink);
		overflow-wrap: anywhere;
	}
	.clause {
		padding-block: 1.25rem;
		border-top: 1px solid var(--color-line);
	}
	.clause h2 {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-ink);
		margin-bottom: 0.5rem;
	}
	.clause p {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--color-ink-2);
		max-width: 64ch;
	}
	.clause p + p {
		margin-top: 0.625rem;
	}
	@media (max-width: 767px) {
		.legal {
			padding-block: 2rem 3.5rem;
		}
		.org div {
			grid-template-columns: 1fr;
			gap: 0.125rem;
		}
	}
</style>
