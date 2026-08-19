import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import movieReducer from './slice/movieSlice';
import tvReducer from './slice/tvSlice';
import gptReducer from './slice/gptSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        tv: tvReducer,
        gpt: gptReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
