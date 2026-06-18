<script lang="ts">
	import { CONTACT } from '$lib/utils/content';
	import ScrollSmooth from '../Layout/ScrollSmooth.svelte';
</script>

<ScrollSmooth>
	<section id="contact" class="container">
		<div class="relative py-12 text-center">
			<p class="badge">{CONTACT.label}</p>
			<h2 class="section-title mx-auto">
				{CONTACT.headline}
			</h2>
			<p class="paragraph mx-auto mt-4 max-w-2xl">
				{CONTACT.subline}
			</p>

			<div
				class="absolute bottom-0 left-1/2 h-px w-60 -translate-x-1/2 bg-linear-to-r from-primary/0 via-primary to-primary/0"
			></div>
		</div>
	</section>
</ScrollSmooth>
