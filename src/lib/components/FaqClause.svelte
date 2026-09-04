<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import { localePath, type Key } from '$lib/i18n';
	import type { FaqItem } from '$lib/faq/content';
	import { REFS } from '$lib/refs';

	let { item, number, open = false }: { item: FaqItem; number: string; open?: boolean } = $props();

	const { t, locale } = getI18n();
	const ref = $derived(item.ref ? REFS[item.ref] : null);
</script>

<details class="clause" id={item.id} {open}>
	<summary class="summary">
		<span class="num font-mono">{number}</span>
		<h3 class="q">{item.q[locale]}</h3>
		<svg
			class="chev"
			viewBox="0 0 16 16"
			width="14"
			height="14"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="M4 6.5 8 10.5l4-4" />
		</svg>
	</summary>
	<div class="body">
		<div class="answer">
			<p>{item.a[locale]}</p>
			{#if item.facts?.length}
				<dl class="facts">
					{#each item.facts as fact (fact.value)}
						<div>
							<dt>{fact.label[locale]}</dt>
							<dd class="font-mono">{fact.value}</dd>
						</div>
					{/each}
				</dl>
			{/if}
		</div>
		<aside class="margin">
			{#if ref}
				<a class="ref" href={localePath(locale, '', '/') + '#' + ref.anchor}>
					<span class="leader" aria-hidden="true"></span>
					<span class="refnum font-mono">§{ref.n}</span>
					<span class="reflabel"
						><span class="refkicker">{t('faq.proof')}</span>{t(`faq.ref.${item.ref}` as Key)}</span
					>
				</a>
			{/if}
			<a class="perma font-mono" href="#{item.id}" aria-label={t('faq.permalink', { n: number })}
				>#{number}</a
			>
		</aside>
	</div>
</details>

<style>
	.clause {
		scroll-margin-top: 5rem;
		border-top: 2px solid var(--color-line-strong);
		transition: border-color 150ms ease-out;
	}
	/* A clause the reader has opened drops to a hairline. */
	.clause[open] {
		border-top-width: 1px;
	}
	.summary {
		display: grid;
		grid-template-columns: 3.25rem minmax(0, 1fr) auto;
		gap: 0.75rem 0.5rem;
		align-items: baseline;
		padding: 1rem 0 0.875rem;
		cursor: pointer;
		list-style: none;
	}
	.summary::-webkit-details-marker {
		display: none;
	}
	.summary:hover .q {
		color: var(--color-primary-strong);
	}
	.summary:focus-visible {
		outline-offset: 4px;
	}
	.num {
		font-size: 0.8125rem;
		color: var(--color-muted);
		letter-spacing: 0.02em;
	}
	.q {
		font-size: 1.0625rem;
		font-weight: 500;
		line-height: 1.4;
		letter-spacing: -0.005em;
		color: var(--color-ink);
		transition: color 150ms ease-out;
	}
	.chev {
		color: var(--color-muted);
		align-self: center;
		transition: transform 200ms var(--ease-out-expo);
	}
	.clause[open] .chev {
		transform: rotate(180deg);
	}
	.body {
		display: grid;
		grid-template-columns: 3.25rem minmax(0, 1fr) 11rem;
		gap: 0 0.5rem;
		padding-bottom: 1.375rem;
	}
	.answer {
		grid-column: 2;
		max-width: 66ch;
	}
	.answer p {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--color-ink-2);
	}
	.facts {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem 1.25rem;
		margin-top: 0.75rem;
		font-size: 0.75rem;
	}
	.facts div {
		display: flex;
		gap: 0.5rem;
		align-items: baseline;
	}
	dt {
		color: var(--color-muted);
	}
	dd {
		color: var(--color-ink);
	}
	.margin {
		grid-column: 3;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.625rem;
		padding-left: 1.25rem;
		position: relative;
	}
	/* The reference numeral: a leader runs from the answer to the numeral and
	   pulls taut, in teal, when the reference is touched. */
	.ref {
		position: relative;
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 0.125rem 0.5rem;
		align-items: baseline;
		text-decoration: none;
		color: var(--color-ink-2);
		padding-top: 0.25rem;
	}
	/* Gutter = grid gap (0.5rem) + margin padding (1.25rem): the dot lands on the
	   answer column's edge, so the numeral is tied to the thing it references. */
	.leader {
		position: absolute;
		left: -1.75rem;
		top: 0.9rem;
		width: 1.75rem;
		height: 1px;
		background: var(--color-line-strong);
		transition:
			background-color 150ms ease-out,
			height 150ms ease-out;
	}
	.leader::before {
		content: '';
		position: absolute;
		left: -3px;
		top: -2.5px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		border: 1px solid var(--color-line-strong);
		background: var(--color-surface);
		transition: border-color 150ms ease-out;
	}
	.refnum {
		font-size: 0.8125rem;
		color: var(--color-ink);
		transition: color 150ms ease-out;
	}
	.reflabel {
		display: flex;
		flex-direction: column;
		font-size: 0.8125rem;
		line-height: 1.3;
		color: var(--color-ink);
	}
	.refkicker {
		font-size: 0.6875rem;
		color: var(--color-muted);
	}
	.ref:hover .refnum,
	.ref:focus-visible .refnum {
		color: var(--color-primary-strong);
	}
	.ref:hover .reflabel,
	.ref:focus-visible .reflabel {
		text-decoration: underline;
		text-underline-offset: 0.16em;
	}
	.ref:hover .leader,
	.ref:focus-visible .leader {
		background: var(--color-primary);
		height: 2px;
	}
	.ref:hover .leader::before,
	.ref:focus-visible .leader::before {
		border-color: var(--color-primary);
		background: var(--color-primary);
	}
	.perma {
		font-size: 0.6875rem;
		color: var(--color-muted);
		text-decoration: none;
	}
	.perma:hover,
	.perma:focus-visible {
		color: var(--color-ink);
		text-decoration: underline;
	}
	@media (max-width: 767px) {
		.summary {
			grid-template-columns: 2.5rem minmax(0, 1fr) auto;
		}
		.body {
			grid-template-columns: 2.5rem minmax(0, 1fr);
		}
		.margin {
			grid-column: 2;
			flex-direction: row;
			align-items: baseline;
			gap: 1.25rem;
			padding-left: 0;
			margin-top: 0.875rem;
		}
		/* Touch has no hover, but the numeral keeps its terminal dot. */
		.ref {
			display: flex;
			align-items: baseline;
			gap: 0.375rem;
			padding-top: 0;
		}
		.leader {
			position: static;
			width: 6px;
			height: 6px;
			border-radius: 50%;
			border: 1px solid var(--color-line-strong);
			background: var(--color-surface);
			align-self: center;
			flex: none;
		}
		.leader::before {
			display: none;
		}
	}
</style>
