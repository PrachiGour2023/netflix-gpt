import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
