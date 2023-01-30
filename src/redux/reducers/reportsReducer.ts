import { REPORTS_ACTIONS } from "../actions/reportsActions";
import { Action } from "../types";

export type Report = {
    id: number;
    createdDate: string;
    updatedDate: string;
    leads: number;
}

export type ReportsState = {
    reports: Report[]
}

const initialState: ReportsState = {
    reports: []
}

export type ReportAction = {
    reports: Report
} & Action

export const reportsReducer = (state: ReportsState = initialState, action: ReportAction) => {
    switch (action.type) {
        case REPORTS_ACTIONS.ADD:
            return {...state, reports: action.reports}
        default:
            return state
    }
}
