import { REPORTS_URL, SERVER_URL } from "../../api/configs/urls"
import { callApi } from "../../api/network"
import { Report, ReportAction } from "../reducers/reportsReducer"

export const REPORTS_ACTIONS = {
    ADD: 'REPORTS_ACTIONS',
}

export const addReports = (reports: Report): ReportAction => ({
    type: REPORTS_ACTIONS.ADD,
    reports,
})

type LoadReportsResponse = {
    reports: Report[],
}

export const load = (dispatch: any) => {
    return async () => {
        const response: LoadReportsResponse = await callApi.GET(REPORTS_URL) as LoadReportsResponse
        console.log(response)
        dispatch(addReports(response.reports))
    }
}

export const generateReport = async () => {
    return await callApi.POST(REPORTS_URL)
}
