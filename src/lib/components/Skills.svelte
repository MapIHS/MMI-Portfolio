<script lang="ts">
	import Reveal from './Reveal.svelte';
	import { SKILLS, SKILLS_COPY } from '$lib/data/skills';
</script>

<section id="skills" aria-labelledby="skills-title" class="container">
	<Reveal>
		<p class="badge">{SKILLS_COPY.label}</p>
		<h2 id="skills-title" class="section-title">{SKILLS_COPY.headline}</h2>

		<ul class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
			{#each SKILLS as skill (skill.name)}
				<li
					class="flex flex-col items-center gap-3 rounded-card border border-line bg-dark/40 p-6 text-center backdrop-blur-sm transition-colors hover:border-white/30"
				>
					<svg
						aria-hidden="true"
						viewBox="0 0 24 24"
						width="32"
						height="32"
						fill="currentColor"
						class="text-primary"
					>
						<path d={skill.iconPath} />
					</svg>
					<span class="text-sm font-medium text-white">{skill.name}</span>
				</li>
			{/each}
		</ul>
	</Reveal>
</section>
