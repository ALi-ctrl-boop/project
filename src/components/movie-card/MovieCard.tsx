import { Link } from 'react-router-dom'

interface IMovieCard {
	id: number
	poster_path?: string
	vote_average?: number
	original_title?: string
	release_date?: number
	vote_count?: string
	sx?: string
	endpoint?: string
}

export const MovieCard = ({
	id,
	poster_path,
	vote_average,
	original_title,
	release_date,
	vote_count,
	sx,
	endpoint,
}: IMovieCard) => {
	return (
		<Link to={`/${endpoint}/${id}`}>
			<div
				className={`relative w-64 h-96 rounded-xl cursor-pointer group transition duration-500 hover:scale-[1.05] hover:border border-slate-400 resp ${sx}`}
			>
				<img
					src={`https://image.tmdb.org/t/p/w500${poster_path}`}
					alt='Image'
					className='w-full h-full rounded-xl transition duration-500 group-hover:opacity-20'
				/>

				<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500'>
					<span className='absolute top-4 left-4 text-white font-bold text-base p-1 rounded-lg bg-white bg-opacity-30 sm:text-sm'>
						{vote_average}
					</span>
					<div className='absolute bottom-2 left-4'>
						<p className='text-base text-white font-bold sm:text-sm'>
							{original_title}
						</p>
						<div className='flex items-center gap-4 sm:flex-col sm:items-start sm:gap-0'>
							<span className='text-white font-bold text-base sm:text-sm'>
								{release_date}
							</span>
							<span className='text-white font-bold text-base sm:text-sm'>
								{Math.floor(Number(vote_count) / 60)} ч{' '}
								{Number(vote_count) % 60} мин
							</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}
