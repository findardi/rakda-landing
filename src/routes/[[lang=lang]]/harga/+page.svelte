<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import TrialCta from '$lib/components/TrialCta.svelte';

	// No numbers until they are decided (PRODUCT.md); the certainties are listed.
	const { t } = getI18n();
	const rows = [1, 2, 3, 4, 5, 6] as const;
</script>

<Seo title={t('harga.metaTitle')} description={t('harga.metaDescription')} path="/harga" />

<Nav />
<main id="main" class="harga">
	<div class="wrap split">
		<div class="intro">
			<h1>{t('harga.title')}</h1>
			<p class="lede">{t('harga.lede')}</p>
		</div>
		<div class="content">
			<dl class="rows">
				{#each rows as n (n)}
					<div class="row">
						<dt>{t(`harga.${n}.t`)}</dt>
						<dd>{t(`harga.${n}.b`)}</dd>
					</div>
				{/each}
			</dl>
			<div class="act" id="trial">
				<TrialCta label={t('harga.cta')} size="lg" />
			</div>
		</div>
	</div>
</main>
<Footer />

<style>
	.harga {
		padding-block: 3rem 5rem;
	}
	h1 {
		font-size: clamp(1.625rem, 1.2rem + 1.6vw, 2.25rem);
		font-weight: 600;
		line-height: 1.08;
		color: var(--color-ink);
	}
	.rows {
		border-top: 1px solid var(--color-line-strong);
	}
	.row {
		display: grid;
		grid-template-columns: minmax(0, 16rem) minmax(0, 1fr);
		gap: 0.375rem 1.5rem;
		padding-block: 1.25rem;
		border-bottom: 1px solid var(--color-line);
	}
	dt {
		font-size: 1.0625rem;
		font-weight: 600;
		line-height: 1.35;
		letter-spacing: -0.01em;
		color: var(--color-ink);
		text-wrap: balance;
	}
	dd {
		font-size: 0.9375rem;
		line-height: 1.55;
		color: var(--color-ink-2);
		max-width: 52ch;
	}
	.act {
		margin-top: 2.5rem;
		scroll-margin-top: 5rem;
	}
	@media (max-width: 767px) {
		.harga {
			padding-block: 2rem 3.5rem;
		}
		.row {
			grid-template-columns: 1fr;
		}
	}
</style>
