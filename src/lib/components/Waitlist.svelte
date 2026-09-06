<script lang="ts">
	import { page } from '$app/state';
	import { getI18n } from '$lib/i18n/context';
	import { ORG } from '$lib/legal/content';

	// The one form on the site: an email, posted to the same origin (worker/index.ts
	// writes it to Workers KV). Works without JavaScript through a redirect back to
	// this page with ?joined=1; with JavaScript the answer is shown in place.
	let { id = 'waitlist', size = 'md' }: { id?: string; size?: 'md' | 'lg' } = $props();

	const { t, locale } = getI18n();
	let state = $state<'idle' | 'pending' | 'ok' | 'err'>('idle');
	$effect(() => {
		if (page.url.searchParams.get('joined') === '1') state = 'ok';
	});

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		state = 'pending';
		try {
			const res = await fetch(form.action, {
				method: 'POST',
				body: new FormData(form),
				headers: { Accept: 'application/json' }
			});
			state = res.ok ? 'ok' : 'err';
		} catch {
			state = 'err';
		}
	}
</script>

{#if state === 'ok'}
	<p class="wl-ok" role="status">{t('wl.ok')}</p>
{:else}
	<form
		class="wl"
		class:lg={size === 'lg'}
		{id}
		method="post"
		action="/api/waitlist"
		onsubmit={submit}
	>
		<input type="hidden" name="lang" value={locale} />
		<label class="sr-only" for="{id}-email">{t('wl.label')}</label>
		<input
			id="{id}-email"
			class="field"
			type="email"
			name="email"
			required
			maxlength="254"
			autocomplete="email"
			placeholder={t('wl.placeholder')}
			disabled={state === 'pending'}
		/>
		<button
			class="btn btn-primary"
			class:lg={size === 'lg'}
			type="submit"
			disabled={state === 'pending'}
			>{state === 'pending' ? t('wl.pending') : t('wl.submit')}</button
		>
	</form>
	<p class="hint" class:err={state === 'err'} role="status">
		{state === 'err' ? t('wl.err', { email: ORG.email }) : t('wl.hint')}
	</p>
{/if}

<style>
	.wl {
		display: flex;
		gap: 0.5rem;
		max-width: 30rem;
	}
	.field {
		flex: 1 1 12rem;
		min-width: 0;
		min-height: 2.75rem;
		padding: 0.5rem 0.75rem;
		font: inherit;
		font-size: 0.9375rem;
		color: var(--color-ink);
		background: var(--color-surface);
		border: 1px solid var(--color-line-strong);
		border-radius: var(--radius-field);
		transition: border-color 150ms ease-out;
	}
	.field::placeholder {
		color: var(--color-muted);
	}
	.field:hover {
		border-color: var(--color-ink-3);
	}
	.field:focus-visible {
		outline-offset: 0;
		border-color: var(--color-primary);
	}
	.field:disabled {
		background: var(--color-panel);
	}
	.lg .field,
	.btn.lg {
		min-height: 3rem;
		font-size: 1rem;
	}
	.btn.lg {
		padding-inline: 1.375rem;
	}
	.btn {
		white-space: nowrap;
	}
	.hint {
		margin-top: 0.5rem;
		font-size: 0.8125rem;
		line-height: 1.5;
		color: var(--color-muted);
		max-width: 44ch;
	}
	.hint.err {
		color: var(--color-error);
	}
	.wl-ok {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.45;
		color: var(--color-ink);
		max-width: 40ch;
	}
	@media (max-width: 479px) {
		.wl {
			flex-direction: column;
		}
		.field {
			flex: none;
			width: 100%;
		}
		.btn {
			width: 100%;
		}
	}
</style>
