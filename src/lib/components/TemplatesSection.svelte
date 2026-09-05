<script lang="ts">
	import SimBadge from './SimBadge.svelte';
	import { getI18n } from '$lib/i18n/context';
	import { secnum } from '$lib/refs';
	import { TEMPLATES, type TemplateNode } from '$lib/demo/data';

	const { t, locale } = getI18n();

	let selected = $state(TEMPLATES[0].key);
	let current = $derived(TEMPLATES.find((x) => x.key === selected) ?? TEMPLATES[0]);
</script>

{#snippet tree(nodes: TemplateNode[], depth: number)}
	<ul class="lvl" style:--d={depth}>
		{#each nodes as n (n.name.id)}
			<li>
				<span class="node font-mono">{n.name[locale]}</span>
				{#if n.children}
					{@render tree(n.children, depth + 1)}
				{/if}
			</li>
		{/each}
	</ul>
{/snippet}

<section id="templates" class="section tpl" aria-labelledby="tpl-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="tpl-h" class="h2">
				<span class="secnum font-mono">{secnum('templates')}</span>{t('tpl.title')}
			</h2>
			<p class="lede">{t('tpl.desc')}</p>
		</div>

		<div class="content">
			<SimBadge />
			<div class="gallery">
				<div class="list" role="tablist" aria-label={t('tpl.pick')}>
					{#each TEMPLATES as tp (tp.key)}
						<button
							type="button"
							role="tab"
							id="tpl-tab-{tp.key}"
							aria-selected={selected === tp.key}
							aria-controls="tpl-panel"
							class="item"
							class:active={selected === tp.key}
							onclick={() => (selected = tp.key)}
						>
							<span class="name">{tp.name[locale]}</span>
							<span class="count font-mono">{t('tpl.folders', { n: tp.count })}</span>
							<span class="desc">{tp.desc[locale]}</span>
						</button>
					{/each}
				</div>

				<div class="tree" role="tabpanel" id="tpl-panel" aria-labelledby="tpl-tab-{current.key}">
					<p class="tlabel">{t('tpl.structure')} · {current.name[locale]}</p>
					{@render tree(current.folders, 0)}
					<p class="apply">
						<span class="chip chip-sans">{t('tpl.apply', { n: current.count })}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.gallery {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 0 3rem;
		border-top: 1px solid var(--color-line-strong);
	}
	.list {
		display: flex;
		flex-direction: column;
	}
	.item {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		grid-template-areas:
			'name count'
			'desc desc';
		gap: 0.25rem 1rem;
		text-align: left;
		padding: 1rem 0.75rem 1rem 0;
		background: none;
		border: 0;
		border-bottom: 1px solid var(--color-line);
		font: inherit;
		cursor: pointer;
		color: var(--color-ink);
		transition: background-color 150ms ease-out;
	}
	.item:hover {
		background: var(--color-surface);
	}
	.item.active {
		background: var(--color-surface);
	}
	.item.active .name {
		color: var(--color-primary-strong);
	}
	.name {
		grid-area: name;
		font-weight: 600;
		font-size: 1rem;
	}
	.count {
		grid-area: count;
		font-size: 0.6875rem;
		color: var(--color-muted);
		align-self: baseline;
	}
	.desc {
		grid-area: desc;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--color-ink-2);
	}
	.tree {
		padding: 1.25rem 0 1rem 1.5rem;
		border-left: 1px solid var(--color-line);
	}
	.tlabel {
		font-size: 0.75rem;
		color: var(--color-muted);
		margin-bottom: 0.875rem;
	}
	.lvl {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		padding-left: calc(var(--d) * 1.25rem);
	}
	.lvl .lvl {
		margin-top: 0.375rem;
		padding-left: 1.25rem;
		border-left: 1px solid var(--color-line);
	}
	.node {
		font-size: 0.8125rem;
		color: var(--color-ink);
	}
	.apply {
		margin-top: 1.25rem;
	}
	@media (max-width: 767px) {
		.gallery {
			grid-template-columns: 1fr;
		}
		.tree {
			padding-left: 0;
			border-left: 0;
			padding-top: 1.5rem;
		}
	}
</style>
