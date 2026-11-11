export type ProjectCategory = 'Entertainment' | 'Practice';

export interface ProjectLinks {
	github?: string;
	playstore?: string;
	demo?: string;
}

export interface Project {
	title: string;
	slug: string;
	category: ProjectCategory;
	description: string;
	techStack: string[];
	image: string;
	imageAlt: string;
	links: ProjectLinks;
	year?: number;
}

const FLUTTER_STACK = ['Flutter', 'Dart'];

export const PROJECTS: Project[] = [
	{
		title: 'Otaku Toon',
		slug: 'otaku-toon',
		category: 'Entertainment',
		description: 'An app for reading anime-based comics and manga.',
		techStack: FLUTTER_STACK,
		image: '/images/work/otakutoon.webp',
		imageAlt:
			'Three phone screens of Otaku Toon showing the anime home page, a comic browsing grid, and the profile settings.',
		links: {}
	},
	{
		title: 'Conito App',
		slug: 'conito-app',
		category: 'Entertainment',
		description: 'A free, ad-free manhwa and manhua reader available in 50+ languages.',
		techStack: FLUTTER_STACK,
		image: '/images/work/conito-app.webp',
		imageAlt:
			'Three phone screens of Conito showing popular comics, a translation language filter, and a filtered comic list.',
		links: {}
	},
	{
		title: 'IMoney',
		slug: 'imoney',
		category: 'Practice',
		description: 'An app to manage money and track daily budgets.',
		techStack: FLUTTER_STACK,
		image: '/images/work/imoney.webp',
		imageAlt:
			'Two phone screens of IMoney showing the welcome page and a balance dashboard with budget entries.',
		links: { github: 'https://github.com/MapIHS/Flutter-IMoney' }
	},
	{
		title: 'Foxnime',
		slug: 'foxnime',
		category: 'Entertainment',
		description: 'A free anime streaming app with a broad catalog.',
		techStack: FLUTTER_STACK,
		image: '/images/work/foxnime.webp',
		imageAlt:
			'Three phone screens of Foxnime showing an episode player, an episode list, and the popular anime home page.',
		links: {}
	},
	{
		title: 'AniKyonn For Anilist',
		slug: 'anikyonn',
		category: 'Entertainment',
		description: 'An app for managing your anime lists on AniList.',
		techStack: FLUTTER_STACK,
		image: '/images/work/anikyonn.webp',
		imageAlt:
			"Three phone screens of AniKyonn showing today's anime schedule, the seasonal list, and an anime detail page.",
		links: { playstore: 'https://play.google.com/store/apps/details?id=com.ihdev.anikyonn' }
	}
];
