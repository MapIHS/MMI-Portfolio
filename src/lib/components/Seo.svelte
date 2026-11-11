<script lang="ts">
	import { HERO, PROFILE, SOCIALS } from '$lib/data/profile';
	import { SITE_URL } from '$lib/data/site';

	const title = `${PROFILE.fullName} | ${PROFILE.role}`;
	const description = HERO.subline;
	const canonical = `${SITE_URL}/`;
	const ogImage = `${SITE_URL}/og-image.png`;

	const personJson = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: PROFILE.fullName,
		jobTitle: PROFILE.role,
		url: canonical,
		email: `mailto:${PROFILE.email}`,
		image: ogImage,
		sameAs: SOCIALS.map((social) => social.url)
	}).replace(/</g, '\\u003c');

	const jsonLd = `<script type="application/ld+json">${personJson}<` + '/script>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={PROFILE.fullName} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="{PROFILE.fullName}, {PROFILE.role}" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON with `<` escaped -->
	{@html jsonLd}
</svelte:head>
