import { LEAD_ACTIONS } from "../actions/leadsActions"
import { Action } from "../types"

export type Lead = {
    id: number,
    userId: number,
    name: string,
    email: string,
    serviceId: number,
    service: string
}

export type LeadState = {
    leads: Lead[]
}

const initialState: LeadState = {
    leads: []
}

export type LeadAction = {
    leads: Lead[]
} & Action

export const leadsReducer = (state: LeadState = initialState, action: LeadAction) => {
    switch (action.type) {
        case LEAD_ACTIONS.SET:
            return {...state, leads: action.leads }
        default:
            return state
    }
}
