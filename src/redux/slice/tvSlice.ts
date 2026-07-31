import { createSlice } from "@reduxjs/toolkit";
import { getTodayAiredTVList } from "../action/tvAction";

const initialState: any = {
    loading: false,
    currentAirList: [],
    error: null
}

const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getTodayAiredTVList.pending, (state) => {
            state.loading = true
        })

        .addCase(getTodayAiredTVList.fulfilled, (state, action) => {
            state.loading = false,
            state.currentAirList = action.payload
        })

        .addCase(getTodayAiredTVList.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
    },
})

export default tvSlice.reducer;
