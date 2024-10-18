import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IMovies } from '../types'

interface IStateType {
	popularMovies: IMovies[]
	familyMovies: IMovies[]
	newMovies: IMovies[]
	dramaMovies: IMovies[]
	sciFiMovies: IMovies[]
	sliderMovies: IMovies[]
	isOpenSearch: boolean
	isOpenMovieVideo: boolean
	isOpenMovieFilmVideo: boolean
}

const initialState: IStateType = {
	popularMovies: [],
	familyMovies: [],
	newMovies: [],
	dramaMovies: [],
	sciFiMovies: [],
	sliderMovies: [],
	isOpenSearch: false,
	isOpenMovieVideo: false,
	isOpenMovieFilmVideo: false,
}

export const KEY_API: string = '035f3efbffe9e336ca0f7bce84ce7cd9'

export const getImagesMovies = createAsyncThunk(
	'movie/getImagesMovies',
	async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/images?api_key=${KEY_API}`
		)
		console.log(data.results)
		return data.results
	}
)

export const getPopularMovies = createAsyncThunk(
	'movie/getPopularMovies',
	async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}&page=3`
		)
		console.log(data.results)
		return data.results
	}
)

export const getFamilyMovies = createAsyncThunk(
	'movie/getFamilyMovies',
	async () => {
		const { data } = await axios.get(
			` https://api.themoviedb.org/3/discover/movie?with_genres=10751&api_key=${KEY_API}`
		)
		return data.results
	}
)

export const getNewMovies = createAsyncThunk('movie/getNewMovies', async () => {
	const { data } = await axios.get(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY_API}`
	)
	return data.results
})

export const getDramaMovies = createAsyncThunk(
	'movie/getDramaMovies',
	async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY_API}&page=6`
		)
		return data.results
	}
)

export const getSciFiMovies = createAsyncThunk(
	'movie/getSciFiMovies',
	async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}&page=11`
		)
		return data.results
	}
)

const sliceMovie = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		openModalSearch: state => {
			state.isOpenSearch = true
		},
		closeModalSearch: state => {
			state.isOpenSearch = false
		},
		openModalMovieVideo: state => {
			state.isOpenMovieVideo = true
		},
		closeModalMovieVideo: state => {
			state.isOpenMovieVideo = false
		},
		openModalMovieFilmVideo: state => {
			state.isOpenMovieFilmVideo = true
		},
		closeModalMovieFilmVideo: state => {
			state.isOpenMovieFilmVideo = false
		},
	},
	extraReducers: build => {
		build
			.addCase(getPopularMovies.fulfilled, (state, action) => {
				state.popularMovies = action.payload
			})
			.addCase(getFamilyMovies.fulfilled, (state, action) => {
				state.familyMovies = action.payload
			})
			.addCase(getNewMovies.fulfilled, (state, action) => {
				state.newMovies = action.payload
			})
			.addCase(getDramaMovies.fulfilled, (state, action) => {
				state.dramaMovies = action.payload
			})
			.addCase(getSciFiMovies.fulfilled, (state, action) => {
				state.sciFiMovies = action.payload
			})
			.addCase(getImagesMovies.fulfilled, (state, action) => {
				state.sliderMovies = action.payload
			})
	},
})

export const {
	openModalSearch,
	closeModalSearch,
	openModalMovieVideo,
	closeModalMovieVideo,
	openModalMovieFilmVideo,
	closeModalMovieFilmVideo,
} = sliceMovie.actions
export default sliceMovie.reducer
