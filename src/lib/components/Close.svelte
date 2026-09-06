<script lang="ts">
	import { appUrl } from '$lib/app-url';
	import { localePath } from '$lib/i18n';
	import { getI18n } from '$lib/i18n/context';
	import TrialCta from './TrialCta.svelte';

	// The closing sheet on every page. `formId` is unique per page: the landing
	// page also carries the hero's form, so its close uses a second id.
	let { formId = 'waitlist' }: { formId?: string } = $props();

	const { t, locale } = getI18n();
	const login = appUrl('/login');
</script>

<section id="trial" class="section close" aria-labelledby="close-h">
	<div class="wrap inner">
		<h2 id="close-h" class="title">{t('close.title')}</h2>
		<p class="body">{t('close.body')}</p>
		<div class="act">
			<TrialCta label={t('close.cta')} size="lg" {formId} />
			{#if login}
				<a class="signin" href={login}>{t('close.signIn')}</a>
			{/if}
		</div>
		<p class="more">
			<a href={localePath(locale, '', '/faq')}>{t('close.faq')}</a>
			<a href={localePath(locale, '', '/fitur')}>{t('close.fitur')}</a>
			<a href={localePath(locale, '', '/harga')}>{t('nav.harga')}</a>
		</p>
	</div>
</section>

<style>
	.close {
		padding-block: 7rem;
	}
	.inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.title {
		font-size: clamp(1.875rem, 1.2rem + 2.6vw, 3rem);
		font-weight: 600;
		line-height: 1.08;
		max-width: 22ch;
		color: var(--color-ink);
	}
	.body {
		margin-top: 1rem;
		font-size: 1.0625rem;
		line-height: 1.55;
		color: var(--color-ink-2);
		max-width: 48ch;
	}
	.act {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.875rem;
		margin-top: 2rem;
		width: 100%;
		max-width: 30rem;
	}
	.act :global(.hint) {
		text-align: center;
		margin-inline: auto;
	}
	.signin {
		font-size: 0.875rem;
		color: var(--color-ink-2);
	}
	.signin:hover {
		color: var(--color-ink);
	}
	.more {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem 1.5rem;
		margin-top: 2.5rem;
		font-size: 0.875rem;
	}
	.more a {
		color: var(--color-ink-2);
	}
	.more a:hover {
		color: var(--color-ink);
	}
	@media (max-width: 767px) {
		.close {
			padding-block: 4.5rem;
		}
	}
</style>
