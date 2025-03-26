import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
        loggedIn: false,
    },
    error: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signup: (state, action) => {
            console.log("Received payload:", action);
            localStorage.setItem("email", action.payload.email);
            localStorage.setItem("password", action.payload.password);
            localStorage.setItem("name", action.payload.name);
            localStorage.setItem("loggedIn", action.payload.loggedIn);
            state.user = action.payload;
        },
        login: (state, action) => {
            console.log(action);
            if((action.payload.email === state.user.email && action.payload.password === state.user.password)|| (action.payload.email === localStorage.getItem('email') && action.payload.password === localStorage.getItem('password'))) {
                localStorage.setItem("loggedIn", true);
                state.user.loggedIn = true;
                state.error = false;
            }
            else{
                state.error = true;
            }
        },
        logout: (state) => {
            localStorage.setItem("loggedIn", false);
            state.user.loggedIn = false;
        },
        deleteUser: (state) => {
            localStorage.clear();
            state.user = initialState.user;
        },
    },
});

export const { signup, login, logout, deleteUser } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const authSelector = (state) => state.authReducer;


