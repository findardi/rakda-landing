<script lang="ts">
	import { page } from '$app/state';
	import { getI18n } from '$lib/i18n/context';
	import { localePath } from '$lib/i18n';
	import { ARTICLES } from '$lib/articles/content';
	import type { ArticleSlug } from '$lib/articles/slugs';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import Close from '$lib/components/Close.svelte';

	// One page per search intent. Content lives in $lib/articles/content.ts and
	// states only what the product does today.
	const { t, locale } = getI18n();
	let art = $derived(ARTICLES[page.params.slug as ArticleSlug]);
</script>

<Seo title={art.title[locale]} description={art.description[locale]} path="/{art.slug}" />

<Nav />
<main id="main">
	<article class="art">
		<div class="wrap split">
			<div class="intro">
				<h1>{art.h1[locale]}</h1>
				<p class="lede">{art.lede[locale]}</p>
				<p class="updated font-mono">{t('art.updated', { date: art.updated })}</p>
			</div>
			<div class="content">
				{#each art.sections as s (s.h.en)}
					<section class="clause">
						<h2>{s.h[locale]}</h2>
						{#each s.p as p (p.en)}
							<p>{p[locale]}</p>
						{/each}
						{#if s.table}
							<div class="tablewrap">
								<table>
									<thead>
										<tr>
											{#each s.table.head as h (h.en)}
												<th scope="col">{h[locale]}</th>
											{/each}
										</tr>
									</thead>
									<tbody>
										{#each s.table.rows as row (row[0].en)}
											<tr>
												<th scope="row">{row[0][locale]}</th>
												<td>{row[1][locale]}</td>
												<td>{row[2][locale]}</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						{/if}
					</section>
				{/each}
				<nav class="related" aria-label={t('art.related')}>
					<p class="rh">{t('art.related')}</p>
					<ul>
						{#each art.related as slug (slug)}
							<li><a href={localePath(locale, '', `/${slug}`)}>{ARTICLES[slug].h1[locale]}</a></li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</article>
	<Close />
</main>
<Footer />

<style>
	.art {
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
	.tablewrap {
		margin-top: 1rem;
		overflow-x: auto;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.875rem;
	}
	th,
	td {
		padding: 0.625rem 0.75rem 0.625rem 0;
		text-align: left;
		vertical-align: top;
		border-bottom: 1px solid var(--color-line);
		line-height: 1.5;
	}
	thead th {
		font-weight: 500;
		font-size: 0.75rem;
		color: var(--color-muted);
		border-bottom-color: var(--color-line-strong);
	}
	tbody th {
		font-weight: 600;
		color: var(--color-ink);
		white-space: nowrap;
	}
	td {
		color: var(--color-ink-2);
		min-width: 14rem;
	}
	.related {
		margin-top: 2rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--color-line-strong);
	}
	.rh {
		font-size: 0.6875rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--color-muted);
		margin-bottom: 0.5rem;
	}
	.related li {
		font-size: 0.9375rem;
		padding-block: 0.25rem;
	}
	.related a {
		color: var(--color-ink-2);
	}
	.related a:hover {
		color: var(--color-ink);
	}
	@media (max-width: 767px) {
		.art {
			padding-block: 2rem 3.5rem;
		}
		tbody th {
			white-space: normal;
		}
	}
</style>
