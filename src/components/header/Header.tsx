import { useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { GoSearch } from 'react-icons/go'
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { NAVIGATION_LINKS } from '../../shared/constants/data'
import { toggleModal } from '../../store/movieSlice'
import './header.css'

export const Header = () => {
	const [isActive, setActive] = useState<string>('/')
	const [isOpen, setOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()

	return (
		<header className='relative z-10 w-[1700px] flex items-center justify-between py-4 px-3 xl2:w-full'>
			<div className='flex items-center gap-9'>
				<Link to='/'>
					<img
						src='https://kinomore.netlify.app/logo.svg'
						alt='Logo'
						className='w-20 h-10'
					/>
				</Link>
				<nav
					className={`md:fixed md:z-50 top-0 left-0 md:py-24 md:px-4 md:bg-black md:bg-opacity-80 w-full h-full transition duration-300  ${
						!isOpen ? 'translate-x-[0]' : 'translate-x-[-100%]'
					}`}
				>
					<button
						onClick={() => setOpen(!isOpen)}
						className='hidden absolute top-6 right-6 outline-none z-10 md:block'
					>
						<MdOutlineClose size={35} className='text-white ' />
					</button>
					<ul className='flex gap-9 md:flex-col md:gap-5'>
						{NAVIGATION_LINKS.map((link, i) => (
							<li key={i}>
								<Link
									onClick={() => setActive(link.href)}
									to={link.href}
									className={`font-bold text-lg md:text-2xl ${
										isActive === link.href
											? 'active text-white font-bold'
											: 'text-white text-opacity-50 font-bold'
									} relative`}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className='flex items-center gap-5'>
				<button
					onClick={() =>
						dispatch(toggleModal({ modal: 'isOpenSearch', isOpen: true }))
					}
				>
					<GoSearch className='text-white opacity-50' size={25} />
				</button>
				<Link to={'/profile'}>
					<button className='flex items-center gap-2 text-white opacity-50 font-bold'>
						<FaRegCircleUser size={25} />
						Войти
					</button>
				</Link>
				<button onClick={() => setOpen(!isOpen)} className='hidden md:block'>
					<MdOutlineMenu size={25} className='text-white opacity-50' />
				</button>
			</div>
		</header>
	)
}
