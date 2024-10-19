import { useEffect, useState } from 'react'
import { MovieCard } from '../../components/movie-card/MovieCard'
import { getAll } from '../../shared/utils/api/getAll'
import { IMovies } from '../../types'
import './styles.css'

export const Movies = () => {
	const [movies, setMovies] = useState<IMovies[]>([])
	const [isLoading, setLoading] = useState<boolean>(false)
	const [currentPage, setCurrentPage] = useState<number>(1)

	useEffect(() => {
		setLoading(true)
		getAll(currentPage, 'movie/popular')
			.then(data => setMovies(newPage => [...newPage, ...data]))
			.finally(() => setLoading(false))
	}, [currentPage])

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

	return (
		<div className='w-full flex justify-center mt-5'>
			<div className='w-[1700px] overflow-hidden px-3 xl2:w-full md:px-2'>
				<h1 className='text-white text-4xl font-bold'>Movies</h1>

				<div className='grid grid-cols-6 justify-items-center gap-3 mt-4 grids'>
					{movies.map(movie => (
						<MovieCard key={movie.id} {...movie} sx='resps' />
					))}
				</div>
				{isLoading && <h2 className='text-white'>Loading...</h2>}
			</div>
		</div>
	)
}
