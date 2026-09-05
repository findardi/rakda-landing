<script lang="ts">
	import { appUrl } from '$lib/app-url';
	import { getI18n } from '$lib/i18n/context';
	import TrialCta from './TrialCta.svelte';

	const { t } = getI18n();
	const login = appUrl('/login');
</script>

<section id="trial" class="section close" aria-labelledby="close-h">
	<div class="wrap inner">
		<h2 id="close-h" class="title">{t('close.title')}</h2>
		<p class="body">{t('close.body')}</p>
		<div class="act">
			<TrialCta label={t('close.cta')} size="lg" />
			{#if login}
				<a class="signin" href={login}>{t('close.signIn')}</a>
			{/if}
		</div>
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
	}
	.signin {
		font-size: 0.875rem;
		color: var(--color-ink-2);
	}
	.signin:hover {
		color: var(--color-ink);
	}
	@media (max-width: 767px) {
		.close {
			padding-block: 4.5rem;
		}
	}
</style>
