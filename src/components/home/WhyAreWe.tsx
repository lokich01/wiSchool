import Image from 'next/image';

import ShoppingBag from 'public/shoppingBag.svg';
import Line from 'public/line.svg';
const WhyAreWe = () => {
	return (
		<section className='pt-[4.64rem]'>
			<div className='container'>
				<div>
					<h2 className='font-semibold'>We Bring The Good Education To Life</h2>
					<div className='mt-8 relative w-[21.42325rem] h-[25.21775rem]'>
						<Image
							src='/whyAreWe.png'
							alt='Girl With Notebook'
							width={342}
							height={403.5}
						/>
						<div className='text-center w-[7.05rem] h-[7.97907rem] pt-[0.66rem] pb-[1.41rem] px-[0.43rem] flex flex-col absolute top-[11.64rem] -right-[2.62rem] bg-white rounded-[0.37638rem] rounded-br-[0.94094rem] '>
							<ShoppingBag className='mx-auto' />
							<p className='text-[0.87444rem] font-semibold'>
								<span className='text-[1.31163rem] text-green '>Job</span>
								<Line
									className='mx-auto'
									wight='2.3125rem'
									height='0.3rem'
								/>
								Opportunities
							</p>
						</div>
					</div>
				</div>
				<div className='pt-8'>
					<h3 className='text-subtitle font-semibold'>Let Your Education Do The Walking</h3>
				</div>
			</div>
		</section>
	);
};

export default WhyAreWe;
