import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { KEY_API } from '../../store/movieSlice'
import { IMoviesInfo } from '../../types'

export const DescriptionTabs = () => {
	const [isActive, setActive] = useState(0)
	const [item, setItem] = useState<IMoviesInfo | null>(null)
	const { id } = useParams()

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
		<div className='relative z-10 px-10 w-[1700px] mt-10 xl2:w-full overflow-hidden md:mt-80 md:px-3'>
			<ul className='h-[30px] flex items-center gap-7 mb-2'>
				<li
					onClick={() => setActive(0)}
					className={`text-lg font-bold cursor-pointer ${
						isActive === 0 ? 'text-[#2941b7]' : 'text-white'
					}`}
				>
					Описание
				</li>
				<li
					onClick={() => setActive(1)}
					className={`text-lg font-bold cursor-pointer ${
						isActive === 1 ? 'text-[#2941b7]' : 'text-white'
					}`}
				>
					Изображения
				</li>
			</ul>
			<span className='absolute w-[93%] h-[2px] bg-[#777] bg-opacity-30 md:w-[96.5%]'></span>
			<div className={`mt-10 ${isActive === 0 ? 'block' : 'hidden'}`}>
				<p className='text-[#777] text-xl font-semibold w-[60%] mb-4 xl:w-[80%] md:text-base decrt'>
					{item.overview}
				</p>
				<b className='text-[#2941b7] text-xl'>Подробное описание</b>
			</div>
			<div className={`mt-10 ${isActive === 1 ? 'block' : 'hidden'}`}></div>
		</div>
	)
}
