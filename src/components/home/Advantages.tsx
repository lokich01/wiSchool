import ADVANTAGES_LIST from '../constants/advantagesList';

const Advantages = () => {
	return (
		<section className='pt-16'>
			<div className='container'>
				<ul className='flex flex-wrap gap-x-4 gap-y-6 justify-center'>
					{ADVANTAGES_LIST.map(({ id, title, Icon, alt }) => (
						<li
							key={id}
							className='flex items-center gap-x-[0.67rem] py-[0.58rem] pl-[0.95rem] pr-[0.56rem] bg-[#DFF] rounded-[0.27963rem]'>
							<Icon
								alt={alt}
								wight='2.3125rem'
								height='2.3125rem'
							/>
							<p>{title}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Advantages;
