import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid: "",
    displayName: "",
    email: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (_, action) => {
            return action.payload;
        },
        removeUser: () => initialState,
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;