import { AUTH_URLS } from "../../api/configs/urls"
import { callApi, Error } from "../../api/network"
import {  AdminAction } from "../reducers/adminReducer"

export const ADMIN_ACTIONS = {
    AUTH: "SET_ADMIN",
    LOGOUT: "DELETE_ACTION"
}

export const authAction = (): AdminAction => ({
    type: ADMIN_ACTIONS.AUTH,
})

export const logoutAction = (): AdminAction => ({
    type: ADMIN_ACTIONS.LOGOUT
})

type AuthRequestType = {
    username: string;
    password: string
}

export const signIn = (dispatch: Function, navigate: Function) => {
    return async (username: string, password: string) => {
        const request: AuthRequestType = {
            username,
            password
        }

        const response = await callApi.POST(AUTH_URLS.ADMIN_AUTH, {
            body: JSON.stringify(request)
        })

        console.log(response)

        dispatch(authAction())
    }
}

export const auth = (dispatch: Function) => {
    return async () => {
        try {
            await callApi.GET('/api/admin/auth')
            console.log('ok')
            dispatch(authAction())
        } catch (e: unknown) {
            if ((e as Error).status == 401) {
                console.info("not admin: ", e)
            }
        }
    }
}
