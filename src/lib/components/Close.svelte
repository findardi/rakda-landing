<script lang="ts">
	import { appConfigured, appUrl } from '$lib/app-url';
	import { getI18n } from '$lib/i18n/context';

	const { t } = getI18n();
</script>

<section id="trial" class="section close" aria-labelledby="close-h">
	<div class="wrap inner">
		<h2 id="close-h" class="title">{t('close.title')}</h2>
		<p class="body">{t('close.body')}</p>
		<div class="act">
			<a class="btn btn-primary big" href={appUrl('/register')}>{t('close.cta')}</a>
			<a class="signin" href={appUrl('/login')}>{t('close.signIn')}</a>
		</div>
		{#if !appConfigured}
			<p class="unconfigured font-mono">{t('close.unconfigured')}</p>
		{/if}
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
	.big {
		min-height: 3rem;
		padding-inline: 1.5rem;
		font-size: 1rem;
	}
	.signin {
		font-size: 0.875rem;
		color: var(--color-ink-2);
	}
	.signin:hover {
		color: var(--color-ink);
	}
	.unconfigured {
		margin-top: 1.5rem;
		font-size: 0.6875rem;
		color: var(--color-muted);
	}
	@media (max-width: 767px) {
		.close {
			padding-block: 4.5rem;
		}
	}
</style>
