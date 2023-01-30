import { LEADS_URL } from "../../api/configs/urls"
import { callApi } from "../../api/network"
import { Lead } from "../reducers/leadsReducer"

export const LEAD_ACTIONS = {
    SET: 'LEAD_ACTIONS_SET'
}

export const setLeads = (leads: any) => ({
    type: LEAD_ACTIONS.SET,
    leads,
})

type LoadLeadsResponse = {
    applies: Lead[]
}

export const loadLeads = (dispatch: any) => {
    return async () => {
        const response: LoadLeadsResponse = await callApi.GET(LEADS_URL) as LoadLeadsResponse
        // console.log(response)
        dispatch(setLeads(response.applies))
    }
}
