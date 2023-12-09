import Image from 'next/image';

import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import UserAvatar from 'public/userAvatarSecondary.svg';

import USERS from '../constants/heroUsers';

const Hero = () => {
	return (
		<section className='py-[0.63rem] '>
			<div className='container relative pb-[2.44rem]'>
				<div className='bg-[#E4FFFF] absolute top-[0.63rem] bottom-0 right-[1.5rem] w-[6.6875rem] -z-10 rounded-br-[4rem] rounded-tl-[2.5rem]' />
				<h1 className='text-title font-bold w-[18.75rem] pt-[4.78rem] '>
					Quality <span className='text-green'>Education</span> By Any Means Necessary.
				</h1>
				<Button className='mt-[2.14rem]'>Get Started</Button>
				<div className='w-[21.1875rem] h-[19.5rem] relative mt-16'>
					<Image
						className='absolute right-0 bottom-0'
						src='/hero.png'
						alt='Girl With Notebook'
						width={260}
						height={305.5}
					/>
					<div className='absolute w-[8.89763rem] h-[6.3506rem] pt-[0.6rem] px-[0.8rem] pb-[0.41rem] bg-white rounded-[0.47544rem] rounded-br-[1.01881rem] left-[0.31rem] top-[9.56rem] '>
						<p className='text-[0.67919rem] font-semibold text-center'>
							Learn from best <span className='text-green'>instructors</span> around the globe
						</p>
						<Image
							className='mt-[0.35rem] mx-auto '
							src='/heroFrame.png'
							alt='Users'
							width={84}
							height={25}
						/>
						{/* { <ul className='flex gap-x-[-0.71rem]'>
							{USERS.map((user) => (
								<li key={user.id}>
									<Avatar>
										<AvatarImage
											src={user.iconSrc}
											alt='User Icon'
										/>
										<AvatarFallback>{user.userFallback}</AvatarFallback>
									</Avatar>
								</li>
							))}
						</ul> }
						*/}
					</div>
					<div className='w-[4.86481rem] h-[5.50594rem] bg-white absolute px-[0.49rem] pb-[0.28rem] pt-[0.57rem] left-[17.02rem] top-[12.75rem] rounded-[0.25969rem] rounded-br-[0.64931rem]'>
						<UserAvatar
							className='mx-auto'
							width='1.13138rem'
							height='1.13138rem'
						/>
						<div className='text-center mt-[0.11rem]'>
							<p className='text-[0.90506rem] text-green font-semibold'>15k</p>
							<p className='font-medium text-[0.45256rem]'>Amazing students around the globe</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
