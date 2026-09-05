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
			<p class="lede big">{t('sec.desc')}</p>
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
								<dt>
									<span class="not font-mono">{t('sec.notClaimed')}</span>
									{t(`sec.dont.${n}.t`)}
								</dt>
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
	/* The trust sheet is the closing argument: the page's one larger measure, more
	   air above and below, and ledger terms set a step up from every other sheet. */
	.sec {
		padding-block: 7rem;
	}
	.big {
		font-size: 1.125rem;
		line-height: 1.55;
	}
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
		margin-bottom: 0.75rem;
	}
	.dont h3 {
		color: var(--color-ink-2);
	}
	.row {
		display: grid;
		grid-template-columns: minmax(0, 12rem) minmax(0, 1fr);
		gap: 0.375rem 1.5rem;
		padding-block: 1.125rem;
		border-top: 1px solid var(--color-line);
	}
	dt {
		font-weight: 600;
		color: var(--color-ink);
		font-size: 1.0625rem;
		line-height: 1.35;
		letter-spacing: -0.01em;
		text-wrap: balance;
	}
	dd {
		font-size: 0.9375rem;
		line-height: 1.55;
		color: var(--color-ink-2);
		max-width: 52ch;
	}
	.dont .row {
		grid-template-columns: 1fr;
	}
	/* A non-claim is marked in the machine voice, not struck through: the term stays
	   legible and the mark carries the meaning at full contrast. */
	.dont dt {
		color: var(--color-ink-2);
	}
	.not {
		display: block;
		margin-bottom: 0.25rem;
		font-size: 0.6875rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-muted);
	}
	@media (max-width: 1199px) {
		.row {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 1023px) {
		.cols {
			grid-template-columns: 1fr;
		}
		.col.dont {
			border-top: 1px solid var(--color-line-strong);
			margin-top: 2rem;
		}
	}
	@media (max-width: 767px) {
		.sec {
			padding-block: 4.5rem;
		}
	}
</style>
