import { Link } from 'react-router-dom'
import { CATEGORY_MOVIE } from '../../shared/constants/data'

export const Category = () => {
	return (
		<div className='w-[1440px] overflow-hidden flex items-center justify-center gap-2 py-4 px-3 mt-4 xl2:w-full'>
			<nav className='w-full overflow-x-scroll flex gap-4 md:gap-2'>
				{CATEGORY_MOVIE.map((category, i) => (
					<Link key={i} to={'/movie'}>
						<div className='flex items-center justify-center gap-1 py-4 px-6 bg-[#1D1D20] rounded-lg transition duration-300 hover:bg-opacity-90 cursor-pointer xl2:px-8'>
							<img
								src={category.icon}
								alt={category.title}
								className='w-6 h-6 sm:h-4 sm:w-4'
							/>
							<span className='text-white font-bold sm:text-sm'>
								{category.title}
							</span>
						</div>
					</Link>
				))}
			</nav>
		</div>
	)
}
