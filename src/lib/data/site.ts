export interface NavLink {
	label: string;
	url: `#${string}`;
}

export const SITE_URL = 'https://www.mpsan.my.id';

export const NAV_LINKS: NavLink[] = [
	{ label: 'Home', url: '#hero' },
	{ label: 'About', url: '#about' },
	{ label: 'Projects', url: '#work' },
	{ label: 'Contact', url: '#contact' }
];
