<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import QASection from '$lib/components/QASection.svelte';
	import EngagementSection from '$lib/components/EngagementSection.svelte';
	import TemplatesSection from '$lib/components/TemplatesSection.svelte';
	import LifecycleSection from '$lib/components/LifecycleSection.svelte';
	import SecuritySection from '$lib/components/SecuritySection.svelte';
	import Close from '$lib/components/Close.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';

	const { t } = getI18n();
</script>

<Seo title={t('meta.title')} description={t('meta.description')} path="/" />

<Nav />
<main id="main">
	<Hero />
	<QASection />
	<EngagementSection />
	<TemplatesSection />
	<LifecycleSection />
	<SecuritySection />
	<Close />
</main>
<Footer />
