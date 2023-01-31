import { SERVICES_ACTIONS } from "../actions/servicesActions"
import { Action } from "../types"

export type Service = {
    id: number,
    name: string,
    cost: number,
    description: string,
}

export type ServicesState = {
    services: Service[]
}

export type ServicesAction = {
    services: Service[]
} & Action

const initialState: ServicesState = {
    services: []
}

export const servicesReducer = (state: ServicesState = initialState, action: ServicesAction) => {
    switch (action.type) {
        case SERVICES_ACTIONS.UPDATE:
            return { ...state, services: action.services };
        default:
            return state;
    }
}
