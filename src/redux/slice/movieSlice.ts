import { createSlice } from "@reduxjs/toolkit";
import { fetchInTheatreMovies, getIndianMovies, getMovieVideo, movieGenresList, topRatedMovies } from "../action/movieAction";

const initialState: any = {
    loading: false,
    moviesInTheatre: [],
    moviesTopRated: [],
    movieGenreList: [],
    indianMovies: [],
    movieVideo: [],
    error: null
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchInTheatreMovies.pending, (state) => {
                state.loading = true,
                    state.error = null
            })

            .addCase(fetchInTheatreMovies.fulfilled, (state, action) => {
                state.loading = false,
                    state.moviesInTheatre = action.payload
            })

            .addCase(fetchInTheatreMovies.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })

            .addCase(topRatedMovies.pending, (state) => {
                state.loading = true,
                    state.error = null
            })

            .addCase(topRatedMovies.fulfilled, (state, action) => {
                state.loading = false,
                    state.moviesTopRated = action.payload
            })

            .addCase(topRatedMovies.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })

            .addCase(movieGenresList.pending, (state) => {
                state.loading = true,
                    state.error = null
            })

            .addCase(movieGenresList.fulfilled, (state, action) => {
                state.loading = false,
                    state.movieGenreList = action.payload
            })

            .addCase(movieGenresList.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })

            .addCase(getIndianMovies.pending, (state) => {
                state.loading = true
            })

            .addCase(getIndianMovies.fulfilled, (state, action) => {
                state.loading = false,
                    state.indianMovies = action.payload
            })

            .addCase(getIndianMovies.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })

            .addCase(getMovieVideo.pending, (state) => {
                state.loading = true
            })

            .addCase(getMovieVideo.fulfilled, (state, action) => {
                state.loading = false,
                    state.movieVideo = action.payload
            })

            .addCase(getMovieVideo.rejected, (state, action) => {
                state.laoding = false,
                    state.error = action.payload
            })
    },
})

export default movieSlice.reducer;