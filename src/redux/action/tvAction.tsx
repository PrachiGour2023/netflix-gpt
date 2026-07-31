import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "../../services/apiConfig";

export const getTodayAiredTVList = createAsyncThunk("tv/todayAiredList", async (_, thunkAPI) => {
    try {
        const response = await apiFetch(`/tv/popular?language=en-US&page=1`)
        return response.results;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue("Failed to get the aired tv show list")
    }
})