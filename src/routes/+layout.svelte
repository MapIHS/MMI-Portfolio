<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import Lenis from '@studio-freight/lenis';

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/Layout/Navbar.svelte';

	let { children } = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});
		gsap.ticker.lagSmoothing(0);

		return () => {
			lenis.destroy();
			gsap.ticker.remove(lenis.raf);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<main class="overflow-hidden relative">
	{@render children()}

	<div
		class="bg-linear-to-t from-dark to-transparent fixed bottom-0 inset-x-0 h-24 z-50 pointer-events-none"
	></div>
</main>
