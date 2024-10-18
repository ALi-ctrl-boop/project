import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css/sea-green'
import { SLIDER_SWIPER } from '../../shared/constants/data'
import './swiper.css'

export const Swiper = () => {
	return (
		<div className='w-full mt-5'>
			<Splide
				options={{
					type: 'loop',
					perPage: 1.6,
					focus: 'center',
					gap: '20px',
					breakpoints: {
						768: {
							perPage: 1.5,
							gap: '10px',
						},
					},
				}}
			>
				{SLIDER_SWIPER.map((slider, i) => (
					<SplideSlide key={i}>
						<div className='relative w-full h-[600px] rounded-[30px] border border-gray-900 swiper md:rounded-xl'>
							<img
								className='w-full h-full object-center rounded-[30px] md:rounded-xl'
								src={slider.url}
								alt={slider.title}
							/>
							<div className='absolute bottom-6 z-10 px-8 md:px-4'>
								<h2 className='text-2xl font-bold text-white mb-2 md:text-lg'>
									{slider.title}
								</h2>
								<div className='flex items-center gap-4 md:gap-2'>
									<span className='text-white font-bold text-base p-1 rounded-lg bg-white bg-opacity-30 md:text-sm'>
										{slider.rating}
									</span>
									<span className='text-white font-bold text-base md:text-sm'>
										{slider.year}
									</span>
									<span className='text-white font-bold text-base md:text-sm'>
										{slider.genre}
									</span>
								</div>
							</div>
						</div>
					</SplideSlide>
				))}
			</Splide>
		</div>
	)
}
