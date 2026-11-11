<script lang="ts">
	import Button from './Button.svelte';
	import Reveal from './Reveal.svelte';
	import { ABOUT, PROFILE } from '$lib/data/profile';
</script>

<section id="about" aria-labelledby="about-title" class="container">
	<Reveal>
		<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
			<div>
				<p class="badge">{ABOUT.label}</p>
				<h2 id="about-title" class="section-title">
					{PROFILE.fullName}
				</h2>

				{#each ABOUT.introduce as intro (intro)}
					<p class="paragraph mt-4">
						{intro}
					</p>
				{/each}

				<div class="mt-8">
					<Button label="Contact Me" href="#contact" variant="dark" />
				</div>
			</div>

			<div
				class="group relative flex items-center justify-center rounded-card border border-line bg-dark/40 p-3 backdrop-blur-sm"
			>
				<enhanced:img
					class="w-full rounded-control object-cover grayscale"
					src={PROFILE.avatar}
					alt="{PROFILE.fullName} - {PROFILE.role}"
					sizes="(min-width: 1024px) 50vw, 100vw"
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
	</Reveal>
</section>
