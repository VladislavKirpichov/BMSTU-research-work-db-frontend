export const SERVER_URL = "http://localhost:8080"
export const FRONTEND_URL = "http://localhost:8000"

export const ADMIN_URL = '/api/admin'

export const AUTH_URLS = {
    SIGN_IN: '/api/auth/signin',
    SIGN_UP: '/api/auth/signup',
    ADMIN_AUTH: ADMIN_URL + '/signin'
}

export const USER_URLS = {
    GET_ALL: ADMIN_URL + '/users',
}

export const SERVICES_ADMIN_URL = ADMIN_URL + '/services/'
export const SERVICES_URL = '/api/services/'

export const APPLY_URL = '/api/apply'

export const EMPLOYERS_URL = ADMIN_URL + '/employers/'

export const LEADS_URL = ADMIN_URL + '/applies/'

export const REPORTS_URL = ADMIN_URL + '/reports/'
