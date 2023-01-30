import type { Action } from "../types";
import type { User } from '../reducers/userReducer';
import { callApi } from "../../api/network";
import { AUTH_URLS, USER_URLS } from "../../api/configs/urls";

export const USER_ACTIONS = {
    ADD_USER: 'ADD_USER',
    ADD_USERS: 'ADD_USERS',
};

export const addUser = (user: User): Action => ({
    type: USER_ACTIONS.ADD_USER,
    user,
});

export const addUsers = (users: User[]): Action => ({
    type: USER_ACTIONS.ADD_USERS,
    users,
});

type LoadUsersResponse = {
    Users: User[]
}

export const loadUsers = (dispatch: Function) => {
    return async () => {
        const jsonResponse: LoadUsersResponse = await callApi.GET(USER_URLS.GET_ALL) as LoadUsersResponse
        dispatch(addUsers(jsonResponse.Users));
    };
}
