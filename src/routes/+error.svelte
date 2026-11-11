<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import { PROFILE } from '$lib/data/profile';

	const notFound = $derived(page.status === 404);
	const heading = $derived(notFound ? 'Page not found' : 'Something went wrong');
	const message = $derived(
		notFound
			? 'The page you are looking for does not exist or has moved.'
			: 'An unexpected error occurred. Please try again.'
	);
</script>

<svelte:head>
	<title>{page.status} | {PROFILE.fullName}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="container flex min-h-[80vh] flex-col items-center justify-center text-center">
	<p class="badge">Error {page.status}</p>
	<h1 class="section-title mx-auto">{heading}</h1>
	<p class="paragraph mx-auto mt-4 max-w-xl">{message}</p>
	<div class="mt-8">
		<Button label="Back to home" href={resolve('/')} />
	</div>
</section>
