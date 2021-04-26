import {
    AuthPending,
    AuthSuccess,
    AuthFailed,
    LoginPending,
    LoginFailed,
    LoginSuccess,
    RegisterAccountPending,
    RegisterAccountSuccess,
    RegisterAccountFailed,
    Logout
} from "../actions/authAction/authActionType";

export const initAuthState = {
    pending: false,
    error: null,
    accessToken: "" || localStorage.getItem('token_access'),
    auth: null,
    expire: "",
};

export function authReducer(state = initAuthState, action) {
    const { type, payload } = action;
    switch (type) {
        // Authentication
        case AuthPending:
            return {
                ...state,
                pending: true,
            };
        case AuthFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case AuthSuccess:
            return {
                ...state,
                error: {},
                pending: false,
                auth: payload,
            };
        case LoginPending:
            return {
                ...state,
                pending: true,
            };
        case LoginSuccess:
            return {
                ...state,
                error: {},
                pending: false,
                accessToken: payload,
            };
        case LoginFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        //register account
        case RegisterAccountPending:
            return {
                ...state,
                pending: true,
            };
        case RegisterAccountSuccess:
            return {
                ...state,
                error: {},
                pending: false,
            };
        case RegisterAccountFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        //logout
        case Logout:
            localStorage.removeItem('token_access');
            return {
                ...state,
                accessToken: '',
                auth: {}
            };
        default:
            return state;
    }
}
