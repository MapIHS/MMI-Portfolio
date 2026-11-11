<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let el: HTMLElement;
	let hidden = $state(false);

	// Content is visible in the server-rendered HTML and only hidden here, below the
	// fold, so it stays readable if JavaScript never runs.
	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		if (el.getBoundingClientRect().top < window.innerHeight) return;

		hidden = true;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					hidden = false;
					observer.disconnect();
				}
			},
			{ rootMargin: '0px 0px -10% 0px' }
		);

		observer.observe(el);

		return () => observer.disconnect();
	});
</script>

<div bind:this={el} class="reveal" class:reveal-hidden={hidden}>
	{@render children()}
</div>

<style>
	.reveal {
		transition:
			opacity 0.9s ease,
			transform 0.9s ease;
	}

	.reveal-hidden {
		opacity: 0;
		transform: translateY(20px);
	}
</style>
