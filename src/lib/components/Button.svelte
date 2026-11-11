<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		label: string;
		variant?: 'primary' | 'dark';
		icon?: Snippet;
	}

	let { label, variant = 'primary', icon, class: className, ...rest }: Props = $props();
</script>

<a
	{...rest}
	class={[
		'group relative inline-flex items-center gap-2 overflow-hidden',
		variant === 'dark' ? 'btn-dark' : 'btn-primary',
		className
	]}
>
	<span
		aria-hidden="true"
		class="absolute inset-x-0 top-0 h-4 w-full rounded-full bg-white/20 blur-lg transition-all duration-500 group-hover:h-1/2"
	></span>

	{@render icon?.()}

	<span class="relative block overflow-hidden">
		<span
			class="btn-label block duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7"
			data-label={label}
		>
			{label}
		</span>
	</span>
</a>
