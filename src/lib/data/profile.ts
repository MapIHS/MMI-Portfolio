export interface Profile {
	/** Used everywhere except the hero heading. */
	fullName: string;
	/** Used only in the hero heading. */
	shortName: string;
	role: string;
	email: string;
	avatar: string;
}

export interface SocialLink {
	label: 'GitHub' | 'LinkedIn';
	url: string;
}

export interface SectionCopy {
	label: string;
	headline: string;
	subline: string;
}

export const PROFILE: Profile = {
	fullName: 'Muhamad Maptuhul Ihsan',
	shortName: 'Maptuhul Ihsan',
	role: 'Flutter Developer',
	email: 'ihsan@mpsan.my.id',
	avatar: '/images/profile.webp'
};

export const GITHUB: SocialLink = { label: 'GitHub', url: 'https://github.com/MapIHS' };
export const LINKEDIN: SocialLink = {
	label: 'LinkedIn',
	url: 'https://www.linkedin.com/in/maptuhul-ihsan/'
};
export const SOCIALS: SocialLink[] = [GITHUB, LINKEDIN];

export const HERO = {
	badge: 'Ready to Learn',
	headline: `Hi, I'm ${PROFILE.shortName}.`,
	subline:
		'I love exploring new technologies. Currently Learning Flutter just for fun and learning.'
};

export const ABOUT = {
	label: 'About Me',
	introduce: [
		`Hi! I'm ${PROFILE.fullName}. I enjoy trying out various programming languages and frameworks.`,
		'I believe the best way to learn is by doing. I may not stick to one tool forever, but I adapt quickly to whatever the project needs.',
		'Currently focusing on writing clean code and understanding core concepts.'
	]
};

export const PROJECTS_COPY: SectionCopy = {
	label: 'Selected Projects',
	headline: 'What I have built',
	subline: 'Small experiments and learning milestones.'
};

export const CONTACT: SectionCopy = {
	label: 'Contact',
	headline: "Let's build something useful.",
	subline:
		'I am open to collaboration, feedback, and small Flutter projects that help me keep learning by doing.'
};
