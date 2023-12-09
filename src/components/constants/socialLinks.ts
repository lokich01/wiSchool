import Facebook from 'public/facebook.svg';
import Twitter from 'public/twitter.svg';
import Instagram from 'public/instagram.svg';
import LinkedIn from 'public/linkedIn.svg';

type TypeSocialsLink = {
	key: string;
	href: string;
	Icon: React.ElementType;
	alt: string;
	fill: string;
};

const SOCIAL_LINKS: TypeSocialsLink[] = [
	{
		key: 'facebook',
		href: '/',
		Icon: Facebook,
		alt: 'Facebook Icon',
		fill: 'hsl(var(--green))',
	},
	{
		key: 'twitter',
		href: '/',
		Icon: Twitter,
		alt: 'Twitter Icon',
		fill: 'hsl(var(--green))',
	},
	{
		key: 'instagram',
		href: '/',
		Icon: Instagram,
		alt: 'Instagram Icon',
		fill: 'hsl(var(--green))',
	},
	{
		key: 'linkedIn',
		href: '/',
		Icon: LinkedIn,
		alt: 'LinkedIn Icon',
		fill: 'hsl(var(--green))',
	},
];

export default SOCIAL_LINKS;
