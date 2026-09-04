<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import type { Key } from '$lib/i18n';
	import { FOLDERS, GROUPS } from '$lib/demo/data';
	import { PERMS, type Grid, type Perm } from '$lib/demo/permissions';
	import PermIcon from './PermIcon.svelte';

	let {
		grid,
		focus,
		ontoggle
	}: {
		grid: Grid;
		focus: { g: number; f: number };
		ontoggle: (g: number, f: number, perm: Perm) => void;
	} = $props();

	const { t, locale } = getI18n();
	const permName = (p: Perm) => t(`grid.perm.${p}` as Key);

	// On narrow screens the table shows one group at a time.
	let mobileGroup = $state(0);
</script>

<div class="tabs" role="group" aria-label={t('grid.groupTabs')}>
	{#each GROUPS as group, g (group.id)}
		<button
			type="button"
			class="tab"
			class:active={mobileGroup === g}
			aria-pressed={mobileGroup === g}
			onclick={() => (mobileGroup = g)}>{group.name[locale]}</button
		>
	{/each}
</div>

<div class="legend" aria-hidden="true">
	{#each PERMS as perm (perm)}
		<span class="lg"><span class="lgicon"><PermIcon {perm} size={12} /></span>{permName(perm)}</span
		>
	{/each}
</div>

<table class="matrix">
	<thead>
		<tr>
			<th scope="col" class="fh">{t('grid.folder')}</th>
			{#each GROUPS as group, g (group.id)}
				<th scope="col" class="gh" class:hide-sm={mobileGroup !== g}>{group.name[locale]}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each FOLDERS as folder, f (folder.id)}
			<tr>
				<th scope="row" class="fname">{folder.name[locale]}</th>
				{#each GROUPS as group, g (group.id)}
					{@const cell = grid[g][f]}
					<td class:hide-sm={mobileGroup !== g} class:focused={focus.g === g && focus.f === f}>
						<div
							class="segs"
							role="group"
							aria-label="{group.name[locale]} · {folder.name[locale]}"
						>
							{#each PERMS as perm (perm)}
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
									onclick={() => ontoggle(g, f, perm)}
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
	@media (max-width: 767px) {
		.tabs {
			display: flex;
		}
		.hide-sm {
			display: none;
		}
		.fname {
			white-space: normal;
		}
		.matrix {
			font-size: 0.8125rem;
		}
	}
</style>
