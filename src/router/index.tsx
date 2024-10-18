import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { Home } from '../pages/home/Home'
import { MovieItem } from '../pages/movie-item/MovieItem'
import { Movies } from '../pages/movies/Movies'
import { Profile } from '../pages/profile/Profile'

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
				element: (
					<div
						style={{
							width: '100%',
							height: '50vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<h1 style={{ color: 'white', fontSize: '32px' }}>Сериалов нет</h1>
					</div>
				),
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
