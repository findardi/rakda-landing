<script lang="ts">
	import DemoVideo from './DemoVideo.svelte';
	import { getI18n } from '$lib/i18n/context';
	import { secnum } from '$lib/refs';

	const { t } = getI18n();
</script>

<section id="activity" class="section eng" aria-labelledby="eng-h">
	<div class="wrap split">
		<div class="intro">
			<h2 id="eng-h" class="h2">
				<span class="secnum font-mono">{secnum('engagement')}</span>{t('eng.title')}
			</h2>
			<p class="lede">{t('eng.desc')}</p>
		</div>

		<DemoVideo
			src="/video/demo-insight-1788698462914.mp4"
			poster="/video/demo-insight-1788698462914.jpg"
			width={1034}
			height={552}
			title={t('demo.engagement.t')}
			note={t('demo.engagement.n')}
		/>
	</div>
</section>
