<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import CoreFeatures from '$lib/components/CoreFeatures.svelte';
	import EngagementSection from '$lib/components/EngagementSection.svelte';
	import PersonaSection from '$lib/components/PersonaSection.svelte';
	import SecuritySection from '$lib/components/SecuritySection.svelte';
	import LandingFaq from '$lib/components/LandingFaq.svelte';
	import Close from '$lib/components/Close.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { absolute, jsonLd } from '$lib/seo';
	import { ORG } from '$lib/legal/content';
	import { LANDING_FAQ } from '$lib/faq/content';

	const { t, locale } = getI18n();

	const home = absolute('/') ?? '';
	const ld = jsonLd({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${home}#org`,
				name: ORG.brand,
				legalName: ORG.legalName,
				url: home,
				logo: absolute('/apple-touch-icon.png'),
				email: ORG.email,
				address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' }
			},
			{
				'@type': 'SoftwareApplication',
				name: ORG.brand,
				applicationCategory: 'BusinessApplication',
				operatingSystem: 'Web',
				url: home,
				inLanguage: locale,
				description: t('meta.description'),
				publisher: { '@id': `${home}#org` }
			},
			{
				'@type': 'FAQPage',
				inLanguage: locale,
				mainEntity: LANDING_FAQ.map((item) => ({
					'@type': 'Question',
					name: item.q[locale],
					acceptedAnswer: { '@type': 'Answer', text: item.a[locale] }
				}))
			}
		]
	});
</script>

<Seo title={t('meta.title')} description={t('meta.description')} path="/" {ld} />

<Nav quietWhileHero />
<main id="main">
	<Hero />
	<CoreFeatures />
	<EngagementSection />
	<PersonaSection />
	<SecuritySection />
	<LandingFaq />
	<Close formId="waitlist-close" />
</main>
<Footer />
