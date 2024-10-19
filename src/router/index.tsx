import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { Home } from '../pages/home/Home'
import { MovieItem } from '../pages/movie-item/MovieItem'
import { Movies } from '../pages/movies/Movies'
import { Profile } from '../pages/profile/Profile'
import { Series } from '../pages/series/Series'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{
				path: '/movie/:id',
				element: <MovieItem />,
			},
			{
				path: '/movie',
				element: <Movies />,
			},
			{
				path: '/series',
				element: <Series />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '*',
				element: <h1>Page Not Found</h1>,
			},
		],
	},
])
