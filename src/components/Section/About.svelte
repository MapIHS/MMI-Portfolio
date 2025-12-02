<script lang="ts">
	import Button from '../Button.svelte';
	import ScrollSmooth from '../Layout/ScrollSmooth.svelte';
	import { ABOUT, PROFILE } from '$lib/utils/content';
</script>

<ScrollSmooth>
	<section id="about" class="container">
		<div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
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
				class="p-3 border bg-dark/40 justify-center backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group"
			>
				<div>
					<div>
						<img
							class="rounded-lg w-full object-cover"
							src={PROFILE.avatar}
							alt="{PROFILE.fullname} - {PROFILE.role}"
						/>
					</div>
				</div>

				<div
					class="absolute bottom-0 w-60 h-px z-10 bg-linear-to-r from-primary/0 via-primary to-primary/0"
				></div>
				<div
					class="-z-10 absolute bottom-4 w-96 bg-primary rounded-full blur-2xl h-40 animate-pulse opacity-50"
				></div>
			</div>
		</div>
	</section>
</ScrollSmooth>
