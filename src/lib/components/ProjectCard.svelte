<script lang="ts">
	import { ExternalLink, Github, Play } from 'lucide-svelte';
	import Button from './Button.svelte';
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();

	const actions = $derived(
		[
			{ label: 'Source', href: project.links.github, icon: Github },
			{ label: 'Play Store', href: project.links.playstore, icon: Play },
			{ label: 'Demo', href: project.links.demo, icon: ExternalLink }
		].filter((action) => action.href)
	);
</script>

<article
	class="group relative flex flex-col overflow-hidden rounded-card border border-line bg-dark/40 p-3 backdrop-blur-sm focus-within:border-white/20"
>
	<div class="aspect-4/3 w-full overflow-hidden rounded-control">
		<enhanced:img
			class="h-full w-full object-cover transition-transform duration-500 group-focus-within:scale-105 group-hover:scale-105"
			src={project.image}
			alt={project.imageAlt}
			sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
			loading="lazy"
			decoding="async"
		/>
	</div>

	<div
		class="mt-3 flex flex-1 flex-col rounded-xl border border-line bg-linear-to-t from-dark to-dark/90 p-4"
	>
		<h3 class="text-lg font-bold tracking-wide text-white lg:text-xl">{project.title}</h3>
		<p class="mt-1 text-sm font-medium tracking-wide text-muted uppercase">{project.category}</p>

		<div
			aria-hidden="true"
			class="my-3 h-px w-44 bg-linear-to-r from-transparent via-primary to-transparent"
		></div>

		<p class="paragraph text-sm">{project.description}</p>

		<ul aria-label="Tech stack" class="mt-auto flex flex-wrap gap-2 pt-4">
			{#each project.techStack as tech (tech)}
				<li class="tag">{tech}</li>
			{/each}
		</ul>

		{#if actions.length > 0}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each actions as action (action.label)}
					<Button
						label={action.label}
						href={action.href}
						variant="dark"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="{action.label}: {project.title} (opens in a new tab)"
					>
						{#snippet icon()}
							<action.icon class="relative" size={16} strokeWidth={1.8} aria-hidden="true" />
						{/snippet}
					</Button>
				{/each}
			</div>
		{/if}
	</div>

	<div
		aria-hidden="true"
		class="absolute bottom-0 left-1/2 z-10 h-px w-60 -translate-x-1/2 bg-linear-to-r from-primary/0 via-primary to-primary/0"
	></div>
</article>
