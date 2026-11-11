<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
</script>

<div class="relative mt-16 inline-flex w-full flex-nowrap overflow-hidden">
	<div
		class="absolute inset-y-0 left-0 z-10 h-full w-24 bg-linear-to-r from-dark to-transparent"
	></div>
	<div
		class="absolute inset-y-0 right-0 z-10 h-full w-24 bg-linear-to-l from-dark to-transparent"
	></div>

	<ul
		aria-label="Project previews"
		class="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-2"
	>
		{#each PROJECTS as item (item.slug)}
			<li class="group overflow-hidden">
				<img
					class="h-[300px] w-auto rounded-xl grayscale transition-[transform,opacity] group-hover:scale-105 group-hover:opacity-70"
					src={item.image}
					alt={item.imageAlt}
					width="640"
					height="480"
					decoding="async"
				/>
			</li>
		{/each}

		{#each PROJECTS as item (item.slug)}
			<li class="group overflow-hidden" aria-hidden="true">
				<img
					class="h-[300px] w-auto rounded-xl grayscale transition-[transform,opacity] group-hover:scale-105 group-hover:opacity-70"
					src={item.image}
					alt=""
					width="640"
					height="480"
					loading="lazy"
					decoding="async"
				/>
			</li>
		{/each}
	</ul>
</div>
