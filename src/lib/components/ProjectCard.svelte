<script lang="ts">
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();

	const primaryLink = $derived(
		project.links.demo ?? project.links.playstore ?? project.links.github
	);
</script>

<article
	class="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark/40 p-3 backdrop-blur-sm focus-within:border-white/20"
>
	<div class="aspect-4/3 w-full overflow-hidden rounded-lg">
		<img
			class="h-full w-full object-cover transition-transform duration-500 group-focus-within:scale-105 group-hover:scale-105"
			src={project.image}
			alt={project.imageAlt}
			width="640"
			height="480"
			loading="lazy"
			decoding="async"
		/>
	</div>

	<div
		class="mt-3 rounded-xl border border-white/10 bg-linear-to-t from-dark to-dark/90 p-4 transition-[transform,opacity] duration-500 md:absolute md:inset-x-6 md:bottom-6 md:mt-0 md:scale-90 md:overflow-hidden md:opacity-0 md:backdrop-blur-md md:group-focus-within:scale-100 md:group-focus-within:opacity-100 md:group-hover:scale-100 md:group-hover:opacity-100"
	>
		<div>
			<div class="flex items-center justify-between gap-4">
				<div>
					<h3 class="text-lg font-bold tracking-wide text-white lg:text-xl">
						{project.title}
					</h3>
					<p class="mt-1 text-sm font-medium tracking-wide text-white/60 uppercase">
						{project.category}
					</p>
				</div>

				{#if primaryLink}
					<a
						href={primaryLink}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open {project.title}"
						class="text-white/50 transition-colors hover:text-primary"
					>
						<SquareArrowOutUpRight size={24} strokeWidth={1.5} />
					</a>
				{/if}
			</div>

			<div class="my-3 h-px w-44 bg-linear-to-r from-transparent via-primary to-transparent"></div>

			<p class="paragraph text-sm text-white/60">
				{project.description}
			</p>
		</div>
	</div>

	<div
		aria-hidden="true"
		class="absolute bottom-0 left-1/2 z-10 h-px w-60 -translate-x-1/2 bg-linear-to-r from-primary/0 via-primary to-primary/0"
	></div>
</article>
