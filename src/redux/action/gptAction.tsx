import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "../../services/apiConfig";

export const getMovieSearch = createAsyncThunk("movie/searchData", async (title: string, thunkAPI) => {
    try {
        const response = await apiFetch(`/search/movie?query=${title}&page=1`)
        return response.results;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue("Failed to fetch the search data")
    }
})