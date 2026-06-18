<script lang="ts">
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import ScrollSmooth from '../Layout/ScrollSmooth.svelte';
	import { PROJECT } from '$lib/utils/content';
</script>

<ScrollSmooth>
	<section id="work" class="container">
		<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="badge">{PROJECT.label}</p>
				<h2 class="section-title">
					{PROJECT.headline}
				</h2>
				<p class="paragraph mt-4 max-w-xl">
					{PROJECT.subline}
				</p>
			</div>

			<div
				class="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-white"
				aria-label="{PROJECT.project.length} projects"
			>
				<span class="text-2xl font-semibold tabular-nums">
					{String(PROJECT.project.length).padStart(2, '0')}
				</span>
				<span class="text-xs font-medium tracking-wide text-white/50 uppercase">Projects</span>
			</div>
		</div>

		<div class="mt-16 grid gap-6 md:grid-cols-2">
			{#each PROJECT.project as item}
				<article
					class="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark/40 p-3 backdrop-blur-sm focus-within:border-white/20"
				>
					<div class="aspect-4/3 w-full overflow-hidden rounded-lg">
						<img
							class="h-full w-full object-cover transition-all duration-500 group-focus-within:scale-105 group-hover:scale-105"
							src="/images/work/{item.thumbnails}"
							alt="Thumbnail {item.name}"
						/>
					</div>

					<div
						class="mt-3 rounded-xl border border-white/10 bg-linear-to-t from-dark to-dark/90 p-4 transition-all duration-500 md:absolute md:inset-x-6 md:bottom-6 md:mt-0 md:scale-90 md:overflow-hidden md:opacity-0 md:backdrop-blur-md md:group-focus-within:scale-100 md:group-focus-within:opacity-100 md:group-hover:scale-100 md:group-hover:opacity-100"
					>
						<div>
							<div class="flex items-center justify-between gap-4">
								<div>
									<h3 class="text-lg font-bold tracking-wide text-white lg:text-xl">
										{item.name}
									</h3>
									<p class="mt-1 text-sm font-medium tracking-wide text-white/60 uppercase">
										{item.type}
									</p>
								</div>

								{#if item.live_demo !== '#'}
									<a
										href={item.live_demo}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Open {item.name} live demo"
										class="text-white/50 transition-colors hover:text-primary"
									>
										<SquareArrowOutUpRight size={24} strokeWidth={1.5} />
									</a>
								{/if}
							</div>

							<div
								class="my-3 h-px w-44 bg-linear-to-r from-transparent via-primary to-transparent"
							></div>

							<p class="paragraph text-sm text-white/60">
								{item.description}
							</p>
						</div>
					</div>

					<div
						class="absolute bottom-0 left-1/2 z-10 h-px w-60 -translate-x-1/2 bg-linear-to-r from-primary/0 via-primary to-primary/0"
					></div>
				</article>
			{/each}
		</div>
	</section>
</ScrollSmooth>
