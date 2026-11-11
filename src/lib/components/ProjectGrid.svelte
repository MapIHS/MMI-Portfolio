<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import Reveal from './Reveal.svelte';
	import { PROJECTS } from '$lib/data/projects';
	import { PROJECTS_COPY } from '$lib/data/profile';
</script>

<Reveal>
	<section id="work" class="container">
		<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="badge">{PROJECTS_COPY.label}</p>
				<h2 class="section-title">
					{PROJECTS_COPY.headline}
				</h2>
				<p class="paragraph mt-4 max-w-xl">
					{PROJECTS_COPY.subline}
				</p>
			</div>

			<div
				class="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-white"
				aria-label="{PROJECTS.length} projects"
			>
				<span class="text-2xl font-semibold tabular-nums">
					{String(PROJECTS.length).padStart(2, '0')}
				</span>
				<span class="text-xs font-medium tracking-wide text-white/50 uppercase">Projects</span>
			</div>
		</div>

		<div class="mt-16 grid gap-6 md:grid-cols-2">
			{#each PROJECTS as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>
</Reveal>
