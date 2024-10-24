import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { KEY_API, toggleModal } from '../../store/movieSlice'
import { Modal } from '../ui/modal/Modal'

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
			const trailer = data.results.find(
				(video: { type: string }) => video.type === 'Trailer'
			)

			if (!trailer) {
				throw new Error(`Не найден Трейлер`)
			}
			setVideos(trailer.key)
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
		}
	}

	useEffect(() => {
		getMovieVideo()
	}, [id])
	return (
		<Modal isOpen={isOpenMovieVideo}>
			<button
				onClick={() =>
					dispatch(toggleModal({ modal: 'isOpenMovieVideo', isOpen: false }))
				}
				className='absolute top-6 right-6 outline-none z-10'
			>
				<MdOutlineClose size={35} className='text-white ' />
			</button>
			<div className='relative w-[700px] h-[400px] bg-black md:w-full '>
				<ReactPlayer
					width='100%'
					height='100%'
					url={`https://www.youtube.com/watch?v=${videos}`}
					controls={false}
					autoPlay
				/>
			</div>
		</Modal>
	)
}
