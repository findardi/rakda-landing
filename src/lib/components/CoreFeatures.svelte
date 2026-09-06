<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import { REFS, type Ref } from '$lib/refs';

	// The argument in three rows; each points at the section that proves it.
	const { t } = getI18n();
	const rows: { n: 1 | 2 | 3; ref: Ref }[] = [
		{ n: 1, ref: 'grid' },
		{ n: 2, ref: 'grid' },
		{ n: 3, ref: 'engagement' }
	];
</script>

<section id="why" class="section core" aria-labelledby="core-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="core-h" class="h2">{t('core.title')}</h2>
			<p class="lede">{t('core.desc')}</p>
		</div>
		<dl class="rows">
			{#each rows as row (row.n)}
				<div class="row">
					<dt>{t(`core.${row.n}.t`)}</dt>
					<dd>
						{t(`core.${row.n}.b`)}
						<a class="see font-mono" href="#{REFS[row.ref].anchor}"
							>{t('core.see', { n: `§${REFS[row.ref].n}` })}</a
						>
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<style>
	.rows {
		border-top: 1px solid var(--color-line-strong);
	}
	.row {
		display: grid;
		grid-template-columns: minmax(0, 14rem) minmax(0, 1fr);
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
		max-width: 56ch;
	}
	.see {
		margin-left: 0.5rem;
		font-size: 0.8125rem;
		color: var(--color-ink);
		white-space: nowrap;
	}
	.see:hover {
		color: var(--color-primary-strong);
	}
	@media (max-width: 767px) {
		.row {
			grid-template-columns: 1fr;
		}
	}
</style>
