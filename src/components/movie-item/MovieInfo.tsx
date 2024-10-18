import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa6'
import { PiBookmarkSimple } from 'react-icons/pi'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import {
	KEY_API,
	openModalMovieFilmVideo,
	openModalMovieVideo,
} from '../../store/movieSlice'
import { IMoviesInfo } from '../../types'
import { Button } from '../ui/button/Button'
import './styles.css'

export const MovieInfo = () => {
	const [item, setItem] = useState<IMoviesInfo | null>(null)
	const { id } = useParams()
	const dispatch = useAppDispatch()

	const getMovieInfo = async () => {
		try {
			const { data } = await axios.get<IMoviesInfo>(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}`
			)
			setItem(data)
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
		}
	}

	useEffect(() => {
		getMovieInfo()
	}, [id])

	if (!item) return <div>Loading...</div>

	return (
		<div className='relative w-full h-full flex items-center justify-center shadows'>
			<div
				className='w-full h-[850px] flex items-center justify-center md:h-[400px]'
				style={{
					backgroundImage: `url("https://image.tmdb.org/t/p/original${item.backdrop_path}")`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			></div>
			<div className='w-[1700px] absolute bottom-[35%] z-10 px-10 xl2:w-full md:bottom-[-16rem] md:px-3'>
				<h1 className='text-4xl font-bold text-white mb-3 md:text-3xl'>
					{item.original_title}
				</h1>
				<div className='flex items-center gap-2 mb-2'>
					<span className='p-1 bg-green-400 text-white font-bold rounded-lg'>
						{item.vote_average}
					</span>
					<span className='text-white font-bold text-base'>
						{item.release_date.split('-')[0]}
					</span>
					<span className='text-white font-bold text-base md:hidden'>
						{item.genres.map(genre => genre.name).join(', ')}
					</span>
					<span className='text-white font-bold text-base'>
						{item.original_language.toUpperCase()}
					</span>
					<span className='text-white font-bold text-base'>
						{Math.floor(item.runtime / 60)} ч {item.runtime % 60} мин
					</span>
				</div>
				<p className='text-lg text-white w-[45%] mb-2 lg:w-2/3 info'>
					{item.overview}
				</p>
				<div className='flex items-center gap-2 md:hidden'>
					<span className='text-gray-400 font-bold text-lg'>Режиссёр:</span>
					<ul>
						<li className='text-white font-semibold'>Неизвестно</li>
					</ul>
				</div>
				<div className='flex items-center gap-2 md:hidden'>
					<span className='text-gray-400 font-bold text-lg'>Актеры:</span>
					<ul className='flex items-center gap-2'>
						{item.credits?.cast.slice(0, 4).map(actor => (
							<li key={actor.id} className='text-white font-semibold'>
								{actor.name}
							</li>
						))}
					</ul>
				</div>
				<div className='flex items-center gap-4 mt-3'>
					<Button
						onClick={() => dispatch(openModalMovieFilmVideo())}
						variant='primary'
					>
						Смотреть фильм{' '}
					</Button>
					<Button
						onClick={() => dispatch(openModalMovieVideo())}
						variant='secondary'
					>
						Трейлер
					</Button>
					<Button variant='secondary' sx='md:hidden'>
						<PiBookmarkSimple size={25} />
					</Button>
					<Button variant='secondary' sx='md:hidden'>
						<FaRegStar size={25} />
					</Button>
				</div>
			</div>
		</div>
	)
}
