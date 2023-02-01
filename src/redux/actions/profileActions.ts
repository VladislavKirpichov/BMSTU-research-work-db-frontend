import { AUTH_URLS } from "../../api/configs/urls"
import { callApi } from "../../api/network"
import { ProfileAction, ProfileState } from "../reducers/profileReducer"

export const PROFILE_ACTIONS = {
    SET: 'SET_PROFILE',
    DELETE: 'DELETE_PROFILE'
}

export const setProfile = (profile: ProfileState): ProfileAction => ({
    type: PROFILE_ACTIONS.SET,
    profile
})

export const deleteProfile = (): ProfileAction => ({
    type: PROFILE_ACTIONS.DELETE,
})

const __TEMP_PROFILE__: ProfileState = {
    id: 1,
    name: "hello wortld",
    email: "helloworld@mai.com",
    authorized: true
}

export const loadProfile = (dispatch: Function) => {
    return async (id: number) => {
        const jsonResponse = await callApi.GET(`/api/user/${id.toString()}`, {})
        dispatch(setProfile(jsonResponse as ProfileState))
    }
}

export const auth = (dispatch: Function) => {
    return async () => {
        const jsonResponse: any = await callApi.GET('/api/auth', {})
        dispatch(setProfile({
            id: jsonResponse.profile.id,
            email: jsonResponse.profile.email,
            name: jsonResponse.profile.name,
            authorized: true,
        }))
    }
}

export const logout = (dispatch: Function) => {
    return () => {
        // const response = await fetch("api/logout")

        dispatch(deleteProfile());
    }
}

export const authorizeOnLoad = (dispatch: Function) => {
    return async () => {
        // const response = await fetch("http://localhost/api/auth", {
        //     method: 'POST',
        //     credentials: 'include',
        // })

        dispatch(setProfile(__TEMP_PROFILE__))
    }
}

type SignInRequest = {
    email: string;
    password: string;
}

type SignUpRequest = {
    name: string;
    email: string;
    password: string;
}

export const signIn = (dispatch: Function, navigate: Function) => {
    return async (email: string, password: string) => {
        const request: SignInRequest = {
            email,
            password,
        }

        const jsonResponse = await callApi.POST(AUTH_URLS.SIGN_IN, {
            body: JSON.stringify(request)
        })

        navigate()
    }
}

export const signUp = (dispatch: Function, navigate: Function) => {
    return async (name: string, email: string, password: string) => {
        const request: SignUpRequest = {
            name,
            email,
            password
        }

        const jsonResponse: any = await callApi.POST(AUTH_URLS.SIGN_UP, {
            body: JSON.stringify(request)
        })
        
        dispatch(
            setProfile({
                id: jsonResponse.id,
                email,
                name,
                authorized: true,
            })
        );

        navigate()
    }
}
