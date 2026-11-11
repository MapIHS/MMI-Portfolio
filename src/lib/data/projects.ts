import anikyonn from '$lib/assets/work/anikyonn.webp?w=1280;800;480&enhanced';
import conito from '$lib/assets/work/conito-app.webp?w=640;480&enhanced';
import foxnime from '$lib/assets/work/foxnime.webp?w=1280;800;480&enhanced';
import imoney from '$lib/assets/work/imoney.webp?w=1280;800;480&enhanced';
import otakuToon from '$lib/assets/work/otakutoon.webp?w=1280;800;480&enhanced';

export type ProjectImage = typeof otakuToon;

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
	image: ProjectImage;
	imageAlt: string;
	links: ProjectLinks;
	year: number;
}

const FLUTTER_STACK = ['Flutter', 'Dart'];

export const PROJECTS: Project[] = [
	{
		title: 'Otaku Toon',
		slug: 'otaku-toon',
		category: 'Entertainment',
		year: 2025,
		description: 'An app for reading anime-based comics and manga.',
		techStack: FLUTTER_STACK,
		image: otakuToon,
		imageAlt:
			'Three phone screens of Otaku Toon showing the anime home page, a comic browsing grid, and the profile settings.',
		links: {}
	},
	{
		title: 'Conito App',
		slug: 'conito-app',
		category: 'Entertainment',
		year: 2025,
		description: 'A free, ad-free manhwa and manhua reader available in 50+ languages.',
		techStack: FLUTTER_STACK,
		image: conito,
		imageAlt:
			'Three phone screens of Conito showing popular comics, a translation language filter, and a filtered comic list.',
		links: {}
	},
	{
		title: 'IMoney',
		slug: 'imoney',
		category: 'Practice',
		year: 2026,
		description: 'An app to manage money and track daily budgets.',
		techStack: FLUTTER_STACK,
		image: imoney,
		imageAlt:
			'Two phone screens of IMoney showing the welcome page and a balance dashboard with budget entries.',
		links: { github: 'https://github.com/MapIHS/Flutter-IMoney' }
	},
	{
		title: 'Foxnime',
		slug: 'foxnime',
		category: 'Entertainment',
		year: 2026,
		description: 'A free anime streaming app with a broad catalog.',
		techStack: FLUTTER_STACK,
		image: foxnime,
		imageAlt:
			'Three phone screens of Foxnime showing an episode player, an episode list, and the popular anime home page.',
		links: {}
	},
	{
		title: 'AniKyonn For Anilist',
		slug: 'anikyonn',
		category: 'Entertainment',
		year: 2026,
		description: 'An app for managing your anime lists on AniList.',
		techStack: FLUTTER_STACK,
		image: anikyonn,
		imageAlt:
			"Three phone screens of AniKyonn showing today's anime schedule, the seasonal list, and an anime detail page.",
		links: { playstore: 'https://play.google.com/store/apps/details?id=com.ihdev.anikyonn' }
	}
];
