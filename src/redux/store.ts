import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import movieReducer from './slice/movieSlice';
import tvReducer from './slice/tvSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        tv: tvReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
