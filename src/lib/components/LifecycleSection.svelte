<script lang="ts">
	import SimBadge from './SimBadge.svelte';
	import { getI18n } from '$lib/i18n/context';
	import { secnum } from '$lib/refs';
	import { FOLDERS, ROOM_NAME } from '$lib/demo/data';

	const { t, locale } = getI18n();

	const states = [
		{
			key: 'prepare',
			label: t('life.prepare'),
			hint: t('life.prepare.hint'),
			body: t('life.prepare.body'),
			guests: t('life.guestsNone')
		},
		{
			key: 'active',
			label: t('life.active'),
			hint: t('life.active.hint'),
			body: t('life.active.body'),
			guests: t('life.guests', { n: 6 })
		},
		{
			key: 'archive',
			label: t('life.archive'),
			hint: t('life.archive.hint'),
			body: t('life.archive.body'),
			guests: t('life.guests', { n: 6 })
		}
	] as const;

	const packageMeta = t('life.packageMeta', {
		n: FOLDERS.length,
		date: locale === 'id' ? '04 Okt 2026' : '04 Oct 2026'
	});
</script>

<section id="lifecycle" class="section life" aria-labelledby="life-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="life-h" class="h2">
				<span class="secnum font-mono">{secnum('lifecycle')}</span>{t('life.title')}
			</h2>
			<p class="lede">{t('life.desc')}</p>
		</div>

		<div class="content">
			<SimBadge />
			<ol class="states">
				{#each states as s, i (s.key)}
					<li class="state" class:active={s.key === 'active'}>
						<div class="roomcard">
							<span class="tile" aria-hidden="true">PC</span>
							<span class="rname">{ROOM_NAME}</span>
							<span class="status chip" class:chip-primary={s.key === 'active'}
								>{t('life.status')}: {s.label}</span
							>
						</div>
						<p class="hint">{s.hint}</p>
						<p class="body">{s.body}</p>
						<p class="guests font-mono">{s.guests}</p>
						{#if s.key === 'archive'}
							<p class="pkg">
								<span class="pkgname">{t('life.package')}</span>
								<span class="pkgmeta font-mono">{packageMeta}</span>
							</p>
						{/if}
						{#if i < states.length - 1}
							<span class="arrow" aria-hidden="true"></span>
						{/if}
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style>
	.states {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 2rem;
	}
	.state {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.roomcard {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		align-items: center;
		gap: 0.625rem 0.75rem;
		padding: 0.875rem 1rem;
		background: var(--color-surface);
		border: 1px solid var(--color-line-strong);
		border-radius: var(--radius-box);
	}
	.state.active .roomcard {
		border-color: var(--color-primary);
	}
	.tile {
		display: inline-grid;
		place-items: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: var(--radius-field);
		background: var(--color-panel);
		color: var(--color-ink-2);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 500;
		flex: none;
	}
	.rname {
		font-weight: 600;
		color: var(--color-ink);
		min-width: 0;
		overflow-wrap: anywhere;
	}
	.status {
		grid-column: 1 / -1;
		justify-self: start;
	}
	.hint {
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--color-ink);
		line-height: 1.45;
	}
	.body {
		font-size: 0.875rem;
		line-height: 1.55;
		color: var(--color-ink-2);
	}
	.guests {
		font-size: 0.75rem;
		color: var(--color-muted);
	}
	.pkg {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		padding: 0.75rem 0.875rem;
		border: 1px dashed var(--color-line-strong);
		border-radius: var(--radius-field);
		font-size: 0.8125rem;
	}
	.pkgname {
		font-weight: 500;
		color: var(--color-ink);
	}
	.pkgmeta {
		font-size: 0.6875rem;
		color: var(--color-muted);
	}
	.arrow {
		position: absolute;
		top: 1.75rem;
		right: -1.5rem;
		width: 0.75rem;
		height: 1px;
		background: var(--color-line-strong);
	}
	.arrow::after {
		content: '';
		position: absolute;
		right: -1px;
		top: -3px;
		width: 6px;
		height: 6px;
		border-top: 1px solid var(--color-line-strong);
		border-right: 1px solid var(--color-line-strong);
		transform: rotate(45deg);
	}
	@media (max-width: 1023px) {
		.states {
			gap: 1.5rem;
		}
		.arrow {
			display: none;
		}
	}
	@media (max-width: 767px) {
		.states {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
