import { SERVER_URL } from "./configs/urls";

type GetRequestInit = {
    headers?: HeadersInit;
}

type PostRequestInit = {
    headers?: HeadersInit
    body?: BodyInit
}

type PutRequestInit = {
    headers?: HeadersInit
    body?: BodyInit
}

type DeleteRequestInit = {
    headers?: HeadersInit;
}

export type Error = {
    status: number;
    message: any;
}

type Api = {
    GET: (
        url: string,
        requestFields?: GetRequestInit,
        apiUrl?: string
    ) => Promise<unknown>;
    POST: (
        url: string,
        requestFields?: PostRequestInit,
        apiUrl?: string
    ) => Promise<unknown>;
    PUT: (
        url: string,
        requestFields?: PutRequestInit,
        apiUrl?: string
    ) => Promise<unknown>;
    DELETE: (
        url: string,
        requestFields?: DeleteRequestInit,
        apiUrl?: string
    ) => Promise<unknown>;
};

const HEADERS = {
    GET: {
        method: 'GET',
        credentials: 'include',
    } as RequestInit,
    POST: {
        method: 'POST',
        credentials: 'include',
    } as RequestInit,
    PUT: {
        method: 'PUT',
        credentials: 'include',
    } as RequestInit,
    DELETE: {
        method: 'DELETE',
        credentials: 'include'
    } as RequestInit
}

// TODO: refactor
export const callApi: Api = {
    GET: async (url: string, requestFields: GetRequestInit = {}, apiUrl: string = SERVER_URL) => {
        const response = await fetch(apiUrl + url, {...HEADERS.GET, ...requestFields})

        if (response.status >= 400) {
            throw {
                status: response.status,
                // message: await response.json()
            } as Error
        }

        try {
            return await response.json()
        } catch (e) {
            return
        }
    },
    POST: async (url: string, requestFields: PostRequestInit = {}, apiUrl: string = SERVER_URL) => {
        const response = await fetch(apiUrl + url, {
            method: 'POST',
            credentials: 'include',
            ...requestFields
        })
        console.log({...HEADERS.POST, ...requestFields})
        if (!response.ok) {
            throw {
                status: response.status,
                // message: await response.json()
            } as Error
        }

        try {
            return await response.json()
        } catch (e) {
            return await response
        }
    },
    PUT: async (url: string, requestFields: PutRequestInit = {}, apiUrl: string = SERVER_URL) => {
        const response = await fetch(apiUrl + url, {...HEADERS.PUT, ...requestFields})
        
        if (response.status >= 400) {
            throw {
                status: response.status,
                // message: await response.json()
            } as Error
        }
        
        try {
            return await response.json()
        } catch (e) {
            return await response
        }
    },
    DELETE: async (url: string, requestFields: DeleteRequestInit = {}, apiUrl: string = SERVER_URL) => {
        const response = await fetch(apiUrl + url, {...HEADERS.DELETE, ...requestFields})
        
        if (response.status >= 400) {
            throw {
                status: response.status,
                // message: await response.json()
            } as Error
        }
        
        try {
            return await response.json()
        } catch (e) {
            return await response
        }
    },
}
