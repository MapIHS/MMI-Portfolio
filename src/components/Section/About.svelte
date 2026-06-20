<script lang="ts">
	import Button from '../Button.svelte';
	import ScrollSmooth from '../Layout/ScrollSmooth.svelte';
	import { ABOUT, PROFILE } from '$lib/utils/content';
</script>

<ScrollSmooth>
	<section id="about" class="container">
		<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
			<div>
				<p class="badge">{ABOUT.label}</p>
				<h2 class="section-title">
					{PROFILE.fullname}
				</h2>

				{#each ABOUT.introduce as intro}
					<p class="paragraph mt-4">
						{intro}
					</p>
				{/each}

				<div class="mt-8">
					<Button label="Connect Me" to="#contact" variant="btn-dark" />
				</div>
			</div>

			<div
				class="group relative flex items-center justify-center rounded-2xl border border-white/10 bg-dark/40 p-3 backdrop-blur-sm"
			>
				<img
					class="w-full rounded-lg object-cover grayscale"
					src={PROFILE.avatar}
					alt="{PROFILE.fullname} - {PROFILE.role}"
					width="1200"
					height="896"
					loading="lazy"
					decoding="async"
				/>

				<div
					aria-hidden="true"
					class="absolute bottom-0 z-10 h-px w-60 bg-linear-to-r from-primary/0 via-primary to-primary/0"
				></div>
				<div
					aria-hidden="true"
					class="absolute bottom-4 -z-10 h-40 w-96 animate-pulse rounded-full bg-white opacity-15 blur-2xl"
				></div>
			</div>
		</div>
	</section>
</ScrollSmooth>
