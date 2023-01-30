import { ADMIN_ACTIONS } from "../actions/adminActions"
import { Action } from "../types"

export type Admin = {
    authorized: boolean
}

export type AdminState = {
    admin: Admin
}

export type AdminAction = Action

const defaultState: AdminState = {
    admin: { authorized: false },
};

export const adminReducer = (state: AdminState = defaultState, action: AdminAction): AdminState => {
    switch (action.type) {
        case ADMIN_ACTIONS.AUTH: {
            return { admin: { authorized: true } };
        }
        case ADMIN_ACTIONS.LOGOUT: {
            return { admin: {authorized: false } };
        }
        default:
            return state;
    }
}
