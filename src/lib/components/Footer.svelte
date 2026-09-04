<script lang="ts">
	import { localePath, otherLocale } from '$lib/i18n';
	import { getI18n } from '$lib/i18n/context';
	import Brand from './Brand.svelte';

	const { t, locale } = getI18n();
	const other = otherLocale(locale);
</script>

<footer class="foot">
	<div class="wrap row">
		<a href={localePath(locale)} class="brand" aria-label="Rakda"><Brand size={20} /></a>
		<p class="synthetic">{t('footer.synthetic')}</p>
		<p class="right">
			<a href={localePath(locale, '', '/faq')}>{t('nav.faq')}</a>
			<a href={localePath(other)} data-sveltekit-reload hreflang={other} lang={other}
				>{t('footer.lang')}</a
			>
			<span class="rights font-mono">{t('footer.rights')}</span>
		</p>
	</div>
</footer>

<style>
	.foot {
		border-top: 1px solid var(--color-line);
		padding-block: 2rem 2.5rem;
	}
	.row {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) auto;
		gap: 1.5rem 2.5rem;
		align-items: center;
	}
	.brand {
		text-decoration: none;
		display: inline-flex;
	}
	.synthetic {
		font-size: 0.75rem;
		line-height: 1.5;
		color: var(--color-muted);
		max-width: 60ch;
	}
	.right {
		display: flex;
		align-items: baseline;
		gap: 1.25rem;
		font-size: 0.8125rem;
	}
	.right a {
		color: var(--color-ink-2);
	}
	.right a:hover {
		color: var(--color-ink);
	}
	.rights {
		font-size: 0.6875rem;
		color: var(--color-muted);
	}
	@media (max-width: 767px) {
		.row {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
