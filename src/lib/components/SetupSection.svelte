<script lang="ts">
	import type { Key } from '$lib/i18n';
	import { getI18n } from '$lib/i18n/context';
	import { secnum } from '$lib/refs';
	import { ACCESS_UNTIL, FOLDERS, GROUPS, ROOM_NAME, TEMPLATES } from '$lib/demo/data';
	import { PERMS, type Cell } from '$lib/demo/permissions';
	import PermIcon from './PermIcon.svelte';

	const { t, locale } = getI18n();

	// Six steps, in the order the app itself walks a new owner: account, room,
	// template, documents, groups and folder access, invitations and opening.
	const steps = [1, 2, 3, 4, 5, 6] as const;

	// Every artifact below is a state the app really shows at that step, drawn
	// with the same demonstration data as the grid. Digits and the address are invented.
	const SIGNUP_EMAIL = 'anda@perusahaan.example';
	const OTP = ['4', '8', '2', '0', '1', '9'] as const;
	const tpl = TEMPLATES[0];
	const docs = [
		{ folder: FOLDERS[1], version: 1 },
		{ folder: FOLDERS[2], version: 2 }
	] as const;
	const group = GROUPS[0];
	const folder = FOLDERS[1];
	const cell: Cell = { view: true, watermark: true, download: false, original: false };
</script>

<section id="setup" class="section setup" aria-labelledby="setup-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="setup-h" class="h2">
				<span class="secnum font-mono">{secnum('setup')}</span>{t('setup.title')}
			</h2>
			<p class="lede">{t('setup.desc')}</p>
		</div>

		<div class="content">
			<ol class="steps" aria-label={t('setup.steps')}>
				{#each steps as n (n)}
					<li class="step">
						<h3>
							<span class="n font-mono">{n}</span>{t(`setup.${n}.t` as Key)}
						</h3>
						<p class="body">{t(`setup.${n}.b` as Key)}</p>

						<div class="art">
							{#if n === 1}
								<p class="artlabel">
									{t('setup.1.art')} <span class="mail font-mono">{SIGNUP_EMAIL}</span>
								</p>
								<span class="otp" aria-hidden="true">
									{#each OTP as d, i (i)}
										<span class="digit font-mono" class:caret={i === OTP.length - 1}>{d}</span>
									{/each}
								</span>
							{:else if n === 2}
								<div class="room">
									<span class="tile font-mono" aria-hidden="true">PC</span>
									<span class="rname">{ROOM_NAME}</span>
									<span class="chip">{t('life.status')}: {t('life.prepare')}</span>
								</div>
							{:else if n === 3}
								<div class="row">
									<span class="rname">{tpl.name[locale]}</span>
									<span class="chip">{t('tpl.folders', { n: tpl.count })}</span>
								</div>
								<p class="ctl">
									<span class="chip chip-sans">{t('tpl.apply', { n: tpl.count })}</span>
								</p>
							{:else if n === 4}
								<ul class="docs">
									{#each docs as d (d.folder.id)}
										<li>
											<span class="dname">{d.folder.doc[locale]}</span>
											<span class="dmeta font-mono"
												>{t('setup.pages', { n: d.folder.pages })} · v{d.version}</span
											>
										</li>
									{/each}
								</ul>
							{:else if n === 5}
								<span class="rname"
									>{t('setup.5.art', {
										group: group.name[locale],
										folder: folder.name[locale]
									})}</span
								>
								<span class="segs" aria-hidden="true">
									{#each PERMS as p (p)}
										<span class="seg" class:on={cell[p]}><PermIcon perm={p} /></span>
									{/each}
								</span>
								<p class="artmeta">{t('setup.5.state')}</p>
							{:else}
								<p class="inv font-mono">
									<span>{group.reader}</span> · <span>{group.name[locale]}</span> ·
									<span>{t('setup.6.until', { date: ACCESS_UNTIL[locale] })}</span>
								</p>
								<p class="ctl">
									<span class="chip chip-sans">{t('setup.6.open')}</span>
									<span class="chip chip-primary">{t('life.status')}: {t('life.active')}</span>
								</p>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style>
	.steps {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.25rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--color-line-strong);
	}
	.step {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1.25rem 1.5rem;
		/* The one filled card on the page: a solid step down to `panel`, neutral, never
		   teal, so the six steps read as tiles set into the ground. */
		background: var(--color-panel);
		border: 1px solid var(--color-line);
		border-radius: var(--radius-box);
	}
	h3 {
		display: flex;
		align-items: baseline;
		gap: 0.625rem;
		font-size: 0.9375rem;
		font-weight: 500;
		line-height: 1.45;
		color: var(--color-ink);
	}
	.n {
		flex: none;
		font-size: 0.8125rem;
		font-weight: 500;
		letter-spacing: 0.02em;
		color: var(--color-muted);
	}
	.body {
		font-size: 0.875rem;
		line-height: 1.55;
		color: var(--color-ink-2);
	}

	/* The artifact: what the app shows at that step, pinned to the card's foot so
	   the row's artifacts line up. */
	.art {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.625rem;
		min-height: 5.5rem;
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid var(--color-line);
	}
	.art > * {
		max-width: 100%;
	}
	/* Title, body, and artifact share row tracks across the grid, so the rule above
	   every artifact sits on one line no matter how long a title or body runs. */
	@supports (grid-template-rows: subgrid) {
		.step {
			display: grid;
			grid-template-rows: subgrid;
			grid-row: span 3;
			row-gap: 0.5rem;
		}
		.art {
			min-height: 0;
			margin-top: 0;
		}
	}
	.artlabel,
	.artmeta {
		font-size: 0.75rem;
		line-height: 1.5;
		color: var(--color-muted);
	}
	.mail {
		font-size: 0.75rem;
		color: var(--color-ink-2);
		overflow-wrap: anywhere;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem 0.75rem;
		width: 100%;
	}
	.rname {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-ink);
		min-width: 0;
		overflow-wrap: anywhere;
	}
	.row > .rname {
		flex: 1 1 auto;
	}
	.ctl {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	/* 1 · the verification code: six digits, the caret after the last, one segmented frame. */
	.otp {
		display: inline-flex;
		border: 1px solid var(--color-line-strong);
		border-radius: var(--radius-field);
		background: var(--color-surface);
		overflow: hidden;
	}
	.digit {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2px;
		width: 2rem;
		height: 2.25rem;
		font-size: 0.875rem;
		color: var(--color-ink);
		border-right: 1px solid var(--color-line);
	}
	.digit:last-child {
		border-right: 0;
	}
	.caret::after {
		content: '';
		width: 1px;
		height: 1rem;
		background: var(--color-primary);
	}

	/* 2 · the room as it appears on the list the moment it is created. */
	.room {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem 0.75rem;
		width: 100%;
	}
	.tile {
		display: inline-grid;
		place-items: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: var(--radius-field);
		background: var(--color-surface);
		border: 1px solid var(--color-line);
		color: var(--color-ink-2);
		font-size: 0.75rem;
		font-weight: 500;
		flex: none;
	}
	.room .rname {
		font-weight: 600;
	}
	.room .chip {
		margin-left: auto;
	}

	/* 4 · documents in a folder: name, page count, version. */
	.docs {
		width: 100%;
	}
	.docs li {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		align-items: baseline;
		gap: 0.75rem;
		padding-block: 0.5rem;
		border-top: 1px solid var(--color-line);
	}
	.docs li:first-child {
		padding-top: 0;
		border-top: 0;
	}
	.dname {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-ink);
		min-width: 0;
		overflow-wrap: anywhere;
	}
	.dmeta {
		font-size: 0.6875rem;
		color: var(--color-muted);
		white-space: nowrap;
	}

	/* 5 · one cell of the permission grid, at rest: on is ink, off is muted. */
	.segs {
		display: inline-flex;
		flex: none;
		border: 1px solid var(--color-line-strong);
		border-radius: var(--radius-field);
		background: var(--color-surface);
		overflow: hidden;
	}
	.seg {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 1.75rem;
		color: var(--color-muted);
		border-right: 1px solid var(--color-line);
	}
	.seg:last-child {
		border-right: 0;
	}
	.seg.on {
		background: var(--color-ink);
		color: var(--color-surface);
	}

	/* 6 · the invitation row as the activity line records it; wraps only at the dots. */
	.inv {
		font-size: 0.75rem;
		line-height: 1.5;
		color: var(--color-ink-2);
	}
	.inv > span {
		white-space: nowrap;
	}

	@media (max-width: 767px) {
		.steps {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		.step {
			padding: 1rem;
		}
	}
</style>
