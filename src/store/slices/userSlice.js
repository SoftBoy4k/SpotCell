import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    email: null,
    token: null,
    name: null,
    lastName: null,
    phone: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.lastName = action.payload.lastName;
            state.phone = action.payload.phone;
        },
        removeUser(state) {
            state.id = null;
            state.email = null;
            state.token = null;
            state.name = null;
            state.lastName = null;
            state.phone = null;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;