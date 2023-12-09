import Link from 'next/link';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

import FOOTER_LINKS from '../constants/footerLinks';
import SOCIAL_LINKS from '../constants/socialLinks';

import Logo from 'public/logoSecondary.svg';

const Footer = () => {
	return (
		<footer className='py-[3.94rem] bg-black text-white'>
			<div className='container'>
				<div>
					<p className='text-sm'>Subscribe to get latest updates</p>
					<div className='flex mt-[0.3rem]'>
						<Input
							type='email'
							placeholder='Your Email Address'
							className='text-black'
						/>
						<Button
							variant={'default'}
							className='rounded-none h-[2.25413rem] text-[0.625rem]'>
							Subscribe
						</Button>
					</div>
				</div>
				<div className='flex text-sm mt-12 gap-x-[1.56rem]'>
					{FOOTER_LINKS.map((section) => (
						<ul
							key={section.key}
							className='flex flex-col gap-y-2 min-w-[4.9375rem] min-h-[10.75rem]'>
							{section.links.map((link) => (
								<li key={link.key}>
									<Link href={link.href}>{link.title}</Link>
								</li>
							))}
						</ul>
					))}
				</div>
				<div>
					<Logo
						className='mt-[1.39rem]'
						width='8.25rem'
						height='2.5625rem'
					/>
					<div className='flex w-[9.875rem] justify-between mt-6'>
						{SOCIAL_LINKS.map(({ key, href, Icon, alt, fill }) => (
							<div key={key}>
								<Link href={href}>
									<Icon
										fill={fill}
										alt={alt}
										width='1.5rem'
										height='1.5rem'
									/>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
