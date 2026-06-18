<script lang="ts">
	let { label, to, variant = '', class: className = '' } = $props();
</script>

<a
	href={to}
	class="group relative inline-flex overflow-hidden {variant === 'btn-dark'
		? 'btn-dark'
		: 'btn-primary'} {className}"
>
	<div
		class="absolute inset-x-0 top-0 h-4 w-full rounded-full bg-white/20 blur-lg transition-all duration-500 group-hover:h-1/2"
	></div>

	<div class="relative overflow-hidden">
		<p class="duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
			{label}
		</p>
		<p
			aria-hidden="true"
			class="absolute top-7 left-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0"
		>
			{label}
		</p>
	</div>
</a>
