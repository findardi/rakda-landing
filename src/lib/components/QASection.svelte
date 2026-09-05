<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import { secnum } from '$lib/refs';
	import { GROUPS } from '$lib/demo/data';
	import SimBadge from './SimBadge.svelte';

	const { t, locale } = getI18n();

	type Status = 'waiting' | 'answered';
	type Thread = { q: string; a?: string; status: Status; group: number };
	const threads: Thread[] = [
		{ q: t('qa.q1'), a: t('qa.a1'), status: 'answered', group: 0 },
		{ q: t('qa.q2'), status: 'waiting', group: 0 },
		{ q: t('qa.q3'), a: t('qa.a3'), status: 'answered', group: 1 }
	];
	const silos = [
		{ who: GROUPS[0].name[locale], items: threads.filter((x) => x.group === 0), owner: false },
		{ who: GROUPS[1].name[locale], items: threads.filter((x) => x.group === 1), owner: false },
		{ who: t('qa.owner'), items: threads, owner: true }
	];
</script>

<section id="qa" class="section qa" aria-labelledby="qa-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="qa-h" class="h2">
				<span class="secnum font-mono">{secnum('qa')}</span>{t('qa.title')}
			</h2>
			<p class="lede">{t('qa.desc')}</p>
		</div>

		<div class="content">
			<SimBadge />
			<div class="silos">
				{#each silos as silo (silo.who)}
					<div class="silo" class:owner={silo.owner}>
						<h3>{t('qa.sees', { who: silo.who })}</h3>
						<ul>
							{#each silo.items as th (th.q)}
								<li>
									<p class="q">{th.q}</p>
									<p class="row">
										<span class="status" class:waiting={th.status === 'waiting'}
											>{t(
												th.status === 'waiting' ? 'qa.status.waiting' : 'qa.status.answered'
											)}</span
										>
										{#if silo.owner}
											<span class="from"
												>{t('qa.from', { group: GROUPS[th.group].name[locale] })}</span
											>
										{/if}
									</p>
									{#if th.a}
										<p class="a">{th.a}</p>
									{/if}
								</li>
							{/each}
						</ul>
						{#if silo.owner}
							<p class="tools">
								<span class="chip chip-sans">{t('qa.export')}</span>
								<span class="chip chip-sans">{t('qa.quota')}</span>
							</p>
						{/if}
					</div>
				{/each}
			</div>

			<div class="faq">
				<span class="chip chip-primary">{t('qa.faq')}</span>
				<div>
					<p class="q">{t('qa.faqQ')}</p>
					<p class="a">{t('qa.faqA')}</p>
					<p class="note">{t('qa.faqNote')}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.silos {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0;
		border-top: 1px solid var(--color-line-strong);
	}
	.silo {
		padding: 1.25rem 1.125rem 1.5rem 0;
		border-right: 1px solid var(--color-line);
	}
	.silo + .silo {
		padding-left: 1.125rem;
	}
	.silo:last-child {
		border-right: 0;
		padding-right: 0;
	}
	.silo h3 {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-ink);
		margin-bottom: 0.875rem;
	}
	.silo.owner {
		background: var(--color-surface);
		margin-block: -1px;
		border-top: 1px solid var(--color-ink);
		padding-top: calc(1.25rem + 1px);
	}
	ul {
		display: flex;
		flex-direction: column;
	}
	li {
		padding-block: 0.875rem;
		border-top: 1px solid var(--color-line);
	}
	li:first-child {
		border-top: 0;
		padding-top: 0;
	}
	.q {
		font-size: 0.9375rem;
		line-height: 1.45;
		color: var(--color-ink);
		font-weight: 500;
	}
	/* The guest silos show what each side sees; the owner's queue is the reading
	   path, so the same question in a guest silo is set one step lighter. */
	.silo:not(.owner) .q {
		color: var(--color-ink-3);
	}
	.silo:not(.owner) .a {
		color: var(--color-muted);
	}
	.row {
		display: flex;
		gap: 0.75rem;
		align-items: baseline;
		margin-top: 0.375rem;
		font-size: 0.75rem;
	}
	.status {
		color: var(--color-accent);
		font-weight: 500;
	}
	.status.waiting {
		color: var(--color-warning-ink);
	}
	.from {
		color: var(--color-muted);
	}
	.a {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--color-ink-2);
	}
	.tools {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}
	.faq {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 1.25rem;
		align-items: start;
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-line-strong);
	}
	.faq .q {
		font-size: 1rem;
	}
	.note {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		color: var(--color-muted);
	}
	@media (max-width: 767px) {
		.silos {
			grid-template-columns: 1fr;
		}
		.silo,
		.silo + .silo,
		.silo:last-child {
			padding: 1.25rem 0;
			border-right: 0;
			border-bottom: 1px solid var(--color-line);
		}
		.silo.owner {
			margin: 0;
			padding-inline: 1rem;
			border: 1px solid var(--color-line-strong);
			border-radius: var(--radius-box);
		}
	}
</style>
