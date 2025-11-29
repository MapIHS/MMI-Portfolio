<script>
	import Line from '../components/Layout/Line.svelte';
	import About from '../components/Section/About.svelte';
	import Hero from '../components/Section/Hero.svelte';
	import Project from '../components/Section/Project.svelte';
</script>

<Hero />
<Line />
<div class="relative">
	<div class="rounded-full bg-blue-700 top-0 -right-52 w-80 h-160 absolute blur-[200px]"></div>
	<About />
</div>
<Line />
<div class="relative">
	<div class="rounded-full bg-blue-700 top-0 -left-52 w-80 h-160 absolute blur-[200px]"></div>
	<Project />
</div>
