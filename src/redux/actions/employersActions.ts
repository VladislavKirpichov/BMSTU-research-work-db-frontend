import { EMPLOYERS_URL } from "../../api/configs/urls"
import { callApi } from "../../api/network"
import { Employer, EmployersAction } from "../reducers/employersReducer"

export const EMPLOYERS_ACTIONS = {
    UPDATE: 'UPDATE_EMPLOYERS'
}

export const updateEmployers = (employers: Employer[]): EmployersAction => ({
    type: EMPLOYERS_ACTIONS.UPDATE,
    employers
})

type CreateEmployerRequest = {
    name: string
}

type CreateEmployerResponse = {
    id: number
}

type LoadEmployersResponse = {
    employers: Employer[]
}

export const loadEmployers = (dispatch: Function) => {
    return async () => {
        const response: LoadEmployersResponse = await callApi.GET(EMPLOYERS_URL) as LoadEmployersResponse
        dispatch(updateEmployers(response.employers))
    }
}

export const createEmployer = (dispatch: Function) => {
    return async (employer: Employer, getState: Function) => {
        const request: CreateEmployerRequest = {
            name: employer.name
        }

        const response: CreateEmployerResponse = await callApi.POST(EMPLOYERS_URL, {
            body: JSON.stringify(request)
        }) as CreateEmployerResponse

        employer.id = response.id
        dispatch(updateEmployers([...getState().employersStore, employer]))
    }
}

type UpdateEmployerRequest = Employer

type UpdateEmployerResponse = {
    id: number
}

const updateServiceHelper = (employers: Employer[], employer: Employer) => {
    return employers.map((current: Employer) => {
        if (current.id === employer.id) {
            return employer
        }

        return current
    })
}

export const updateEmployer = (dispatch: Function) => {
    return async (employer: Employer, getState: Function) => {
        const request: UpdateEmployerRequest = employer

        const response: UpdateEmployerResponse = await callApi.PUT(EMPLOYERS_URL, {
            body: JSON.stringify(request)
        }) as UpdateEmployerResponse

        employer.id = response.id
        dispatch(updateServiceHelper(getState().employersStore.employers, employer))
    }
}

const deleteEmployerHelper = (
    employers: Employer[],
    deleteId: number
): Employer[] =>
    employers.filter((current: Employer) => current.id !== deleteId);

export const deleteEmployer = (dispatch: Function) => {
    return async (id: number, getState: Function) => {
        const response = await callApi.DELETE(EMPLOYERS_URL + id.toString())
        if (response === 200) {
            dispatch(updateEmployers(deleteEmployerHelper(getState().employersStore.employers, id)))
        }
    }
}
