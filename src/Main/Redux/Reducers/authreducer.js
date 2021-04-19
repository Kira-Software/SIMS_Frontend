
import {
    LOGIN_SUCCESS, LOGOUT, USER_LOADED, MAIN_LOGIN_SUCCESS,AUTH_ERROR
} from "../Action/type"


const initialstate = {
    token: localStorage.getItem("token"),
    isauthenticated: null,
    loading: true,
    user: null
};


export default function (state = initialstate, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isauthenticated: true,
                loading: false,
                user: payload
            };
        //    case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                isauthenticated: true,
                loading: false
            };

        //    case REGISTER_FAIL:
             case AUTH_ERROR:
        // case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isauthenticated: false,
                loading: false,
                user: null
            };

        case MAIN_LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                isauthenticated: true,
                loading: false
            };

        default:
            return state;
    }
}
