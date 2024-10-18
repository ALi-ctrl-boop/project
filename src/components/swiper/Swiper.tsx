import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css/sea-green'
import './swiper.css'
import { SLIDER_SWIPER } from '../../shared/constants/data'

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
							perPage: 1.2,
						},
					},
				}}
			>
				{SLIDER_SWIPER.map(slider => (
					<SplideSlide key={slider.rating}>
						<div className='relative w-full h-[600px] rounded-[30px] border border-gray-900 swiper '>
							<img
								className='w-full h-full object-center rounded-[30px]'
								src={slider.url}
								alt={slider.title}
							/>
							<div className='absolute bottom-6 z-10 px-8'>
								<h2 className='text-2xl font-bold text-white mb-2'>
									{slider.title}
								</h2>
								<div className='flex items-center gap-4'>
									<span className='text-white font-bold text-base p-1 rounded-lg bg-white bg-opacity-30'>
										{slider.rating}
									</span>
									<span className='text-white font-bold text-base'>
										{slider.year}
									</span>
									<span className='text-white font-bold text-base'>
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
