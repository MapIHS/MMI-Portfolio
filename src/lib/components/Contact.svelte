<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Check, Copy, Github, Linkedin, Mail } from 'lucide-svelte';
	import Button from './Button.svelte';
	import Reveal from './Reveal.svelte';
	import { CONTACT, PROFILE, SOCIALS } from '$lib/data/profile';

	const SOCIAL_ICONS = { GitHub: Github, LinkedIn: Linkedin };

	let copyState = $state<'idle' | 'copied' | 'failed'>('idle');
	let resetTimer: ReturnType<typeof setTimeout> | undefined;

	const copyLabel = $derived(
		copyState === 'copied' ? 'Copied' : copyState === 'failed' ? 'Copy failed' : 'Copy email'
	);

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(PROFILE.email);
			copyState = 'copied';
		} catch {
			copyState = 'failed';
		}

		clearTimeout(resetTimer);
		resetTimer = setTimeout(() => (copyState = 'idle'), 2500);
	}

	onDestroy(() => clearTimeout(resetTimer));
</script>

<section id="contact" aria-labelledby="contact-title" class="container">
	<Reveal>
		<div class="relative py-12 text-center">
			<p class="badge">{CONTACT.label}</p>
			<h2 id="contact-title" class="section-title mx-auto">
				{CONTACT.headline}
			</h2>
			<p class="paragraph mx-auto mt-4 max-w-2xl">
				{CONTACT.subline}
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				<Button label={PROFILE.email} href="mailto:{PROFILE.email}">
					{#snippet icon()}
						<Mail class="relative" size={18} strokeWidth={1.8} aria-hidden="true" />
					{/snippet}
				</Button>

				<button type="button" onclick={copyEmail} class="btn-dark inline-flex items-center gap-2">
					{#if copyState === 'copied'}
						<Check size={18} strokeWidth={1.8} aria-hidden="true" />
					{:else}
						<Copy size={18} strokeWidth={1.8} aria-hidden="true" />
					{/if}
					{copyLabel}
				</button>
				<span role="status" class="sr-only">
					{copyState === 'idle' ? '' : copyLabel}
				</span>
			</div>

			<ul class="mt-4 flex flex-wrap items-center justify-center gap-4">
				{#each SOCIALS as social (social.label)}
					{@const Icon = SOCIAL_ICONS[social.label]}
					<li>
						<Button
							label={social.label}
							href={social.url}
							variant="dark"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="{social.label} profile (opens in a new tab)"
						>
							{#snippet icon()}
								<Icon class="relative" size={18} strokeWidth={1.8} aria-hidden="true" />
							{/snippet}
						</Button>
					</li>
				{/each}
			</ul>

			<div
				aria-hidden="true"
				class="absolute bottom-0 left-1/2 h-px w-60 -translate-x-1/2 bg-linear-to-r from-primary/0 via-primary to-primary/0"
			></div>
		</div>
	</Reveal>
</section>
