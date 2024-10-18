import { ActorsCreators } from '../../components/actors-creators/ActorsCreators'
import { DescriptionTabs } from '../../components/description-tabs/DescriptionTabs'
import { MovieInfo } from '../../components/movie-item/MovieInfo'
import { MovieVideo } from '../../components/movie-videos/MovieVideo'

export const MovieItem = () => {
	return (
		<div className='w-full flex flex-col items-center'>
			<MovieVideo />
			<div className='relative w-full'>
				<MovieInfo />
			</div>
			<DescriptionTabs />
			<ActorsCreators />
		</div>
	)
}
