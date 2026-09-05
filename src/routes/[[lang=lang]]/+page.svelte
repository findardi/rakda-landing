<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import QASection from '$lib/components/QASection.svelte';
	import EngagementSection from '$lib/components/EngagementSection.svelte';
	import TemplatesSection from '$lib/components/TemplatesSection.svelte';
	import LifecycleSection from '$lib/components/LifecycleSection.svelte';
	import SecuritySection from '$lib/components/SecuritySection.svelte';
	import SetupSection from '$lib/components/SetupSection.svelte';
	import Close from '$lib/components/Close.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { absolute, jsonLd } from '$lib/seo';
	import { ORG } from '$lib/legal/content';

	const { t } = getI18n();

	const home = absolute('/');
	const ld = home
		? jsonLd({
				'@context': 'https://schema.org',
				'@type': 'Organization',
				name: ORG.brand,
				legalName: ORG.legalName,
				url: home,
				logo: absolute('/apple-touch-icon.png'),
				email: ORG.email,
				address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' }
			})
		: undefined;
</script>

<Seo title={t('meta.title')} description={t('meta.description')} path="/" {ld} />

<Nav quietWhileHero />
<main id="main">
	<Hero />
	<QASection />
	<EngagementSection />
	<TemplatesSection />
	<LifecycleSection />
	<SecuritySection />
	<SetupSection />
	<Close />
</main>
<Footer />
