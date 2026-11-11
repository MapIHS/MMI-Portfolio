<script lang="ts">
	import { Github } from 'lucide-svelte';
	import Button from './Button.svelte';
	import ProjectMarquee from './ProjectMarquee.svelte';
	import { GITHUB, HERO } from '$lib/data/profile';
</script>

<div id="hero" class="relative container py-hero">
	<div class="relative z-10 flex flex-col items-center">
		<div class="badge flex items-center gap-2">
			<div class="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
			<p class="text-center">{HERO.badge}</p>
		</div>

		<h1
			class="mx-auto mt-4 max-w-4xl text-center text-4xl leading-snug! font-bold text-white md:text-5xl lg:text-6xl"
		>
			{HERO.headline}
		</h1>

		<p class="paragraph mx-auto mt-4 max-w-xl text-center">
			{HERO.subline}
		</p>

		<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
			<Button label="View Project" to="#work" />
			<Button label="Contact Me" to="#contact" variant="btn-dark" />
			<a
				href={GITHUB.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Open GitHub profile"
				title="GitHub"
				class="btn-dark group relative inline-flex size-12 items-center justify-center overflow-hidden rounded-control p-0"
			>
				<div
					class="absolute inset-x-0 top-0 h-4 w-full rounded-full bg-white/20 blur-lg transition-all duration-500 group-hover:h-1/2"
				></div>
				<Github class="relative" size={20} strokeWidth={1.8} />
			</a>
		</div>
	</div>

	<ProjectMarquee />

	<div
		aria-hidden="true"
		class="absolute -top-40 right-40 h-[800px] w-14 rotate-45 bg-white/10 blur-[100px]"
	></div>
	<div aria-hidden="true" class="index-bg absolute top-0 left-0 h-screen w-screen">
		<div class="h-0">
			<div class="star"></div>
			<div class="star" style="top: 80px; left: 800px; animation-delay: 3s;"></div>
			<div class="star" style="top: 40px; left: 646px; animation-delay: 2s;"></div>
			<div class="star" style="top: 120px; left: 395px; animation-delay: 4s;"></div>
			<div class="star" style="top: 160px; left: 765px; animation-delay: 1s;"></div>
			<div class="star" style="top: 170px; left: 1200px; animation-delay: 2s;"></div>
			<div class="star" style="top: 200px; left: 1000px; animation-delay: 1s;"></div>
		</div>
	</div>
</div>

<style>
	@keyframes star-opacity {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		60% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes star-pos {
		0% {
			transform: scale(0) rotate(0) translate3d(0, 0, 0);
		}
		100% {
			transform: scale(1) rotate(0) translate3d(-450px, 450px, 0);
		}
	}

	.index-bg .star {
		display: block;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #fff;
		top: 100px;
		left: 400px;
		position: relative;
		transform-origin: 100% 0;
		animation:
			star-opacity 5s infinite ease-in,
			star-pos 5s infinite ease-in;
		box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.3);
		opacity: 0;
		z-index: 2;
		will-change: transform, opacity;
	}

	.index-bg .star:after {
		content: '';
		display: block;
		top: 0;
		left: 4px;
		border: 0 solid #fff;
		border-width: 0 90px 2px;
		border-color: transparent transparent transparent rgba(255, 255, 255, 0.3);
		transform: rotate(-45deg) translate3d(1px, 3px, 0);
		box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
		transform-origin: 0% 100%;
	}
</style>
