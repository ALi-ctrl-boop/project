import { ICategoryMovies, INavigation, ISwiperImage } from '../interface'

export const NAVIGATION_LINKS: INavigation[] = [
	{
		label: 'Главная',
		href: '/',
	},
	{
		label: 'Фильмы',
		href: '/movie',
	},
	{
		label: 'Сериалы',
		href: '/series',
	},
]

export const SLIDER_SWIPER: ISwiperImage[] = [
	{
		url: 'https://kinomore.netlify.app/images/hero-7.jpg',
		title: 'Вонка',
		rating: 7.4,
		genre: 'Семейный',
		year: 2023,
	},
	{
		url: '	https://kinomore.netlify.app/images/hero-1.jpg',
		title: 'Вонка',
		rating: 7.4,
		genre: 'Семейный',
		year: 2023,
	},
	{
		url: '	https://kinomore.netlify.app/images/hero-2.jpg',
		title: 'Вонка',
		rating: 7.4,
		genre: 'Семейный',
		year: 2023,
	},
	{
		url: '	https://kinomore.netlify.app/images/hero-6.jpg',
		title: 'Вонка',
		rating: 7.4,
		genre: 'Семейный',
		year: 2023,
	},
	{
		url: 'https://kinomore.netlify.app/images/hero-7.jpg',
		title: 'Вонка',
		rating: 7.4,
		genre: 'Семейный',
		year: 2023,
	},
	{
		url: 'https://kinomore.netlify.app/images/hero-5.jpg',
		title: 'Вонка',
		rating: 7.4,
		genre: 'Семейный',
		year: 2023,
	},
]

export const CATEGORY_MOVIE: ICategoryMovies[] = [
	{
		title: 'Лучшие',
		url: '/movies/comedy',
		icon: '/public/svg/cup-1-svgrepo-com (1).svg',
	},
	{
		title: 'Новые',
		url: '/movies/comedy',
		icon: '/public/svg/fire-svgrepo-com.svg',
	},
	{
		title: 'Мелодраммы',
		url: '/movies/comedy',
		icon: '/public/svg/heart-svgrepo-com.svg',
	},
	{
		title: 'Ужасы',
		url: '/movies/comedy',
		icon: '/public/svg/knife-svgrepo-com.svg',
	},
	{
		title: 'Приключения',
		url: '/movies/comedy',
		icon: '/public/svg/map-svgrepo-com (1).svg',
	},
	{
		title: 'Фантастика',
		url: '/movies/comedy',
		icon: '/public/svg/rocket-2-svgrepo-com.svg',
	},
	{
		title: 'Семейные',
		url: '/movies/comedy',
		icon: '/public/svg/users-svgrepo-com.svg',
	},
	{
		title: 'Комедии',
		url: '/movies/comedy',
		icon: '/public/svg/smile-square-svgrepo-com.svg',
	},
	{
		title: 'Концерты',
		url: '/movies/comedy',
		icon: '/public/svg/music-2-svgrepo-com.svg',
	},
	{
		title: 'Военные',
		url: '/movies/comedy',
		icon: '/public/svg/tank-war-svgrepo-com.svg',
	},
]
