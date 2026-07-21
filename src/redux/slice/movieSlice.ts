import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../action/movieAction";

const initialState: any = {
    loading: false,
    movies: [],
    error: null
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true,
                    state.error = null
            })

            .addCase(fetchMovies.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false,
                    state.movies = action.payload
            })

            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    },
})

export default movieSlice.reducer;