import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './reducers/userReducer'
import { servicesReducer } from './reducers/servicesReducer';
import { profileReducer } from './reducers/profileReducer';

export const rootReducer = combineReducers({
    usersStore: userReducer,
    servicesStore: servicesReducer,
    profileStore: profileReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
})
