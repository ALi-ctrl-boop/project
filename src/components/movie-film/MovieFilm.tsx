import { MdOutlineClose } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleModal } from '../../store/movieSlice'
import { Modal } from '../ui/modal/Modal'

export const MovieFilm = () => {
	const { isOpenMovieFilmVideo } = useAppSelector(state => state.movie)
	const dispatch = useAppDispatch()

	return (
		<Modal isOpen={isOpenMovieFilmVideo}>
			<button
				onClick={() =>
					dispatch(
						toggleModal({ modal: 'isOpenMovieFilmVideo', isOpen: false })
					)
				}
				className='absolute top-6 right-6 outline-none z-10'
			>
				<MdOutlineClose size={35} className='text-white ' />
			</button>
			<div className='w-auto h-auto bg-balck'>
				<p className='text-white text-2xl font-bold'>
					I'm sorry but there are no films yet but there will be soon
				</p>
			</div>
		</Modal>
	)
}
