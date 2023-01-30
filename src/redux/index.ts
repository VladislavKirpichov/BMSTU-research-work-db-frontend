import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './reducers/userReducer'
import { servicesReducer } from './reducers/servicesReducer';
import { profileReducer } from './reducers/profileReducer';
import { adminReducer } from './reducers/adminReducer';
import { employersReducer } from './reducers/employersReducer';
import { leadsReducer } from './reducers/leadsReducer';
import { reportsReducer } from './reducers/reportsReducer';

export const rootReducer = combineReducers({
    usersStore: userReducer,
    servicesStore: servicesReducer,
    profileStore: profileReducer,
    adminStore: adminReducer,
    employersStore: employersReducer,
    leadsStore: leadsReducer,
    reportsStore: reportsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
})
