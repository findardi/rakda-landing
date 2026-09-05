<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import type { Folder } from '$lib/demo/data';
	import type { Cell } from '$lib/demo/permissions';

	let {
		groupName,
		folder,
		cell,
		stamp,
		ondownload
	}: {
		groupName: string;
		folder: Folder;
		cell: Cell;
		stamp: string;
		ondownload: (clean: boolean) => void;
	} = $props();

	const { t, locale } = getI18n();
	const LINES = [0, 1, 2, 3, 4, 5, 6];

	let title = $derived(folder.doc[locale].replace(/\.pdf$/i, ''));
</script>

<section class="preview">
	<header class="head">
		<p class="who">
			<span class="label">{t('preview.viewingAs')}</span>
			<span class="group font-mono">{groupName}</span>
		</p>
		<p class="docline">
			<span class="docname">{folder.doc[locale]}</span>
			<span class="pages font-mono">{t('preview.page', { n: 1, total: folder.pages })}</span>
		</p>
	</header>

	{#if !cell.view}
		<div class="forbidden">
			<p class="ftitle">{t('preview.forbidden.title', { group: groupName })}</p>
			<p class="fbody">
				{t('preview.forbidden.body', { group: groupName, folder: folder.name[locale] })}
			</p>
		</div>
	{:else}
		<div class="page">
			<article class="doc" aria-label={t('preview.doc')}>
				<p class="conf font-mono">
					{t('preview.confidential')} · v1 · {folder.name[locale]}
				</p>
				<p class="dtitle">{title}</p>
				<p class="excerpt">{folder.excerpt[locale]}</p>
				<table class="dtable">
					<tbody>
						{#each folder.rows as [label, value] (label.id)}
							<tr><th scope="row">{label[locale]}</th><td class="font-mono">{value}</td></tr>
						{/each}
					</tbody>
				</table>
				<p class="fine font-mono">{t('preview.doc')}</p>
			</article>
			{#key `${folder.id}-${groupName}`}
				{#if cell.watermark}
					<div class="wm" aria-hidden="true">
						{#each LINES as i (i)}
							<span style:--i={i}>{stamp} &nbsp;&nbsp; {stamp}</span>
						{/each}
					</div>
					<p class="sr-only">{t('preview.wmAria', { text: stamp })}</p>
				{/if}
			{/key}
		</div>
		<footer class="foot">
			<div class="chips">
				{#if cell.watermark}
					<span class="chip chip-primary">{t('preview.watermarked')}</span>
				{/if}
			</div>
			<div class="dl">
				{#if cell.original}
					<button type="button" class="btn btn-quiet btn-sm" onclick={() => ondownload(true)}
						>{t('preview.download.clean')}</button
					>
					<p class="hint">{t('preview.download.cleanHint')}</p>
				{:else if cell.download}
					<button type="button" class="btn btn-quiet btn-sm" onclick={() => ondownload(false)}
						>{t('preview.download.marked')}</button
					>
					<p class="hint">{t('preview.download.markedHint', { n: folder.pages })}</p>
				{:else}
					<button type="button" class="btn btn-quiet btn-sm" disabled
						>{t('preview.download.marked')}</button
					>
					<p class="hint">{t('preview.download.off', { group: groupName })}</p>
				{/if}
			</div>
		</footer>
	{/if}
</section>

<style>
	.preview {
		background: var(--color-panel);
		border: 1px solid var(--color-line);
		border-radius: var(--radius-box);
		padding: 0.875rem;
	}
	.head {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-bottom: 0.75rem;
	}
	.who {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		font-size: 0.75rem;
		color: var(--color-muted);
	}
	.group {
		color: var(--color-ink);
		font-size: 0.75rem;
	}
	.docline {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		align-items: baseline;
	}
	.docname {
		font-weight: 500;
		font-size: 0.875rem;
		color: var(--color-ink);
		overflow-wrap: anywhere;
	}
	.pages {
		font-size: 0.6875rem;
		color: var(--color-muted);
		white-space: nowrap;
	}
	.page {
		position: relative;
		overflow: hidden;
		height: 16rem;
		background: var(--color-surface);
		border: 1px solid var(--color-line);
		border-radius: var(--radius-field);
		box-shadow: 0 1px 2px color-mix(in oklch, var(--color-ink) 6%, transparent);
	}
	.doc {
		padding: 1.125rem 1.375rem;
	}
	.conf {
		font-size: 0.625rem;
		letter-spacing: 0.08em;
		color: var(--color-muted);
		margin-bottom: 0.625rem;
	}
	.dtitle {
		font-size: 1.0625rem;
		font-weight: 600;
		line-height: 1.25;
		color: var(--color-ink);
		margin-bottom: 0.625rem;
	}
	.excerpt {
		font-size: 0.8125rem;
		line-height: 1.55;
		color: var(--color-ink-2);
		margin-bottom: 0.625rem;
	}
	.dtable {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.75rem;
	}
	.dtable th,
	.dtable td {
		padding: 0.25rem 0;
		border-top: 1px solid var(--color-line);
		text-align: left;
	}
	.dtable th {
		font-weight: 450;
		color: var(--color-ink-2);
	}
	.dtable td {
		text-align: right;
		color: var(--color-ink);
	}
	.fine {
		margin-top: 0.625rem;
		font-size: 0.625rem;
		letter-spacing: 0.08em;
		color: var(--color-muted);
	}
	.wm {
		position: absolute;
		inset: -30%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		transform: rotate(-24deg);
		pointer-events: none;
		animation: burn 320ms var(--ease-out-expo) both;
	}
	.wm span {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		letter-spacing: 0.06em;
		white-space: nowrap;
		color: var(--color-primary);
		opacity: 0.28;
		transform: translateX(calc(var(--i) * -7%));
	}
	@keyframes burn {
		from {
			opacity: 0;
			filter: blur(6px);
		}
		to {
			opacity: 1;
			filter: blur(0);
		}
	}
	.forbidden {
		height: 16rem;
		display: grid;
		place-content: center;
		text-align: center;
		padding: 2rem;
		border: 1px dashed var(--color-line-strong);
		border-radius: var(--radius-field);
		background: var(--color-ground);
	}
	.ftitle {
		font-weight: 600;
		color: var(--color-ink);
		margin-bottom: 0.375rem;
	}
	.fbody {
		font-size: 0.8125rem;
		color: var(--color-ink-2);
		max-width: 32ch;
		margin-inline: auto;
	}
	.foot {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-top: 0.5rem;
	}
	.chips {
		min-height: 1.5rem;
		padding-top: 0.25rem;
	}
	.dl {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.375rem;
		text-align: right;
	}
	.hint {
		font-size: 0.6875rem;
		line-height: 1.4;
		color: var(--color-muted);
		max-width: 26ch;
	}
	/* Inside the stacked layout's bottom sheet the page is shorter: stamp, title,
	   two lines of excerpt, and the watermark still burning across. */
	@media (max-width: 1023px) {
		.page,
		.forbidden {
			height: 11rem;
		}
		.doc {
			padding: 0.875rem 1rem;
		}
		.dtable,
		.fine {
			display: none;
		}
		.excerpt {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			margin-bottom: 0;
		}
		.head {
			margin-bottom: 0.5rem;
		}
	}
	@media (max-width: 767px) {
		.preview {
			padding: 0.75rem;
		}
		.head {
			gap: 0.125rem;
			margin-bottom: 0.375rem;
		}
		.docname {
			flex: 1 1 auto;
			min-width: 0;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.page,
		.forbidden {
			height: 7.5rem;
		}
		.forbidden {
			padding: 1rem;
		}
		.foot {
			margin-top: 0.375rem;
			align-items: center;
		}
		.hint {
			display: none;
		}
	}
	/* Short phones: the sheet gives the matrix a little more room. */
	@media (max-width: 767px) and (max-height: 700px) {
		.page,
		.forbidden {
			height: 6.5rem;
		}
	}
</style>
