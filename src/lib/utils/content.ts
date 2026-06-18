export const NAVLINKS = [
	{ label: 'Home', url: '#hero' },
	{ label: 'About', url: '#about' },
	{ label: 'Projects', url: '#work' },
	{ label: 'Contact', url: '#contact' }
];

export const PROFILE = {
	firstname: 'Muhamad',
	lastname: 'Maptuhul Ihsan',
	get fullname() {
		return `${this.firstname} ${this.lastname}`;
	},
	role: 'Flutter Developer',
	avatar: '/images/profile.webp'
};

export const HERO = {
	badge: 'Ready to Learn',
	headline: `Hi, I'm ${PROFILE.lastname}.`,
	subline:
		'I love exploring new technologies. Currently Learning Flutter just for fun and learning.'
};

export const PROJECT = {
	label: 'Selected Projects',
	headline: 'What I have built',
	subline: 'Small experiments and learning milestones.',
	project: [
		{
			name: 'Otaku Toon',
			live_demo: '#',
			description: 'Aplikasi Baca Anime, Komik, Manga',
			thumbnails: 'otakutoon.webp',
			type: 'Entertainment'
		},
		{
			name: 'Conito App',
			live_demo: '#',
			description:
				'Free Manhwa and Manhua Reading App Without Ads With more than 50+ Languages available. Conito offers a seamless reading experience with a vast collection of comics from various genres and languages.',
			thumbnails: 'conito-app.webp',
			type: 'Entertainment'
		},
		{
			name: 'IMoney',
			live_demo: '#',
			description: 'Manage money and track daily budgets.',
			thumbnails: 'imoney.webp',
			type: 'Practice'
		},
		{
			name: 'Foxnime',
			live_demo: '#',
			description: 'Aplikasi untuk streaming anime gratis dengan koleksi yang cukup lengkap.',
			thumbnails: 'foxnime.webp',
			type: 'Entertainment'
		},
		{
			name: 'AniKyonn For Anilist',
			live_demo: '#',
			description: 'Aplikasi untuk mengelola daftar anime di Anilist.',
			thumbnails: 'anikyonn.webp',
			type: 'Entertainment'
		}
	]
};

export const ABOUT = {
	label: 'About Me',
	introduce: [
		`Hi! I'm ${PROFILE.fullname}. I enjoy trying out various programming languages and frameworks.`,
		'I believe the best way to learn is by doing. I may not stick to one tool forever, but I adapt quickly to whatever the project needs.',
		'Currently focusing on writing clean code and understanding core concepts.'
	]
};

export const CONTACT = {
	label: 'Contact',
	headline: "Let's build something useful.",
	subline:
		'I am open to collaboration, feedback, and small Flutter projects that help me keep learning by doing.'
};
