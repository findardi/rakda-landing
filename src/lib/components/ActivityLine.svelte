<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import type { Entry } from '$lib/demo/activity';

	let { entries }: { entries: Entry[] } = $props();
	const { t } = getI18n();

	// Recency is ink darkness: the newest line is the darkest, older lines thin to muted.
	const SHADES = ['var(--color-ink)', 'var(--color-ink-2)', 'var(--color-ink-3)'];
	const shade = (i: number) => SHADES[i] ?? 'var(--color-muted)';
</script>

<section class="act" aria-live="polite">
	<header class="head">
		<h3>{t('activity.title')}</h3>
		<p class="note">{t('activity.appendOnly')}</p>
	</header>
	<ol>
		{#each entries as e, i (e.id)}
			<li style:color={shade(i)}>
				<time class="font-mono">{e.time}</time>
				<span class="body"
					><span class="actor" class:font-mono={e.mono}>{e.actor}</span> {e.text}</span
				>
			</li>
		{/each}
	</ol>
</section>

<style>
	.act {
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--color-line);
	}
	.head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}
	h3 {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-ink);
	}
	.note {
		font-size: 0.6875rem;
		color: var(--color-muted);
		text-align: right;
	}
	ol {
		display: flex;
		flex-direction: column;
	}
	li {
		display: grid;
		grid-template-columns: 3rem minmax(0, 1fr);
		gap: 0.5rem;
		padding-block: 0.375rem;
		border-top: 1px solid var(--color-line);
		font-size: 0.8125rem;
		line-height: 1.45;
	}
	li:first-child {
		animation: append 240ms var(--ease-out-expo) both;
	}
	time {
		font-size: 0.6875rem;
		padding-top: 0.125rem;
	}
	.actor {
		font-weight: 500;
	}
	.actor.font-mono {
		font-size: 0.75rem;
		font-weight: 400;
	}
	@keyframes append {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
</style>
