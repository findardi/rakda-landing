<script lang="ts">
	import { localePath } from '$lib/i18n';
	import { getI18n } from '$lib/i18n/context';
	import { FAQ_COUNT, LANDING_FAQ } from '$lib/faq/content';
	import FaqClause from './FaqClause.svelte';

	// Five clauses from the FAQ, on the page that is shared, so the questions
	// people ask before signing up are answered where they land.
	const { t, locale } = getI18n();
</script>

<section id="faq" class="section lfaq" aria-labelledby="lfaq-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="lfaq-h" class="h2">{t('lfaq.title')}</h2>
			<p class="lede">{t('lfaq.desc')}</p>
			<p class="all">
				<a href={localePath(locale, '', '/faq')}>{t('lfaq.all', { n: FAQ_COUNT })}</a>
			</p>
		</div>
		<div class="content">
			{#each LANDING_FAQ as item, i (item.id)}
				<FaqClause {item} number={String(i + 1)} />
			{/each}
		</div>
	</div>
</section>

<style>
	.all {
		margin-top: 1rem;
		font-size: 0.875rem;
	}
	.all a {
		color: var(--color-ink-2);
	}
	.all a:hover {
		color: var(--color-ink);
	}
	.content :global(.clause:last-child) {
		border-bottom: 1px solid var(--color-line);
	}
</style>
