import { USER_ACTIONS } from "../actions/userActions";
import { Action } from "../types";

export type User = {
    id: number
    name: string
}

export type UserState = {
    users: User[];
};

export type UserAction = {
    user: User
} & {users: User[]} & Action

const defaultState = {
    users: []
}

export const userReducer = (state: UserState = defaultState, action: UserAction) => {
    switch (action.type) {
        case USER_ACTIONS.ADD_USERS:
            return { users: action.users };
        default:
            return state;
    }
}
