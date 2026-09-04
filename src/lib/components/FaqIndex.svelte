<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import { FAQ_GROUPS } from '$lib/faq/content';

	let { active }: { active: string | null } = $props();
	const { t, locale } = getI18n();
</script>

<nav class="index" aria-label={t('faq.index')}>
	<p class="head">
		<span class="font-mono">No.</span>
		<span>{t('faq.index')}</span>
	</p>
	<ol>
		{#each FAQ_GROUPS as group, i (group.id)}
			<li class:active={active === group.id}>
				<a href="#{group.id}" aria-current={active === group.id ? 'location' : undefined}>
					<span class="n font-mono">{i + 1}</span>
					<span class="title">{group.title[locale]}</span>
					<span class="count font-mono">{group.items.length}</span>
				</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	.index {
		margin-top: 1.75rem;
		border-top: 1px solid var(--color-line-strong);
	}
	.head {
		display: grid;
		grid-template-columns: 2.25rem minmax(0, 1fr);
		gap: 0.5rem;
		padding: 0.625rem 0 0.5rem;
		font-size: 0.6875rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--color-muted);
	}
	ol {
		display: flex;
		flex-direction: column;
	}
	li a {
		display: grid;
		grid-template-columns: 2.25rem minmax(0, 1fr) auto;
		gap: 0.5rem;
		align-items: baseline;
		padding: 0.5rem 0;
		border-top: 1px solid var(--color-line);
		text-decoration: none;
		color: var(--color-ink-2);
		transition: color 150ms ease-out;
	}
	li a:hover .title {
		color: var(--color-ink);
	}
	.n {
		font-size: 0.75rem;
		color: var(--color-muted);
		transition: color 150ms ease-out;
	}
	.title {
		font-size: 0.9375rem;
		line-height: 1.35;
		color: var(--color-ink-2);
	}
	.count {
		font-size: 0.6875rem;
		color: var(--color-muted);
	}
	/* The topic on screen carries the mark: numeral in teal, title in full ink. */
	li.active .n {
		color: var(--color-primary-strong);
		font-weight: 500;
	}
	li.active .title {
		color: var(--color-ink);
		font-weight: 500;
	}
	@media (max-width: 1023px) {
		.index {
			margin-top: 1.25rem;
		}
		ol {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.375rem;
			padding-top: 0.5rem;
		}
		.head {
			display: none;
		}
		li a {
			display: inline-flex;
			gap: 0.375rem;
			padding: 0.375rem 0.625rem;
			border: 1px solid var(--color-line-strong);
			border-radius: var(--radius-field);
			background: var(--color-surface);
		}
		.count {
			display: none;
		}
		.title {
			font-size: 0.8125rem;
		}
	}
</style>
