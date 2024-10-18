import axios from 'axios'
import { useEffect, useState } from 'react'
import { MovieCard } from '../../components/movie-card/MovieCard'
import { KEY_API } from '../../store/movieSlice'
import { IMovies } from '../../types'
import './styles.css'

export const Movies = () => {
	const [movies, setMovies] = useState<IMovies[]>([])
	const [isLoading, setLoading] = useState<boolean>(false)
	const [currentPage, setCurrentPage] = useState<number>(1)

	const getAllMovies = async (page: number) => {
		setLoading(true)
		try {
			const { data } = await axios.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}&page=${page}`
			)
			setMovies(movies => [...movies, ...data.results])
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getAllMovies(currentPage)
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
			<div className='w-[1440px] px-3 xl2:w-full md:px-2'>
				<h1 className='text-white text-4xl font-bold'>Фильмы</h1>

				<div className='grid grid-cols-5 justify-items-center gap-3 mt-4 grids'>
					{movies.map(movie => (
						<MovieCard key={movie.id} {...movie} sx='resps' />
					))}
				</div>
				{isLoading && <h2 className='text-white'>Загрузка...</h2>}
			</div>
		</div>
	)
}
