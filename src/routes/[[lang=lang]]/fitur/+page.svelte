<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import QASection from '$lib/components/QASection.svelte';
	import TemplatesSection from '$lib/components/TemplatesSection.svelte';
	import LifecycleSection from '$lib/components/LifecycleSection.svelte';
	import SetupSection from '$lib/components/SetupSection.svelte';
	import Close from '$lib/components/Close.svelte';

	const { t } = getI18n();
</script>

<Seo title={t('fitur.metaTitle')} description={t('fitur.metaDescription')} path="/fitur" />

<Nav />
<main id="main">
	<header class="head">
		<div class="wrap split">
			<div class="intro">
				<h1>{t('fitur.title')}</h1>
				<p class="lede">{t('fitur.lede')}</p>
			</div>
			<div class="perm">
				<h2>{t('fitur.perm.t')}</h2>
				<p>{t('fitur.perm.b')}</p>
			</div>
		</div>
	</header>
	<QASection />
	<TemplatesSection />
	<LifecycleSection />
	<SetupSection />
	<Close />
</main>
<Footer />

<style>
	.head {
		padding-block: 3rem 4rem;
	}
	.head .intro {
		position: static;
	}
	h1 {
		font-size: clamp(1.625rem, 1.2rem + 1.6vw, 2.25rem);
		font-weight: 600;
		line-height: 1.08;
		color: var(--color-ink);
	}
	.perm {
		padding-top: 1.25rem;
		border-top: 1px solid var(--color-line-strong);
	}
	.perm h2 {
		font-size: 1.0625rem;
		font-weight: 600;
		color: var(--color-ink);
		margin-bottom: 0.5rem;
	}
	.perm p {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--color-ink-2);
		max-width: 64ch;
	}
	@media (max-width: 767px) {
		.head {
			padding-block: 2rem 2.5rem;
		}
	}
</style>
