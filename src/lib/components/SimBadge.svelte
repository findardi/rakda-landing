<script lang="ts">
	import { getI18n } from '$lib/i18n/context';

	// The frame around every demonstration: readable at a glance, on the grid, the
	// viewer, and each mock of the app, so no block can pass for the product itself.
	let { size = 'md' }: { size?: 'md' | 'sm' } = $props();

	const { t } = getI18n();
</script>

<p class="sim" class:sm={size === 'sm'} role="note">
	<svg
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
		<path d="M8 2.5 14 13H2L8 2.5Z" />
		<path d="M8 6.5v3M8 11.2v.1" />
	</svg>
	<span class="font-mono">{t('sim.badge')}</span>
	<span class="sr-only">{t('sim.aria')}</span>
</p>

<style>
	.sim {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.875rem;
		padding: 0.4375rem 0.75rem;
		border: 1.5px dashed var(--color-warning-ink);
		border-radius: var(--radius-field);
		color: var(--color-warning-ink);
		background: color-mix(in oklch, var(--color-warning-ink) 7%, var(--color-surface));
		font-size: 0.8125rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		line-height: 1.2;
	}
	.sim.sm {
		align-self: flex-start;
		margin-bottom: 0.125rem;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
	}
</style>
