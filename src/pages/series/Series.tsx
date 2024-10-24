import { useEffect, useState } from 'react'
import { MovieCard } from '../../components/movie-card/MovieCard'
import { getAll } from '../../shared/utils/api/getAll'
import type { ISeries } from '../../types'

export const Series = () => {
	const [series, setSeries] = useState<ISeries[]>([])
	const [isLoading, setLoading] = useState<boolean>(true)
	const [currentPage, setCurrentPage] = useState<number>(1)

	const handleSeriesScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight ||
			isLoading
		) {
			setCurrentPage(newSeriesPage => newSeriesPage + 1)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleSeriesScroll)
		return () => window.removeEventListener('scroll', handleSeriesScroll)
	}, [])

	useEffect(() => {
		setLoading(true)
		getAll(currentPage, `discover/tv`)
			.then(data => setSeries(newPage => [...newPage, ...data]))
			.finally(() => setLoading(false))
	}, [currentPage])

	return (
		<div className='w-full flex justify-center mt-5'>
			<div className='w-[1700px] overflow-hidden px-3 xl2:w-full md:px-2'>
				<h1 className='text-white text-4xl font-bold'>Series</h1>
				<div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mt-5'>
					{series.map(ser => (
						<MovieCard key={ser.id} {...ser} sx='resps' endpoint='movie' />
					))}
				</div>
				{isLoading && <h2 className='text-white'>Loading...</h2>}
			</div>
		</div>
	)
}
