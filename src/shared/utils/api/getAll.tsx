import axios from 'axios'
import { KEY_API } from '../../../store/movieSlice'

export const getAll = async (page: number, endpoint?: string) => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/${endpoint}?api_key=${KEY_API}&page=${page}`
		)
		return data.results
	} catch (error) {
		console.error('Ошибка при получении данных:', error)
	}
}
