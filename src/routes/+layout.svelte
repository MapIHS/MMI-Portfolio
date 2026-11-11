<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	import '@fontsource/poppins/latin-400.css';
	import '@fontsource/poppins/latin-500.css';
	import '@fontsource/poppins/latin-600.css';
	import '@fontsource/poppins/latin-700.css';
	import poppinsRegular from '@fontsource/poppins/files/poppins-latin-400-normal.woff2?url';
	import poppinsBold from '@fontsource/poppins/files/poppins-latin-700-normal.woff2?url';
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const lenis = new Lenis({
			anchors: true,
			autoRaf: true
		});

		// Force-restart CSS animations after browser throttles them (background tab, energy saver, etc.)
		const restartAnimations = () => {
			if (document.visibilityState !== 'visible') return;

			const targets = document.querySelectorAll(
				'.animate-infinite-scroll, .star, [class*="animate-pulse"]'
			);
			targets.forEach((el) => {
				const htmlEl = el as HTMLElement;
				htmlEl.style.animation = 'none';
				void htmlEl.offsetHeight; // force reflow
				htmlEl.style.animation = '';
			});
		};

		document.addEventListener('visibilitychange', restartAnimations);

		return () => {
			lenis.destroy();
			document.removeEventListener('visibilitychange', restartAnimations);
		};
	});
</script>

<svelte:head>
	<meta name="theme-color" content="#070707" />
	<meta name="color-scheme" content="dark" />
	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="preload" href={poppinsRegular} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={poppinsBold} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<Navbar />

<main id="main" tabindex="-1" class="relative overflow-hidden">
	{@render children()}
</main>

<div
	aria-hidden="true"
	class="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-24 bg-linear-to-t from-dark to-transparent"
></div>
