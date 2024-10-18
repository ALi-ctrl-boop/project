import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { KEY_API } from '../../store/movieSlice'
import { IMovieCredits } from '../../types'

export const ActorsCreators = () => {
	const [movies, setMovies] = useState<IMovieCredits | null>(null)
	const { id } = useParams()

	const getMovieInfo = async () => {
		try {
			const { data } = await axios.get<IMovieCredits | null>(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY_API}`
			)
			setMovies(data)
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
		}
	}

	useEffect(() => {
		getMovieInfo()
	}, [id])

	if (!movies) return <div>Loading...</div>
	return (
		<div className='relative overflow-hidden z-10 px-10 w-[1700px] mt-20 xl2:w-full '>
			<h2 className='text-2xl text-white font-bold'>Актёры и создатели</h2>
			<div className='w-[80rem] overflow-x-scroll flex gap-4 mt-4'>
				{movies.cast.slice(0, 8).map(movie => (
					<div
						key={movie.id}
						className='w-40 h-auto p-2 transition duration-500 cursor-pointer hover:-translate-y-2'
					>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
							alt='image'
							className='w-full h-32 rounded-full'
						/>
						<div className='flex flex-col mt-2'>
							<span className='text-white font-bold'>{movie.name}</span>
							<span className='text-[#777] bg-opacity-30 font-bold'>
								{movie.character}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
