import type { Action } from "../types";
import type { User } from '../reducers/userReducer';

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

export const loadUsers = (dispatch: Function) => {
    return async () => {
        fetch('users.json').then((body) =>
            body.json().then((data: User[]) => dispatch(addUsers(data)))
        );
    };
}
