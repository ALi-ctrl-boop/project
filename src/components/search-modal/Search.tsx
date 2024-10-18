import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { closeModalSearch } from '../../store/movieSlice'
import { SearchCard } from '../search-card/SearchCard'

export const Search = () => {
	const [search, setSearch] = useState<string>('')
	const { isOpenSearch, popularMovies } = useAppSelector(state => state.movie)
	const dispatch = useAppDispatch()

	const filteredMovies = popularMovies.filter(movie =>
		movie.original_title.toLowerCase().includes(search.toLowerCase())
	)
	return (
		<div
			className={`fixed w-full h-full bg-black bg-opacity-80 left-0 top-0 z-20 flex items-center justify-center flex-col transition duration-300  ${
				!isOpenSearch ? '-translate-y-[100%]' : 'translate-y-[0]'
			}`}
		>
			<button
				onClick={() => dispatch(closeModalSearch())}
				className='absolute top-6 right-6 outline-none z-10'
			>
				<MdOutlineClose size={35} className='text-white ' />
			</button>
			<div className='relative w-5/12 lg:w-5/6'>
				<h2 className='text-white font-bold text-2xl mb-2'>Поиск</h2>
				<input
					type='search'
					placeholder='Поиск...'
					value={search}
					onChange={e => setSearch(e.target.value)}
					className='w-full py-3 px-4 rounded-xl outline-none text-slate-500'
				/>

				<ul className='h-[250px] overflow-y-scroll flex flex-col gap-2 mt-3'>
					{search
						? filteredMovies.map(movie => (
								<SearchCard key={movie.id} {...movie} />
						  ))
						: null}
				</ul>
			</div>
		</div>
	)
}
