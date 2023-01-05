import { PROFILE_ACTIONS } from "../actions/profileActions";
import type { Action } from "../types";

export type ProfileState = {
    id: number;
    name: string;
    email: string;
    authorized: boolean
};

export type ProfileAction = ({
    profile: ProfileState
} & Action) | Action

const defaultState: ProfileState = {
    id: 0,
    name: "Vladislav",
    email: "email@mail.ru",
    authorized: true
}

export const profileReducer = (state: ProfileState = defaultState, action: ProfileAction) => {
    switch (action.type) {
        case PROFILE_ACTIONS.SET:
            return {...state, profile: action.profile}
        case PROFILE_ACTIONS.DELETE:
            return {...state, profile: defaultState}
        default:
            return state
    }
}
