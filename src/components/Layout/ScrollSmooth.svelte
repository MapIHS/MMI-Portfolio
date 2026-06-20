<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLElement;
	let isVisible = $state(false);
	let { children } = $props();

	onMount(() => {
		if (!el) return;
		if (
			window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
			!('IntersectionObserver' in window)
		) {
			isVisible = true;
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					isVisible = true;
					observer.unobserve(el);
				}
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -10% 0px'
			}
		);

		observer.observe(el);

		return () => observer.disconnect();
	});
</script>

<div bind:this={el} class:animate-fade={isVisible}>
	{@render children()}
</div>

<style>
	.animate-fade {
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 0.9s ease,
			transform 0.9s ease;
	}

	div {
		opacity: 0;
		transform: translateY(20px);
	}
</style>
