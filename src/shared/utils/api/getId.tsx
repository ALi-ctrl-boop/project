import axios from 'axios'
import { KEY_API } from '../../../store/movieSlice'

export const getId = async (id: string | undefined, endpoint?: string) => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}${endpoint}?api_key=${KEY_API}`
		)
		return data
	} catch (error) {
		console.error('Ошибка при получении данных:', error)
	}
}
