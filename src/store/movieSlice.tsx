import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { IMovies } from '../types'

type ModalKeys = 'isOpenSearch' | 'isOpenMovieVideo' | 'isOpenMovieFilmVideo';

interface IStateType {
	movies: {
		popularMovies: IMovies[]
		familyMovies: IMovies[]
		newMovies: IMovies[]
		dramaMovies: IMovies[]
		sciFiMovies: IMovies[]
		sliderMovies: IMovies[][]
	}
	isOpenSearch: boolean
	isOpenMovieVideo: boolean
	isOpenMovieFilmVideo: boolean
	isLoading: boolean
	error: null | string
}

const initialState: IStateType = {
	movies: {
		popularMovies: [],
		familyMovies: [],
		newMovies: [],
		dramaMovies: [],
		sciFiMovies: [],
		sliderMovies: [],
	},
	isOpenSearch: false,
	isOpenMovieVideo: false,
	isOpenMovieFilmVideo: false,
	isLoading: false,
	error: null,
}

export const KEY_API: string = '035f3efbffe9e336ca0f7bce84ce7cd9'

export const getAllMovies = createAsyncThunk(
	'movie/getAllMovies',
	async (endpoints: string, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(
				`https://api.themoviedb.org/3/${endpoints}?api_key=${KEY_API}&page=8`
			)
			return { results: data.results, category: endpoints }
		} catch (err) {
			if (err instanceof Error) return rejectWithValue(err.message)
			return rejectWithValue('Unknown error occurred')
		}
	}
)

const sliceMovie = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		toggleModal: (
			state,
			action: PayloadAction<{
				modal: ModalKeys
				isOpen: boolean
			}>
		) => {
			const { modal, isOpen } = action.payload
			state[modal] = isOpen
		},
	},
	extraReducers: builder => {
		builder.addCase(getAllMovies.fulfilled, (state, action) => {
			const category = action.payload.category
			switch (category) {
				case 'movie/popular':
					state.movies.popularMovies = action.payload.results
					break
				case 'discover/tv':
					state.movies.familyMovies = action.payload.results
					break
				case 'movie/top_rated':
					state.movies.newMovies = action.payload.results
					break
				case 'movie/upcoming':
					state.movies.dramaMovies = action.payload.results
					break
				case 'movie/now_playing':
					state.movies.sciFiMovies = action.payload.results
					break
				default:
					break
			}
		})
		builder.addCase(getAllMovies.pending, state => {
			state.isLoading = true
			state.error = null
		})
		builder.addCase(getAllMovies.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message =
				'Invalid response from server for movie'
		})
	},
})

export const { toggleModal } = sliceMovie.actions
export default sliceMovie.reducer
