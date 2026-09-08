<script lang="ts">
	import { appUrl, sandboxUrl } from '$lib/app-url';
	import { localePath } from '$lib/i18n';
	import { getI18n } from '$lib/i18n/context';
	import Waitlist from './Waitlist.svelte';

	// The one action on the page, in the honest state the deployment allows: the
	// app's sign-up when the app exists, the waitlist form until then. The small
	// variant (the nav) never carries a form; it points at the page's form instead.
	// `quiet` renders the same action without teal: the nav uses it while the
	// hero's own action is on screen, so a viewport never carries two teal actions.
	let {
		label,
		size = 'md',
		quiet = false,
		formId = 'waitlist'
	}: { label: string; size?: 'sm' | 'md' | 'lg'; quiet?: boolean; formId?: string } = $props();

	const { t, locale } = getI18n();
	// The sandbox wins over sign-up: a visitor who can try in 15 minutes
	// without an account should never be sent to a registration form first.
	const register = sandboxUrl ?? appUrl('/register');
	// When the destination is the sandbox, the label says so regardless of what
	// the caller wrote for the trial: a button reading "30-day trial" must never
	// open a 15-minute read-only room.
	const text = $derived(sandboxUrl ? t(size === 'sm' ? 'try.nav' : 'try.cta') : label);
	// The landing page's form; a page without its own form (a policy page) sends
	// the visitor there, and on the landing page it is a same-page jump.
	const form = $derived(`${localePath(locale)}#${formId}`);
</script>

{#if register}
	<a
		class="btn"
		class:btn-primary={!quiet}
		class:btn-quiet={quiet}
		class:btn-sm={size === 'sm'}
		class:lg={size === 'lg'}
		href={register}>{text}</a
	>
{:else if size === 'sm'}
	<a class="btn btn-sm" class:btn-primary={!quiet} class:btn-quiet={quiet} href={form}
		>{t('wl.nav')}</a
	>
{:else}
	<Waitlist id={formId} size={size === 'lg' ? 'lg' : 'md'} />
{/if}

<style>
	.lg {
		min-height: 3rem;
		padding-inline: 1.375rem;
		font-size: 1rem;
	}
	@media (max-width: 767px) {
		a.lg {
			width: 100%;
			max-width: 22rem;
		}
	}
</style>
