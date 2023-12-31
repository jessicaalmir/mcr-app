import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'name',
    initialState: {
        status: 'checking', //non-authenticated, authenticated
        uid: null, 
        email: null,
        displayName:null,
    },
    reducers: {
        login: (state, action) =>{

        },
        logout: (state, payload) =>{

        },
        checkingCredentials: (state) =>{
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;