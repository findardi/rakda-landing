// The current location.search as reactive state. SvelteKit's pushState (shallow
// routing) does not update page.url, so anything that mirrors the query string
// reads it from here instead. Hero starts the sync; Nav only reads it.

class UrlSearch {
	current = $state('');
}

export const urlSearch = new UrlSearch();

export function setUrlSearch(search: string): void {
	urlSearch.current = search;
}

/** Syncs from the browser now and on every history pop. Returns the cleanup. */
export function startUrlSearchSync(): () => void {
	const sync = () => (urlSearch.current = window.location.search);
	sync();
	window.addEventListener('popstate', sync);
	return () => window.removeEventListener('popstate', sync);
}
