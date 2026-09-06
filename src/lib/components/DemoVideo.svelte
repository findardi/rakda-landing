<script lang="ts">
	import type { Attachment } from 'svelte/attachments';

	// A short screen recording of the real app, framed like the other instruments:
	// a hairline, a head with the title and the recording's facts, the picture.
	// It plays only while on screen and never under prefers-reduced-motion; the
	// poster and the controls remain, so only the automatic motion is lost.
	let {
		src,
		poster,
		width,
		height,
		title,
		note
	}: { src: string; poster: string; width: number; height: number; title: string; note: string } =
		$props();

	const autoplay: Attachment<HTMLVideoElement> = (v) => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const io = new IntersectionObserver(
			([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
			{ threshold: 0.4 }
		);
		io.observe(v);
		return () => io.disconnect();
	};
</script>

<figure class="rec">
	<figcaption class="head">
		<h3>{title}</h3>
		<p class="note">{note}</p>
	</figcaption>
	<video
		{@attach autoplay}
		{src}
		{poster}
		{width}
		{height}
		muted
		loop
		playsinline
		controls
		controlslist="nodownload noplaybackrate noremoteplayback"
		disablepictureinpicture
		preload="metadata"
	></video>
</figure>

<style>
	.rec {
		padding-top: 0.75rem;
		border-top: 1px solid var(--color-line);
	}
	.head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.625rem;
	}
	h3 {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-ink);
	}
	.note {
		font-size: 0.6875rem;
		color: var(--color-muted);
		text-align: right;
	}
	video {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid var(--color-line);
		border-radius: var(--radius-box);
		background: var(--color-surface);
	}
</style>
