import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css/sea-green'
import { useEffect } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getAllMovies } from '../../store/movieSlice'
import { MovieCard } from '../movie-card/MovieCard'
import './swiper.css'

export const Movie = () => {
	const dispatch = useAppDispatch()
	const { movies } = useAppSelector(state => state.movie)

	useEffect(() => {
		const endpoints = [
			'movie/popular',
			'discover/tv',
			'movie/top_rated',
			'movie/upcoming',
			'movie/now_playing',
		]
		endpoints.forEach(end => {
			dispatch(getAllMovies(end))
		})
	}, [dispatch])

	const moviesCatalog = [
		{ title: 'Popular films', movies: movies.popularMovies },
		{ title: 'Watching with the whole family', movies: movies.familyMovies },
		{ title: 'Top movies', movies: movies.newMovies },
		{ title: 'New films', movies: movies.dramaMovies },
		{ title: 'Fantasy', movies: movies.sciFiMovies },
	]

	return (
		<>
			{moviesCatalog.map((movieCatalog, index) => (
				<div
					className='w-full overflow-hidden pl-[6%] xl:pl-4 mb-6'
					key={index}
				>
					<div className='flex items-center gap-3 mb-4'>
						<h2 className='text-white text-2xl font-bold transition-opacity duration-300 hover:opacity-70'>
							{movieCatalog.title}
						</h2>
						<button className='focus:outline-none transition-opacity duration-300 hover:opacity-70'>
							<FaChevronRight color='white' size={15} />
						</button>
					</div>
					<div className='w-full'>
						<Splide
							options={{
								type: 'loop',
								perPage: 7,
								focus: 'left',
								gap: '30px',
								breakpoints: {
									425: {
										navigation: false,
									},
								},
							}}
						>
							{movieCatalog.movies && movieCatalog.movies.length > 0 ? (
								movieCatalog.movies.map(movie => (
									<SplideSlide key={movie.id} className='my-5 pr-60 resp_swipe'>
										<MovieCard {...movie} endpoint='movie' sx='w-64 resp' />
									</SplideSlide>
								))
							) : (
								<div className='text-white'>Нет доступных фильмов.</div>
							)}
						</Splide>
					</div>
				</div>
			))}
		</>
	)
}
