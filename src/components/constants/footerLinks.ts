type TypeFooterLink = {
	key: string;
	title: string;
	href: string;
};

interface IFooterSection {
	key: string;
	links: TypeFooterLink[];
}

const FOOTER_LINKS: IFooterSection[] = [
	{
		key: 'navigation',
		links: [
			{
				key: 'home',
				title: 'Home',
				href: '/',
			},
			{
				key: 'services',
				title: 'Services',
				href: '/',
			},
			{
				key: 'training',
				title: 'Training',
				href: '/',
			},
			{
				key: 'resources',
				title: 'Resources',
				href: '/',
			},
			{
				key: 'about_us',
				title: 'About Us',
				href: '/',
			},
		],
	},
	{
		key: 'about_company',
		links: [
			{
				key: 'sme',
				title: 'SME',
				href: '/',
			},
			{
				key: 'solution',
				title: 'Solution',
				href: '/',
			},
			{
				key: 'reviews',
				title: 'Reviews',
				href: '/',
			},
			{
				key: 'blog',
				title: 'Blog',
				href: '/',
			},
		],
	},
	{
		key: 'work',
		links: [
			{
				key: 'job_opening',
				title: 'Job Opening',
				href: '/',
			},
			{
				key: 'news',
				title: 'News',
				href: '/',
			},
			{
				key: 'research',
				title: 'Research',
				href: '/',
			},
		],
	},
];

export default FOOTER_LINKS;
