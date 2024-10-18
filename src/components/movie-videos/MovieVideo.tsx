import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { closeModalMovieVideo, KEY_API } from '../../store/movieSlice'

export const MovieVideo = () => {
	const { isOpenMovieVideo } = useAppSelector(state => state.movie)
	const dispatch = useAppDispatch()
	const [videos, setVideos] = useState(null)
	const { id } = useParams()

	const getMovieVideo = async () => {
		try {
			const { data } = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY_API}`
			)
			const trailer = data.results.find(v => v.type === 'Trailer')
			setVideos(trailer.key)
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
		}
	}

	useEffect(() => {
		getMovieVideo()
	}, [id])
	return (
		<div
			className={`fixed w-full h-full bg-black bg-opacity-80 left-0 top-0 z-20 flex items-center justify-center flex-col transition duration-300  
				${!isOpenMovieVideo ? '-translate-y-[100%]' : 'translate-y-[0]'}
	`}
		>
			<button
				onClick={() => dispatch(closeModalMovieVideo())}
				className='absolute top-6 right-6 outline-none z-10'
			>
				<MdOutlineClose size={35} className='text-white ' />
			</button>
			<div className='relative w-[700px] h-[400px] bg-black md:w-full '>
				<ReactPlayer
					className='w-full h-full'
					url={`https://www.youtube.com/watch?v=${videos}`}
					controls={false}
					autoPlay
				/>
			</div>
		</div>
	)
}
