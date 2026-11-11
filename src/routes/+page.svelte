<script lang="ts">
	import Divider from '$lib/components/Divider.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo />

<Hero />
<Divider />
<div class="relative">
	<div
		aria-hidden="true"
		class="absolute top-0 -right-52 h-160 w-80 rounded-full bg-white/10 blur-[200px]"
	></div>
	<About />
</div>
<Divider />
<div class="relative">
	<div
		aria-hidden="true"
		class="absolute top-0 -left-52 h-160 w-80 rounded-full bg-white/10 blur-[200px]"
	></div>
	<ProjectGrid />
</div>
<Divider />
<div class="relative">
	<div
		aria-hidden="true"
		class="absolute -right-52 bottom-0 h-160 w-80 rounded-full bg-white/10 blur-[200px]"
	></div>
	<Contact />
</div>
