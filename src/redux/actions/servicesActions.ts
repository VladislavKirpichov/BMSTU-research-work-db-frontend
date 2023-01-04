import { Service, ServicesAction } from "../reducers/servicesReducer";

export const SERVICES_ACTIONS = {
    UPDATE: 'UPDATE_SERVICES'
}

export const updateServices = (services: Service[]): ServicesAction => ({
    type: SERVICES_ACTIONS.UPDATE,
    services,
});

export const loadServices = (dispatch: Function) => {
    return async () => {
        fetch('services.json').then((response) =>
            response.json().then((json) => dispatch(updateServices(json)))
        );
    }
}
