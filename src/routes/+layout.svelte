<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import Lenis from '@studio-freight/lenis';

	import './layout.css';
	import favicon from '$lib/assets/favicon.webp';
	import Navbar from '../components/Layout/Navbar.svelte';

	let { children } = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const lenis = new Lenis();
		const updateLenis = (time: number) => {
			lenis.raf(time * 1000);
		};

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add(updateLenis);
		gsap.ticker.lagSmoothing(0);

		return () => {
			lenis.destroy();
			gsap.ticker.remove(updateLenis);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<main class="relative overflow-hidden">
	{@render children()}

	<div
		class="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-24 bg-linear-to-t from-dark to-transparent"
	></div>
</main>
