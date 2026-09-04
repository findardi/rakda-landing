<script lang="ts">
	import type { Perm } from '$lib/demo/permissions';

	let { perm, size = 14 }: { perm: Perm; size?: number } = $props();
</script>

<svg
	viewBox="0 0 16 16"
	width={size}
	height={size}
	fill="none"
	stroke="currentColor"
	stroke-width="1.5"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if perm === 'view'}
		<path d="M1.5 8s2.4-4.5 6.5-4.5S14.5 8 14.5 8s-2.4 4.5-6.5 4.5S1.5 8 1.5 8Z" />
		<circle cx="8" cy="8" r="2" />
	{:else if perm === 'watermark'}
		<path d="M4 1.5h5.5L13 5v9.5H4Z" />
		<path d="M9.5 1.5V5H13" />
		<path d="M6 12.5l5-5" />
		<path d="M6 9.5l2-2" />
	{:else if perm === 'download'}
		<path d="M8 2v8" />
		<path d="M4.5 6.5 8 10l3.5-3.5" />
		<path d="M2.5 12v2.5h11V12" />
	{:else}
		<path d="M4 1.5h5.5L13 5v9.5H4Z" />
		<path d="M9.5 1.5V5H13" />
		<path d="M5.75 10.25 7.25 11.75 10.5 8.5" />
	{/if}
</svg>
