import Link from 'next/link';

import { Button } from '../ui/button';

import NAV_LINKS from '../constants/navLinks';

import Logo from 'public/logo.svg';
import UserAvatar from 'public/userAvatar.svg';
import HamburgerMenu from 'public/hamburgerMenu.svg';

const Navbar = () => {
	return (
		<nav className='w-full h-[5.625rem] shadow-md flex items-center sticky top-0 bg-white z-50'>
			<div className='container flex justify-between items-center sticky'>
				<div className='flex gap-x-[0.75rem]'>
					<Button
						variant={'ghost'}
						size={'icon'}>
						<HamburgerMenu
							width='1.5rem'
							height='1.5rem'
						/>
					</Button>
					<Logo
						width='5.875rem'
						height='1.8125rem'
					/>
				</div>
				<Button
					variant={'ghost'}
					size={'icon'}>
					<UserAvatar
						width='1.5rem'
						height='1.5rem'
					/>
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
