export const NAVLINKS = [
	{ label: 'Home', url: '#hero' },
	{ label: 'About', url: '#about' },
	{ label: 'Projects', url: '#work' }
];

export const PROFILE = {
	firstname: 'Muhamad',
	lastname: 'Maptuhul Ihsan',
	get fullname() {
		return `${this.firstname} ${this.lastname}`;
	},
	role: 'Flutter Developer',
	avatar: '/images/profile.png'
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
			thumbnails: 'otakutoon.png',
			type: 'Entertaiment'
		},
		{
			name: 'Conito App',
			live_demo: '#',
			description:
				'Free Manhwa and Manhua Reading App Without Ads With more than 50+ Languages available. Conito offers a seamless reading experience with a vast collection of comics from various genres and languages.',
			thumbnails: 'conito-app.png',
			type: 'Entertaiment'
		},
		{
			name: 'IMoney',
			live_demo: '#',
			description:
				'Managed MOney',
			thumbnails: 'imoney.png',
			type: 'Practice'
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
