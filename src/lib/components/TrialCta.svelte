<script lang="ts">
	import { appUrl, contactEmail } from '$lib/app-url';
	import { getI18n } from '$lib/i18n/context';

	// The one action on the page, in the honest state the deployment allows:
	// the app's sign-up when the app exists, a mailto to be told when the trial
	// opens when only a contact address exists, and a plain statement otherwise.
	// It is never a link to nowhere.
	// `quiet` renders the same action without teal: the nav uses it while the
	// hero's own button is on screen, so a viewport never carries two teal actions.
	let {
		label,
		size = 'md',
		short = false,
		quiet = false
	}: { label: string; size?: 'sm' | 'md' | 'lg'; short?: boolean; quiet?: boolean } = $props();

	const { t } = getI18n();
	const register = appUrl('/register');
	const mailto = contactEmail
		? `mailto:${contactEmail}?subject=${encodeURIComponent(t('cta.notify.subject'))}`
		: null;
</script>

{#if register}
	<a
		class="btn"
		class:btn-primary={!quiet}
		class:btn-quiet={quiet}
		class:btn-sm={size === 'sm'}
		class:lg={size === 'lg'}
		href={register}>{label}</a
	>
{:else if mailto}
	<a
		class="btn"
		class:btn-primary={!quiet}
		class:btn-quiet={quiet}
		class:btn-sm={size === 'sm'}
		class:lg={size === 'lg'}
		href={mailto}>{short ? t('cta.notify.short') : t('cta.notify')}</a
	>
{:else if size !== 'sm'}
	<p class="soon" class:lg={size === 'lg'}>{t('cta.soon')}</p>
{/if}

<style>
	.lg {
		min-height: 3rem;
		padding-inline: 1.375rem;
		font-size: 1rem;
	}
	.soon {
		font-size: 0.9375rem;
		font-weight: 500;
		line-height: 1.45;
		color: var(--color-ink);
	}
	.soon.lg {
		font-size: 1rem;
	}
	@media (max-width: 767px) {
		a.lg {
			width: 100%;
			max-width: 22rem;
		}
	}
</style>
