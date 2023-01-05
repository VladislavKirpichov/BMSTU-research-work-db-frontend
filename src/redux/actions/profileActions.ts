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
    return async () => {
        // const response = fetch()

        dispatch(setProfile(__TEMP_PROFILE__))
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
