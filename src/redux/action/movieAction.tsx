import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieIds, API_KEY } from "../../utils/constant";

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async (_, thunkAPI) => {
    try {
        const result = await Promise.all(movieIds.map(async (id) => {
            const response = await fetch(`https://webservice.fanart.tv/v3.2/movies/${id}?api_key=${API_KEY}`)

            const data = await response.json();

            return {
                id: data.tmdb_id,
                name: data.name,
                movie: data.moviebackground[0].url,
                movieposter: data.movieposter[0]?.url
            }
        }))

        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue("Failed to fetch movies");
    }
})