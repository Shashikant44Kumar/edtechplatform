import { createReducer } from '@reduxjs/toolkit';


export const ssoReducer = createReducer(
    {},
    {
        clientIdRequest: state => {
            state.loading = true;
        },
        clientIdSuccess: (state,action) => {
            state.loading = false;
            state.message = action.payload;
        },
        clientIdFail: (state,action) => {
            state.loading = false,
            state.message = action.payload;
        },
        identityProviderRequest: state => {
            state.loading = true;
        },
        identityProviderSuccess: (state,action) => {
            state.loading = false;
            state.message = action.payload;
        },
        identityProviderFalse: (state,action) => {
            state.loading = false,
            state.message = action.payload;
        },
        loginSsoRequest: state => {
            state.loading = true;
          },
        loginSsoSuccess: (state,action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        },
        loginSsoFail: (state,action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
    },
    
)


