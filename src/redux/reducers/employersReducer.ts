import { EMPLOYERS_ACTIONS } from "../actions/employersActions"
import { Action } from "../types"

export type Employer = {
    id: number;
    name: string;
};

export type EmployersState = {
    employers: Employer[]
}

export type EmployersAction = {
    employers: Employer[]
} & Action

const initialState: EmployersState = {
    employers: []
}

export const employersReducer = (state: EmployersState = initialState, action: EmployersAction): EmployersState => {
    switch (action.type) {
        case EMPLOYERS_ACTIONS.UPDATE:
            return { ...state, employers: action.employers }
        default:
            return state
    }
}
