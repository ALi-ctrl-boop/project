import { Outlet } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Search } from './components/search-modal/Search'

export const App = () => {
	return (
		<div className='w-full flex items-center flex-col'>
			<Header />
			<Search />
			<main className='w-full'>
				<Outlet />
			</main>
		</div>
	)
}
