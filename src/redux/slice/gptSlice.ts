import { createSlice } from "@reduxjs/toolkit";
import { getMovieSearch } from "../action/gptAction";

const initialState: any = {
    loading: false,
    moviesSearch: [],
    moviesName: [],
    searchData: [],
    error: null
}

const gptSlice = createSlice({
    name: "gpt",
    initialState,
    reducers: {
        movieSearchData: (state, action) => {
            const { moviesData, moviesName } = action.payload;
            state.moviesSearch = moviesData,
                state.moviesName = moviesName
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getMovieSearch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getMovieSearch.fulfilled, (state, action) => {
                state.loading = false,
                    state.searchData = action.payload
            })

            .addCase(getMovieSearch.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    },
})

export const { movieSearchData } = gptSlice.actions
export default gptSlice.reducer