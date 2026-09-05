<script lang="ts">
	import { appUrl } from '$lib/app-url';
	import { localePath, otherLocale } from '$lib/i18n';
	import { getI18n } from '$lib/i18n/context';
	import Brand from './Brand.svelte';
	import TrialCta from './TrialCta.svelte';
	import { heroCta } from '$lib/hero-cta.svelte';
	import { urlSearch } from '$lib/url-search.svelte';
	import { page } from '$app/state';

	// On the landing page the nav's trial action stays quiet while the hero's own
	// button is on screen; elsewhere (the FAQ) it is the page's one teal action.
	let { quietWhileHero = false }: { quietWhileHero?: boolean } = $props();

	const { t, locale } = getI18n();
	const other = otherLocale(locale);

	// The grid state rides along when switching language.
	let switchHref = $derived(localePath(other, urlSearch.current));
	const login = appUrl('/login');
</script>

<a class="skip" href="#main">{t('nav.skip')}</a>
<header class="nav">
	<div class="wrap row">
		<a href={localePath(locale)} class="brand" aria-label="Rakda"><Brand /></a>
		<nav class="links">
			<a
				href={switchHref}
				data-sveltekit-reload
				hreflang={other}
				lang={other}
				aria-label={t('nav.langAria')}
				class="lang font-mono">{t('nav.lang')}</a
			>
			<a
				href={localePath(locale, '', '/faq')}
				class="signin"
				aria-current={page.url.pathname.endsWith('/faq') ? 'page' : undefined}>{t('nav.faq')}</a
			>
			{#if login}
				<a href={login} class="signin">{t('nav.signIn')}</a>
			{/if}
			<TrialCta label={t('nav.trial')} size="sm" short quiet={quietWhileHero && heroCta.visible} />
		</nav>
	</div>
</header>

<style>
	.skip {
		position: absolute;
		left: 1rem;
		top: -3rem;
		z-index: 60;
		padding: 0.5rem 0.75rem;
		background: var(--color-surface);
		color: var(--color-ink);
		border: 1px solid var(--color-line-strong);
		border-radius: var(--radius-field);
		transition: top 150ms ease-out;
	}
	.skip:focus-visible {
		top: 0.75rem;
	}
	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		background: color-mix(in oklch, var(--color-ground) 92%, transparent);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--color-line);
	}
	@supports not (backdrop-filter: blur(8px)) {
		.nav {
			background: var(--color-ground);
		}
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 3.5rem;
	}
	.brand {
		text-decoration: none;
		display: inline-flex;
	}
	.links {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}
	.lang {
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		color: var(--color-ink-2);
		text-decoration: none;
		padding: 0.25rem 0.375rem;
		border: 1px solid var(--color-line-strong);
		border-radius: 4px;
		transition:
			border-color 150ms ease-out,
			color 150ms ease-out;
	}
	.lang:hover {
		color: var(--color-ink);
		border-color: var(--color-ink-3);
	}
	.signin {
		font-size: 0.875rem;
		color: var(--color-ink-2);
		text-decoration: none;
	}
	.signin:hover {
		color: var(--color-ink);
		text-decoration: underline;
	}
	@media (max-width: 479px) {
		.signin {
			display: none;
		}
		.links {
			gap: 0.75rem;
		}
	}
</style>
