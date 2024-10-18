import { Category } from '../../components/category/Category'
import { Footer } from '../../components/footer/Footer'
import { Movie } from '../../components/movies/Movie'
import { Swiper } from '../../components/swiper/Swiper'

export const Home = () => {
	return (
		<div className='w-full flex items-center flex-col'>
			<Swiper />
			<Category />
			<Movie />
			<Footer />
		</div>
	)
}
