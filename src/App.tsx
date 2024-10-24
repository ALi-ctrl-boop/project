import MouseParticles from 'react-mouse-particles'
import { Outlet } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Search } from './components/search-modal/Search'

export const App = () => {
	return (
		<div className='w-full flex items-center flex-col relative'>
			<MouseParticles g={1} num={6} color='white' cull='stats,image-wrapper' />
			<Header />
			<Search />
			<main className='w-full'>
				<Outlet />
			</main>
		</div>
	)
}
