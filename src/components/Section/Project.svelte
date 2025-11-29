<script lang="ts">
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import ScrollSmooth from '../Layout/ScrollSmooth.svelte';
	import { PROJECT } from '$lib/utils/content';
</script>

<ScrollSmooth>
	<section id="work" class="container">
		<p class="badge">{PROJECT.label}</p>
		<h2 class="section-title">
			{PROJECT.headline}
		</h2>
		<p class="paragraph mt-4 max-w-xl">
			{PROJECT.subline}
		</p>

		<div class="grid md:grid-cols-2 gap-6 mt-16">
			{#each PROJECT.project as item}
				<div
					class="p-3 border bg-dark/40 backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group overflow-hidden focus:outline-none"
				>
					<div class="overflow-hidden aspect-4/3 rounded-lg w-full">
						<img
							class="group-hover:scale-105 group-focus:scale-105 transition-all duration-500 w-full h-full object-cover"
							src="/images/work/{item.thumbnails}"
							alt="Thumbnail {item.name}"
						/>
					</div>

					<div
						class="absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-focus:scale-100 group-hover:opacity-100 group-focus:opacity-100 inset-x-6 bg-linear-to-t from-dark to-dark/90 backdrop-blur-md transition-all duration-500 rounded-xl overflow-hidden p-4 border border-white/10"
					>
						<div>
							<div class="flex items-center justify-between">
								<div>
									<h3 class="text-white text-lg lg:text-xl tracking-wide font-bold">
										{item.name}
									</h3>
									<p class="font-medium uppercase tracking-wide text-white/60 text-sm mt-1">
										{item.type}
									</p>
								</div>

								<a
									href={item.live_demo}
									target="_blank"
									rel="noopener noreferrer"
									class="text-white/50 hover:text-primary transition-colors"
								>
									<SquareArrowOutUpRight size={24} strokeWidth={1.5} />
								</a>
							</div>

							<div
								class="bg-linear-to-r w-44 h-px from-transparent via-primary to-transparent my-3"
							></div>

							<p class="paragraph text-white/60 text-sm">
								{item.description}
							</p>
						</div>
					</div>

					<div
						class="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-px z-10 bg-linear-to-r from-primary/0 via-primary to-primary/0"
					></div>
				</div>
			{/each}
		</div>
	</section>
</ScrollSmooth>
