<script lang="ts">
	import { localePath } from '$lib/i18n';
	import { getI18n } from '$lib/i18n/context';
	import { TEMPLATES, TEMPLATE_FOLDER_TOTAL } from '$lib/demo/data';
	import { REFS } from '$lib/refs';

	// One row per template: the person, their pain, and the template that answers it.
	const { t, locale } = getI18n();
	const byKey = (key: string) => TEMPLATES.find((x) => x.key === key) ?? TEMPLATES[0];
	const rows = [
		{ n: 1, tpl: byKey('fundraising') },
		{ n: 2, tpl: byKey('ma-dd') },
		{ n: 3, tpl: byKey('legal') },
		{ n: 4, tpl: byKey('property') },
		{ n: 5, tpl: byKey('audit') }
	] as const;
	const tree = localePath(locale, '', REFS.templates.path) + '#' + REFS.templates.anchor;
</script>

<section id="who" class="section who" aria-labelledby="who-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="who-h" class="h2">{t('who.title')}</h2>
			<p class="lede">{t('who.desc')}</p>
			<p class="facts font-mono">
				{t('who.facts', { t: TEMPLATES.length, f: TEMPLATE_FOLDER_TOTAL })}
			</p>
		</div>
		<ol class="rows">
			{#each rows as row (row.n)}
				<li class="row">
					<p class="persona">{t(`who.${row.n}.p`)}</p>
					<p class="pain">{t(`who.${row.n}.b`)}</p>
					<p class="tpl">
						<span class="chip"
							>{row.tpl.name[locale]} · {t('tpl.folders', { n: row.tpl.count })}</span
						>
						<a href={tree}>{t('who.tree')}</a>
					</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.facts {
		margin-top: 1rem;
		font-size: 0.75rem;
		color: var(--color-muted);
	}
	.rows {
		border-top: 1px solid var(--color-line-strong);
	}
	.row {
		display: grid;
		grid-template-columns: minmax(0, 13rem) minmax(0, 1fr) auto;
		gap: 0.375rem 1.5rem;
		align-items: baseline;
		padding-block: 1.125rem;
		border-bottom: 1px solid var(--color-line);
	}
	.persona {
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.35;
		letter-spacing: -0.01em;
		color: var(--color-ink);
	}
	.pain {
		font-size: 0.9375rem;
		line-height: 1.55;
		color: var(--color-ink-2);
		max-width: 48ch;
	}
	.tpl {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.375rem;
		font-size: 0.8125rem;
	}
	.tpl a {
		color: var(--color-ink-2);
	}
	.tpl a:hover {
		color: var(--color-ink);
	}
	@media (max-width: 1199px) {
		.row {
			grid-template-columns: minmax(0, 13rem) minmax(0, 1fr);
		}
		.tpl {
			grid-column: 2;
			flex-direction: row;
			align-items: baseline;
			gap: 1rem;
		}
	}
	@media (max-width: 767px) {
		.row {
			grid-template-columns: 1fr;
		}
		.tpl {
			grid-column: 1;
		}
	}
</style>
