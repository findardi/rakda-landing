<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import { secnum } from '$lib/refs';
	import { DWELL, FOLDERS, GROUPS } from '$lib/demo/data';

	const { t, locale } = getI18n();

	const doc = FOLDERS[1];
	const reader = GROUPS[0].reader;
	const max = Math.max(...DWELL);
	const maxIdx = DWELL.indexOf(max);
	const total = DWELL.reduce((a, b) => a + b, 0);
	const read = DWELL.filter((s) => s > 0).length;

	function dwell(s: number): string {
		if (s === 0) return t('eng.unread');
		const m = Math.floor(s / 60);
		const sec = s % 60;
		return m > 0 ? t('eng.dwell', { m, s: sec }) : t('eng.dwellShort', { s: sec });
	}
</script>

<section id="activity" class="section eng" aria-labelledby="eng-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="eng-h" class="h2">
				<span class="secnum font-mono">{secnum('engagement')}</span>{t('eng.title')}
			</h2>
			<p class="lede">{t('eng.desc')}</p>
		</div>

		<figure class="card">
			<figcaption>
				<dl class="facts">
					<div>
						<dt>{t('eng.reader')}</dt>
						<dd class="font-mono">{reader}</dd>
					</div>
					<div>
						<dt>{t('eng.doc')}</dt>
						<dd>{doc.doc[locale]}</dd>
					</div>
					<div>
						<dt>{t('eng.total')}</dt>
						<dd class="font-mono">{dwell(total)}</dd>
					</div>
					<div>
						<dt>{t('eng.longest')}</dt>
						<dd class="font-mono">{t('eng.page', { n: maxIdx + 1 })} · {dwell(max)}</dd>
					</div>
					<div>
						<dt>{t('eng.read')}</dt>
						<dd class="font-mono">{t('eng.pagesRead', { read, total: DWELL.length })}</dd>
					</div>
				</dl>
			</figcaption>
			<!-- The drawn chart is decoration for sighted readers; the table below is the data. -->
			<ol class="bars" aria-hidden="true">
				{#each DWELL as s, i (i)}
					<li>
						<span
							class="bar"
							class:unread={s === 0}
							class:max={i === maxIdx}
							style:--h="{Math.max(2, (s / max) * 100)}%"
						>
							<span class="tip font-mono">{dwell(s)}</span>
						</span>
						<span class="tick font-mono">{i + 1}</span>
					</li>
				{/each}
			</ol>
			<table class="sr-only">
				<caption>{t('eng.pagesRead', { read, total: DWELL.length })}</caption>
				<tbody>
					{#each DWELL as s, i (i)}
						<tr><th scope="row">{t('eng.pageLong', { n: i + 1 })}</th><td>{dwell(s)}</td></tr>
					{/each}
				</tbody>
			</table>
			<p class="legend">{t('eng.legend')}</p>
		</figure>
	</div>
</section>

<style>
	.card {
		background: var(--color-surface);
		border: 1px solid var(--color-line);
		border-radius: var(--radius-box);
		padding: 1.25rem 1.5rem 1.25rem;
	}
	.facts {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem 1.5rem;
		margin-bottom: 1.5rem;
		font-size: 0.8125rem;
	}
	dt {
		font-size: 0.6875rem;
		color: var(--color-muted);
		margin-bottom: 0.125rem;
	}
	dd {
		color: var(--color-ink);
		overflow-wrap: anywhere;
	}
	dd.font-mono {
		font-size: 0.75rem;
	}
	.bars {
		display: grid;
		grid-template-columns: repeat(24, minmax(0, 1fr));
		gap: 2px;
		align-items: end;
		height: 9rem;
		padding-top: 1.5rem;
		border-bottom: 1px solid var(--color-line-strong);
	}
	.bars li {
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.bar {
		position: relative;
		display: block;
		width: 100%;
		height: var(--h);
		background: var(--color-primary);
		border-radius: 3px 3px 0 0;
		transition: background-color 150ms ease-out;
	}
	/* An unread page has no bar; the baseline rule alone marks its place. */
	.bar.unread {
		height: 0;
		background: transparent;
	}
	.bar:hover {
		background: var(--color-primary-strong);
	}
	.bar.unread:hover {
		background: var(--color-muted);
	}
	.tip {
		position: absolute;
		left: 50%;
		bottom: calc(100% + 0.375rem);
		transform: translateX(-50%);
		padding: 0.125rem 0.375rem;
		font-size: 0.625rem;
		white-space: nowrap;
		color: var(--color-surface);
		background: var(--color-ink);
		border-radius: 4px;
		opacity: 0;
		pointer-events: none;
		transition: opacity 150ms ease-out;
	}
	.bar:hover .tip,
	.bar.max .tip {
		opacity: 1;
	}
	.bar.max .tip {
		color: var(--color-ink);
		background: transparent;
		padding: 0;
		bottom: calc(100% + 0.25rem);
	}
	.tick {
		position: absolute;
		top: calc(100% + 0.25rem);
		left: 0;
		right: 0;
		text-align: center;
		font-size: 0.5625rem;
		color: var(--color-muted);
	}
	.bars li:not(:nth-child(4n + 1)) .tick {
		visibility: hidden;
	}
	.legend {
		margin-top: 1.75rem;
		font-size: 0.75rem;
		line-height: 1.5;
		color: var(--color-muted);
		max-width: 60ch;
	}
	@media (max-width: 767px) {
		.card {
			padding: 1rem;
		}
		.facts {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.bars li:not(:nth-child(6n + 1)) .tick {
			visibility: hidden;
		}
	}
</style>
