export type IMovies = {
	id: number
	poster_path: string
	vote_average: number
	original_title: string
	release_date: number
	vote_count: string
}

export type IMoviesInfo = {
	backdrop_path: string
	genres: {
		id: number
		name: string
	}[]
	id: number
	credits: {
		cast: {
			id: number
			name: string
		}[]
	}
	original_language: 'en'
	original_title: string
	overview: string
	release_date: string
	runtime: number
	vote_average: number
	vote_count: number
}

export type IMovieCredits = {
	cast: [
		{
			id: number
			name: string
			character: string
			profile_path: string
		}
	]
}

export type ISeries = {
	id: number
}
