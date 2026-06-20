<script lang="ts">
	import { onMount } from 'svelte';
	import { BriefcaseBusiness, House, Mail, UserRound } from 'lucide-svelte';
	import { NAVLINKS } from '$lib/utils/content';

	const ICONS = {
		Home: House,
		About: UserRound,
		Projects: BriefcaseBusiness,
		Contact: Mail
	};

	const navItems = NAVLINKS.map((link) => ({
		...link,
		icon: ICONS[link.label as keyof typeof ICONS] ?? House
	}));

	let activeUrl = $state(navItems[0]?.url ?? '#hero');
	let isVisible = $state(true);
	let isNavigating = $state(false);
	let lastScrollY = $state(0);
	let ticking = $state(false);
	let navigationTimer: ReturnType<typeof setTimeout> | undefined;

	function finishNavigation() {
		isNavigating = false;
		lastScrollY = window.scrollY;
	}

	function scheduleNavigationEnd(delay = 180) {
		if (navigationTimer) clearTimeout(navigationTimer);
		navigationTimer = setTimeout(finishNavigation, delay);
	}

	function setActive(url: string) {
		activeUrl = url;
		isVisible = true;
		isNavigating = true;
		scheduleNavigationEnd(800);
	}

	function handleScroll() {
		if (ticking) return;

		window.requestAnimationFrame(() => {
			const currentScrollY = window.scrollY;

			if (isNavigating) {
				isVisible = true;
				scheduleNavigationEnd();
			} else if (currentScrollY < 20) {
				isVisible = true;
			} else if (currentScrollY > lastScrollY + 8 && currentScrollY > 180) {
				isVisible = false;
			} else if (currentScrollY < lastScrollY - 8) {
				isVisible = true;
			}

			lastScrollY = currentScrollY;
			ticking = false;
		});

		ticking = true;
	}

	onMount(() => {
		const updateFromHash = () => {
			activeUrl = window.location.hash || navItems[0]?.url || '#hero';
		};

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeUrl = `#${entry.target.id}`;
					}
				}
			},
			{
				rootMargin: '-35% 0px -55% 0px',
				threshold: 0.01
			}
		);

		updateFromHash();
		lastScrollY = window.scrollY;
		window.addEventListener('hashchange', updateFromHash);
		window.addEventListener('scroll', handleScroll, { passive: true });

		for (const item of navItems) {
			const section = document.querySelector(item.url);
			if (section) observer.observe(section);
		}

		return () => {
			if (navigationTimer) clearTimeout(navigationTimer);
			observer.disconnect();
			window.removeEventListener('hashchange', updateFromHash);
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav
	aria-label="Primary navigation"
	class="{isVisible
		? 'translate-y-0 opacity-100'
		: 'translate-y-[calc(100%+1.5rem)] opacity-0'} fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4 pb-[env(safe-area-inset-bottom)] transition-[transform,opacity] duration-300 ease-out"
>
	<div
		class="flex w-full max-w-md items-center justify-between gap-1 rounded-full border border-white/10 bg-black/70 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl sm:w-auto sm:justify-center sm:gap-2"
	>
		{#each navItems as item}
			{@const active = activeUrl === item.url}
			<a
				href={item.url}
				aria-label={item.label}
				aria-current={active ? 'page' : undefined}
				onclick={() => setActive(item.url)}
				class="{active
					? 'bg-white text-black shadow-lg shadow-white/10'
					: 'text-white/55 hover:bg-white/10 hover:text-white'} group flex h-12 min-w-12 items-center justify-center rounded-full px-3 transition-all duration-200 sm:gap-2 sm:px-4"
			>
				<item.icon size={20} strokeWidth={1.8} />
				<span class="{active ? 'inline' : 'hidden'} text-sm font-medium sm:inline">
					{item.label}
				</span>
			</a>
		{/each}
	</div>
</nav>
