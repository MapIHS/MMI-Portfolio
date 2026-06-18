<script>
	import Line from '../components/Layout/Line.svelte';
	import About from '../components/Section/About.svelte';
	import Contact from '../components/Section/Contact.svelte';
	import Hero from '../components/Section/Hero.svelte';
	import Project from '../components/Section/Project.svelte';
</script>

<Hero />
<Line />
<div class="relative">
	<div class="absolute top-0 -right-52 h-160 w-80 rounded-full bg-white/10 blur-[200px]"></div>
	<About />
</div>
<Line />
<div class="relative">
	<div class="absolute top-0 -left-52 h-160 w-80 rounded-full bg-white/10 blur-[200px]"></div>
	<Project />
</div>
<Line />
<div class="relative">
	<div class="absolute -right-52 bottom-0 h-160 w-80 rounded-full bg-white/10 blur-[200px]"></div>
	<Contact />
</div>
