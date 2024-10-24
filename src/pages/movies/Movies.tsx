import { useEffect, useState } from 'react'
import { MovieCard } from '../../components/movie-card/MovieCard'
import { getAll } from '../../shared/utils/api/getAll'
import { IMovies } from '../../types'

export const Movies = () => {
	const [movies, setMovies] = useState<IMovies[]>([])
	const [isLoading, setLoading] = useState<boolean>(false)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [sorts, setSorts] = useState<string>('popular')

	useEffect(() => {
		setLoading(true)
		getAll(currentPage, `movie/${sorts}`)
			.then(data => setMovies(newPage => [...newPage, ...data]))
			.finally(() => setLoading(false))
	}, [currentPage, sorts])

	const handleScrolling = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight ||
			isLoading
		) {
			setCurrentPage(newPage => newPage + 1)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScrolling)
		return () => {
			window.removeEventListener('scroll', handleScrolling)
		}
	}, [])

	const handleSortsMovies: React.ChangeEventHandler<HTMLSelectElement> = e => {
		setSorts(e.target.value)
		setCurrentPage(1)
		setMovies([])
	}
	return (
		<div className='w-full flex justify-center mt-5'>
			<div className='w-[1700px] overflow-hidden px-3 xl2:w-full md:px-2'>
				<h1 className='text-white text-4xl font-bold'>Movies</h1>
				<div className='my-3'>
					<select
						className='bg-[#222] px-5 py-2 rounded-full outline-none text-white'
						onChange={handleSortsMovies}
					>
						<option value='popular'>Popular</option>
						<option value='top_rated'>Top Rated</option>
						<option value='upcoming'>Upcoming</option>
					</select>
				</div>
				<div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mt-5 md:px-10'>
					{movies.map(movie => (
						<MovieCard key={movie.id} {...movie} endpoint='movie' />
					))}
				</div>
				{isLoading && <h2 className='text-white'>Loading...</h2>}
			</div>
		</div>
	)
}
