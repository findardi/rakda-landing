<script lang="ts">
	import { intlTag, makeT } from '$lib/i18n';
	import { setI18n } from '$lib/i18n/context';

	let { data, children } = $props();

	// Locale links reload the document (they carry data-sveltekit-reload), so the
	// context set here is stable for the life of the page and <html lang> is always right.
	// svelte-ignore state_referenced_locally
	setI18n({ locale: data.locale, t: makeT(data.locale), tag: intlTag(data.locale) });
</script>

{@render children()}
