<script lang="ts">
	import { Pause, Play } from 'lucide-svelte';
	import { PROJECTS } from '$lib/data/projects';

	const MARQUEE_SIZES = '(min-width: 768px) 400px, 294px';

	let paused = $state(false);

	$effect(() => {
		document.documentElement.toggleAttribute('data-motion-paused', paused);
		return () => document.documentElement.removeAttribute('data-motion-paused');
	});
</script>

<div class="mt-16">
	<div class="relative inline-flex w-full flex-nowrap overflow-hidden">
		<div
			aria-hidden="true"
			class="absolute inset-y-0 left-0 z-10 h-full w-24 bg-linear-to-r from-dark to-transparent"
		></div>
		<div
			aria-hidden="true"
			class="absolute inset-y-0 right-0 z-10 h-full w-24 bg-linear-to-l from-dark to-transparent"
		></div>

		<ul
			aria-label="Project previews"
			class="flex animate-infinite-scroll items-center justify-center motion-reduce:animate-none md:justify-start [&_img]:max-w-none [&_li]:mx-2"
		>
			{#each PROJECTS as item, index (item.slug)}
				<li class="group overflow-hidden">
					<enhanced:img
						class="h-[220px] w-auto rounded-control grayscale transition-[transform,opacity] group-hover:scale-105 group-hover:opacity-70 md:h-[300px]"
						src={item.image}
						alt={item.imageAlt}
						sizes={MARQUEE_SIZES}
						loading={index < 3 ? 'eager' : 'lazy'}
						decoding="async"
					/>
				</li>
			{/each}

			{#each PROJECTS as item (item.slug)}
				<li class="group overflow-hidden" aria-hidden="true">
					<enhanced:img
						class="h-[220px] w-auto rounded-control grayscale transition-[transform,opacity] group-hover:scale-105 group-hover:opacity-70 md:h-[300px]"
						src={item.image}
						alt=""
						sizes={MARQUEE_SIZES}
						loading="lazy"
						decoding="async"
					/>
				</li>
			{/each}
		</ul>
	</div>

	<div class="mt-3 flex justify-end motion-reduce:hidden">
		<button
			type="button"
			onclick={() => (paused = !paused)}
			class="inline-flex min-h-11 items-center gap-2 rounded-control px-3 text-sm text-muted transition-colors hover:text-white"
		>
			{#if paused}
				<Play size={16} strokeWidth={1.8} aria-hidden="true" />
				Play animations
			{:else}
				<Pause size={16} strokeWidth={1.8} aria-hidden="true" />
				Pause animations
			{/if}
		</button>
	</div>
</div>
