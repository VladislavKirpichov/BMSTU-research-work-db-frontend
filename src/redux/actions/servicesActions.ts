import { APPLY_URL, SERVICES_ADMIN_URL, SERVICES_URL } from "../../api/configs/urls";
import { callApi } from "../../api/network";
import { Service, ServicesAction } from "../reducers/servicesReducer";

export const SERVICES_ACTIONS = {
    UPDATE: 'UPDATE_SERVICES'
}

export const updateServices = (services: Service[]): ServicesAction => ({
    type: SERVICES_ACTIONS.UPDATE,
    services,
});

type ServicesResponse = {
    services: Service[]
}

const deleteServiceHelper = (services: Service[], deleteId: number): Service[] => {
    return services.filter(service => service.id !== deleteId)
}

export const loadServices = (dispatch: Function) => {
    return async () => {
        const response: ServicesResponse = await callApi.GET(SERVICES_URL) as ServicesResponse
        console.log(response);
        dispatch(updateServices(response.services))
    }
}

type CreateServiceRequest = {
    name: string;
    description: string;
    cost: number;
}

type CreateServiceResponse = {
    id: number
}

export const createService = (dispatch: Function) => {
    return async (service: Service, getState: Function) => {
        const request: CreateServiceRequest = {
            name: service.name,
            description: service.description,
            cost: service.cost,
        }

        const response: CreateServiceResponse = await callApi.POST(SERVICES_ADMIN_URL, {
            body: JSON.stringify(request)
        }) as CreateServiceResponse

        service.id = response.id
        dispatch(updateServices([...getState().servicesStore.services, service]))
    }
}

type UpdateServiceRequest = Service;

type UpdateServiceResponse = {
    id: number
}

const editService = (services: Service[], service: Service) => {
    return services.map((currentService: Service) => {
        if (currentService.id === service.id) {
            return service
        }

        return currentService
    })
}

export const updateService = (dispatch: Function) => {
    return async (service: Service, getState: Function) => {
        const request: UpdateServiceRequest = service

        const response: UpdateServiceResponse = await callApi.PUT(SERVICES_ADMIN_URL, {
            body: JSON.stringify(request)
        }) as UpdateServiceResponse

        service.id = response.id
        dispatch(updateServices(editService(getState().servicesStore.services, service)))
    }
}

type ApplyRequest = {
    user_id: number,
    service_id: number
}

type ApplyResponse = {
    id: number
}

export const apply = async (serviceId: number, userId: number) => {
    const request: ApplyRequest = {
        user_id: userId,
        service_id: serviceId
    }
    
    const response: ApplyResponse = await callApi.POST(APPLY_URL, {
        body: JSON.stringify(request)
    }) as ApplyResponse

    return response.id
}

export const deleteService = (dispatch: Function) => {
    return async (id: number, getState: Function) => {
        const response = await callApi.DELETE(SERVICES_ADMIN_URL + id.toString())
        if (response == 200) {
            dispatch(updateServices(deleteServiceHelper(getState().servicesStore.services, id)))
        }
    }
}
