<script lang="ts">
	import { getI18n } from '$lib/i18n/context';
	import { absolute, localizedPaths } from '$lib/seo';

	let {
		title,
		description,
		path,
		ld
	}: { title: string; description: string; path: '/' | '/faq'; ld?: string } = $props();

	const { locale } = getI18n();
	let paths = $derived(localizedPaths(path));
	let canonical = $derived(absolute(paths[locale]));
	// Assembled here so the template never carries a literal closing script tag.
	let ldTag = $derived(ld ? '<script type="application/ld+json">' + ld + '<' + '/script>' : '');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={locale === 'id' ? 'id_ID' : 'en_GB'} />
	{#if canonical}
		<link rel="canonical" href={canonical} />
		<link rel="alternate" hreflang="id" href={absolute(paths.id)} />
		<link rel="alternate" hreflang="en" href={absolute(paths.en)} />
		<link rel="alternate" hreflang="x-default" href={absolute(paths.id)} />
		<meta property="og:url" content={canonical} />
	{/if}
	{#if ldTag}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html ldTag}
	{/if}
</svelte:head>
