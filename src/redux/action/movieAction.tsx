import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "../../services/apiConfig";

export const fetchInTheatreMovies = createAsyncThunk("movie/fetchInTheatreMovies", async (page: number, thunkAPI) => {
    try {
        const response = await apiFetch(`/movie/now_playing?with_origin_country=IN&page=${page}`)
        return response.results;
    } catch (error) {
        return thunkAPI.rejectWithValue("Failed to fetch movies");
    }
})

export const topRatedMovies = createAsyncThunk("movie/fetchPopularMovies", async (page: number, thunkAPI) => {
    try {
        const response = await apiFetch(`/movie/top_rated?page=${page}`)
        return response.results;
    } catch (error) {
        return thunkAPI.rejectWithValue("Failed to fetch popular movies")
    }
})

export const movieGenresList = createAsyncThunk("movie/fetchGenreList", async (_, thunkAPI) => {
    try {
        const response = await apiFetch('/genre/movie/list?language=in')
        const genreMovies = await Promise.all(
            response.genres.map(async (genre: any) => {

                const res = await apiFetch(
                    `/discover/movie?with_genres=${genre.id}`
                );

                return {
                    id: genre.id,
                    name: genre.name,
                    movies: res.results
                }
            })
        );
        return genreMovies;
    } catch (error) {
        return thunkAPI.rejectWithValue("Failed to fetch genre list")
    }
})

export const getIndianMovies = createAsyncThunk("movie/fetchInMovies", async (_, thunkAPI) => {
    try {
        const response = await apiFetch(`/discover/movie?with_origin_country=IN`)
        return response.results;
    } catch (error) {
        return thunkAPI.rejectWithValue("Failed to load genre based list")
    }
})

export const getMovieVideo = createAsyncThunk("movie/fetchVideo", async (vidId: number, thunkAPI) => {
    try {
        const response = await apiFetch(`/movie/${vidId}/videos?language=en-US`)
        const filterTrailer = response.results.filter((item: any) => item.type === "Trailer")
        return filterTrailer?.length > 0 ? filterTrailer[0] : response?.results[0]
    } catch (error) {
        return thunkAPI.rejectWithValue("Failed to load movie video")
    }
})
