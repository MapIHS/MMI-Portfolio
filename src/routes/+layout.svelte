<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	import './layout.css';
	import favicon from '$lib/assets/favicon.webp';
	import { HERO, PROFILE } from '$lib/utils/content';
	import Navbar from '../components/Layout/Navbar.svelte';

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
	<title>{PROFILE.fullname} | {PROFILE.role}</title>
	<meta name="description" content={HERO.subline} />
	<meta name="theme-color" content="#070707" />
	<meta name="color-scheme" content="dark" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{PROFILE.fullname} | {PROFILE.role}" />
	<meta property="og:description" content={HERO.subline} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{PROFILE.fullname} | {PROFILE.role}" />
	<meta name="twitter:description" content={HERO.subline} />
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<main class="relative overflow-hidden">
	{@render children()}

	<div
		class="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-24 bg-linear-to-t from-dark to-transparent"
	></div>
</main>
