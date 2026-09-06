<script lang="ts">
	import { tick } from 'svelte';
	import { getI18n } from '$lib/i18n/context';
	import type { Key } from '$lib/i18n';
	import { FOLDERS, GROUPS, type Folder, type Group } from '$lib/demo/data';
	import { PERMS, type Grid, type Perm } from '$lib/demo/permissions';
	import PermIcon from './PermIcon.svelte';

	let {
		grid,
		focus,
		ontoggle,
		onfocuscell,
		describedby,
		groups = GROUPS,
		folders = FOLDERS,
		perms = PERMS
	}: {
		grid: Grid;
		focus: { g: number; f: number };
		ontoggle: (g: number, f: number, perm: Perm) => void;
		onfocuscell: (g: number, f: number) => void;
		describedby?: string;
		groups?: readonly Group[];
		folders?: readonly Folder[];
		perms?: readonly Perm[];
	} = $props();

	const { t, locale } = getI18n();
	const permName = (p: Perm) => t(`grid.perm.${p}` as Key);
	const permTip = (p: Perm) => t(`grid.tip.${p}` as Key);

	// Below 640px the table shows one group at a time: the focused group, so the
	// tab, the ringed cell, and the preview always agree.

	// Roving focus: the whole grid is one tab stop. The tabbable segment is the
	// focused cell's segment `p`; arrows move it, and the ring and preview follow.
	let table = $state<HTMLTableElement | null>(null);
	let p = $state(0);

	function seg(g: number, f: number, i: number): HTMLButtonElement | null {
		return table?.querySelector(`[data-g="${g}"][data-f="${f}"][data-p="${i}"]`) ?? null;
	}

	async function move(g: number, f: number, i: number) {
		onfocuscell(g, f);
		p = i;
		await tick();
		seg(g, f, i)?.focus();
	}

	function onKey(e: KeyboardEvent, g: number, f: number, i: number) {
		const G = groups.length;
		const F = folders.length;
		const P = perms.length;
		let ng = g;
		let nf = f;
		let ni = i;
		switch (e.key) {
			case 'ArrowRight':
				if (i < P - 1) {
					ni = i + 1;
				} else if (g < G - 1) {
					ng = g + 1;
					ni = 0;
				} else {
					return;
				}
				break;
			case 'ArrowLeft':
				if (i > 0) {
					ni = i - 1;
				} else if (g > 0) {
					ng = g - 1;
					ni = P - 1;
				} else {
					return;
				}
				break;
			case 'ArrowDown':
				if (f < F - 1) nf = f + 1;
				else return;
				break;
			case 'ArrowUp':
				if (f > 0) nf = f - 1;
				else return;
				break;
			case 'Home':
				ng = 0;
				ni = 0;
				break;
			case 'End':
				ng = G - 1;
				ni = P - 1;
				break;
			case 'PageDown':
				nf = F - 1;
				break;
			case 'PageUp':
				nf = 0;
				break;
			default:
				return;
		}
		e.preventDefault();
		void move(ng, nf, ni);
	}

	// A segment reached by pointer or by Tab becomes the tabbable one.
	function onFocusIn(g: number, f: number, i: number) {
		if (focus.g !== g || focus.f !== f) onfocuscell(g, f);
		p = i;
	}
</script>

<div class="tabs" role="group" aria-label={t('grid.groupTabs')}>
	{#each groups as group, g (group.id)}
		<button
			type="button"
			class="tab"
			class:active={focus.g === g}
			aria-pressed={focus.g === g}
			onclick={() => onfocuscell(g, focus.f)}>{group.name[locale]}</button
		>
	{/each}
</div>

<div class="legend" aria-hidden="true">
	{#each perms as perm (perm)}
		<span class="lg"><span class="lgicon"><PermIcon {perm} size={12} /></span>{permName(perm)}</span
		>
	{/each}
</div>

<table class="matrix" bind:this={table} aria-describedby={describedby}>
	<thead>
		<tr>
			<th scope="col" class="fh">{t('grid.folder')}</th>
			{#each groups as group, g (group.id)}
				<th scope="col" class="gh" class:hide-sm={focus.g !== g}>{group.name[locale]}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each folders as folder, f (folder.id)}
			<tr>
				<th scope="row" class="fname">{folder.name[locale]}</th>
				{#each groups as group, g (group.id)}
					{@const cell = grid[g][f]}
					<td class:hide-sm={focus.g !== g} class:focused={focus.g === g && focus.f === f}>
						<div
							class="segs"
							role="group"
							aria-label="{group.name[locale]} · {folder.name[locale]}"
						>
							{#each perms as perm, i (perm)}
								<button
									type="button"
									class="seg"
									class:on={cell[perm]}
									aria-pressed={cell[perm]}
									aria-label={t('grid.cellAria', {
										perm: permName(perm),
										group: group.name[locale],
										folder: folder.name[locale]
									})}
									title={permTip(perm)}
									tabindex={focus.g === g && focus.f === f && p === i ? 0 : -1}
									data-g={g}
									data-f={f}
									data-p={i}
									onclick={() => ontoggle(g, f, perm)}
									onkeydown={(e) => onKey(e, g, f, i)}
									onfocusin={() => onFocusIn(g, f, i)}
								>
									<PermIcon {perm} />
								</button>
							{/each}
						</div>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.tabs {
		display: none;
		gap: 0.375rem;
		margin-bottom: 0.75rem;
	}
	.tab {
		flex: 1;
		min-height: 2.25rem;
		padding: 0.375rem 0.5rem;
		font: inherit;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--color-ink-2);
		background: var(--color-surface);
		border: 1px solid var(--color-line-strong);
		border-radius: var(--radius-field);
		cursor: pointer;
		transition:
			background-color 150ms ease-out,
			color 150ms ease-out;
	}
	.tab.active {
		background: var(--color-ink);
		color: var(--color-surface);
		border-color: var(--color-ink);
	}
	.legend {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem 1rem;
		margin-bottom: 0.625rem;
		font-size: 0.75rem;
		color: var(--color-muted);
	}
	.lg {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
	}
	.lgicon {
		display: inline-grid;
		place-items: center;
		width: 1.125rem;
		height: 1.125rem;
		border: 1px solid var(--color-line-strong);
		border-radius: 3px;
		color: var(--color-ink-2);
	}
	.matrix {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		font-size: 0.8125rem;
	}
	th,
	td {
		border-bottom: 1px solid var(--color-line);
		padding: 0.3125rem 0.5rem;
		text-align: left;
		vertical-align: middle;
	}
	thead th {
		font-weight: 500;
		font-size: 0.75rem;
		color: var(--color-muted);
		padding-bottom: 0.5rem;
		border-bottom-color: var(--color-line-strong);
	}
	.fh {
		padding-left: 0;
	}
	.fname {
		font-weight: 450;
		white-space: nowrap;
		padding-left: 0;
		color: var(--color-ink);
	}
	td {
		padding-left: 0.375rem;
		width: 1%;
	}
	.segs {
		display: inline-flex;
		border: 1px solid var(--color-line-strong);
		border-radius: var(--radius-field);
		overflow: hidden;
		background: var(--color-surface);
		transition: outline-color 150ms ease-out;
		outline: 2px solid transparent;
		outline-offset: 1px;
	}
	.seg {
		width: 2rem;
		height: 1.75rem;
		display: grid;
		place-items: center;
		color: var(--color-muted);
		background: transparent;
		border: 0;
		border-right: 1px solid var(--color-line);
		cursor: pointer;
		transition:
			background-color 150ms ease-out,
			color 150ms ease-out;
	}
	.seg:last-child {
		border-right: 0;
	}
	.seg:hover {
		background: var(--color-panel);
		color: var(--color-ink);
	}
	.seg.on {
		background: var(--color-ink);
		color: var(--color-surface);
	}
	.seg.on:hover {
		background: var(--color-ink-2);
	}
	.seg:focus-visible {
		outline-offset: -2px;
		border-radius: 0;
		position: relative;
		z-index: 1;
	}
	td.focused .segs {
		outline-color: var(--color-primary);
	}
	/* Under the stacked layout a focused cell scrolls clear of the sticky nav above
	   and the preview sheet below. */
	@media (max-width: 1023px) {
		.seg {
			scroll-margin-block: 4.5rem 26rem;
		}
	}
	@media (max-width: 767px) {
		.fname {
			white-space: normal;
		}
	}
	@media (max-width: 639px) {
		.tabs {
			display: flex;
		}
		.hide-sm {
			display: none;
		}
	}
</style>
