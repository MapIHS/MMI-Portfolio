<script lang="ts">
	let { label, to, variant = '', class: className = '' } = $props();
</script>

<a
	href={to}
	class="group relative overflow-hidden inline-flex {variant === 'btn-dark'
		? 'btn-dark'
		: 'btn-primary'} {className}"
>
	<div
		class="w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 rounded-full group-hover:h-1/2 transition-all duration-500"
	></div>

	<div class="relative overflow-hidden">
		<p class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
			{label}
		</p>
		<p
			class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
		>
			{label}
		</p>
	</div>
</a>
