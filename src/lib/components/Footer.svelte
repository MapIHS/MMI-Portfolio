<script lang="ts">
	import { ArrowUp, Github, Linkedin } from 'lucide-svelte';
	import { PROFILE, SOCIALS } from '$lib/data/profile';

	const SOCIAL_ICONS = { GitHub: Github, LinkedIn: Linkedin };
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line">
	<div class="container flex flex-col items-center justify-between gap-4 pt-8 pb-28 sm:flex-row">
		<p class="text-sm text-muted">&copy; {year} {PROFILE.fullName}</p>

		<div class="flex items-center gap-2">
			{#each SOCIALS as social (social.label)}
				{@const Icon = SOCIAL_ICONS[social.label]}
				<a
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="{social.label} profile (opens in a new tab)"
					class="inline-flex size-11 items-center justify-center rounded-control text-muted transition-colors hover:text-white"
				>
					<Icon size={20} strokeWidth={1.8} aria-hidden="true" />
				</a>
			{/each}

			<a
				href="#main"
				class="inline-flex min-h-11 items-center gap-2 rounded-control px-3 text-sm text-muted transition-colors hover:text-white"
			>
				<ArrowUp size={18} strokeWidth={1.8} aria-hidden="true" />
				Back to top
			</a>
		</div>
	</div>
</footer>
