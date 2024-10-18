import { Link } from 'react-router-dom'

interface ISearchCard {
	id: number
	poster_path: string
	original_title: string
	release_date: number
	vote_average: number
}

export const SearchCard = ({
	id,
	poster_path,
	original_title,
	release_date,
	vote_average,
}: ISearchCard) => {
	return (
		<Link to={`movie/${id}`}>
			<li className='w-auto h-20 flex gap-2 rounded-lg'>
				<img
					className='w-14 h-full rounded-lg'
					src={`https://image.tmdb.org/t/p/w500${poster_path}`}
					alt={original_title}
				/>
				<div>
					<h3 className='text-white font-bold text-sm'>{original_title}</h3>
					<div className='space-x-2 mt-1'>
						<span className='text-sm text-[#777] opacity-70 font-bold'>
							{release_date.slice(0, 4)}
						</span>
						<span className='p-1 bg-slate-800 rounded-lg font-bold text-sm text-white'>
							{vote_average}
						</span>
					</div>
				</div>
			</li>
		</Link>
	)
}
