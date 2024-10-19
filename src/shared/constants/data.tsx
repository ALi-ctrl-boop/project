import { ICategoryMovies, INavigation, ISwiperImage } from '../interface'

export const NAVIGATION_LINKS: INavigation[] = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Movies',
		href: '/movie',
	},
	{
		label: 'Series',
		href: '/series',
	},
]

export const SLIDER_SWIPER: ISwiperImage[] = [
	{
		url: 'https://kinomore.netlify.app/images/hero-7.jpg',
		title: 'Oppenheimer',
		rating: 8.3,
		genre: 'Story',
		year: 2023,
	},
	{
		url: 'https://kinomore.netlify.app/images/hero-2.jpg',
		title: 'Grab it',
		rating: 6.6,
		genre: 'Fantasy',
		year: 2023,
	},
	{
		url: 'https://kinomore.netlify.app/images/hero-3.jpg',
		title: 'Leave the world behind',
		rating: 6.7,
		genre: 'Fantasy',
		year: 2023,
	},
	{
		url: 'https://kinomore.netlify.app/images/hero-4.jpg',
		title: 'Gran Turismo',
		rating: 7.6,
		genre: 'Sports',
		year: 2023,
	},
	{
		url: 'https://kinomore.netlify.app/images/hero-5.jpg',
		title: 'Napoleon',
		rating: 6.5,
		genre: 'Story',
		year: 2023,
	},
	{
		url: 'https://kinomore.netlify.app/images/hero-6.jpg',
		title: 'Creator',
		rating: 6.5,
		genre: 'Drama',
		year: 2023,
	},
]

export const CATEGORY_MOVIE: ICategoryMovies[] = [
	{
		title: 'Best',
		url: '/movies/comedy',
		icon: '/svg/cup-1-svgrepo-com (1).svg',
	},
	{
		title: 'New',
		url: '/movies/comedy',
		icon: '/svg/fire-svgrepo-com.svg',
	},
	{
		title: 'Melodrama',
		url: '/movies/comedy',
		icon: '/svg/heart-svgrepo-com.svg',
	},
	{
		title: 'Horror',
		url: '/movies/comedy',
		icon: '/svg/knife-svgrepo-com.svg',
	},
	{
		title: 'Adventures',
		url: '/movies/comedy',
		icon: '/svg/map-svgrepo-com (1).svg',
	},
	{
		title: 'Fantasy',
		url: '/movies/comedy',
		icon: '/svg/rocket-2-svgrepo-com.svg',
	},
	{
		title: 'Family',
		url: '/movies/comedy',
		icon: '/svg/users-svgrepo-com.svg',
	},
	{
		title: 'Comedy',
		url: '/movies/comedy',
		icon: '/svg/smile-square-svgrepo-com.svg',
	},
	{
		title: 'Concerts',
		url: '/movies/comedy',
		icon: '/svg/music-2-svgrepo-com.svg',
	},
	{
		title: 'Military',
		url: '/movies/comedy',
		icon: '/svg/tank-war-svgrepo-com.svg',
	},
]
