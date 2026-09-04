<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import { secnum } from '$lib/refs';

	const { t } = getI18n();

	const dos = [1, 2, 3, 4, 5, 6] as const;
	const donts = [1, 2, 3, 4] as const;
</script>

<section id="security" class="section sec" aria-labelledby="sec-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="sec-h" class="h2">
				<span class="secnum font-mono">{secnum('security')}</span>{t('sec.title')}
			</h2>
			<p class="lede">{t('sec.desc')}</p>
		</div>
		<div class="content">
			<div class="cols">
				<div class="col">
					<h3>{t('sec.do')}</h3>
					<dl>
						{#each dos as n (n)}
							<div class="row">
								<dt>{t(`sec.do.${n}.t`)}</dt>
								<dd>{t(`sec.do.${n}.b`)}</dd>
							</div>
						{/each}
					</dl>
				</div>
				<div class="col dont">
					<h3>{t('sec.dont')}</h3>
					<dl>
						{#each donts as n (n)}
							<div class="row">
								<dt>{t(`sec.dont.${n}.t`)}</dt>
								<dd>{t(`sec.dont.${n}.b`)}</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cols {
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		gap: 0 3rem;
		border-top: 1px solid var(--color-line-strong);
	}
	.col {
		padding-top: 1.25rem;
	}
	h3 {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-ink);
		margin-bottom: 0.5rem;
	}
	.dont h3 {
		color: var(--color-ink-2);
	}
	.row {
		display: grid;
		grid-template-columns: minmax(0, 11rem) minmax(0, 1fr);
		gap: 0.25rem 1.5rem;
		padding-block: 0.875rem;
		border-top: 1px solid var(--color-line);
	}
	dt {
		font-weight: 500;
		color: var(--color-ink);
		font-size: 0.9375rem;
		line-height: 1.45;
	}
	dd {
		font-size: 0.875rem;
		line-height: 1.55;
		color: var(--color-ink-2);
	}
	.dont .row {
		grid-template-columns: 1fr;
	}
	.dont dt {
		color: var(--color-ink-2);
		text-decoration: line-through;
		text-decoration-color: var(--color-line-strong);
		text-decoration-thickness: 1px;
	}
	@media (max-width: 1023px) {
		.cols {
			grid-template-columns: 1fr;
		}
		.col.dont {
			border-top: 1px solid var(--color-line-strong);
			margin-top: 1.5rem;
		}
	}
	@media (max-width: 639px) {
		.row {
			grid-template-columns: 1fr;
		}
	}
</style>
