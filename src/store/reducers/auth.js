import {AUTH_LOGOUT, AUTH_SUCCESS, SET_USERID} from "../types";

const initialState = {
    token: null,
    userId: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, token: action.token
            }
        case AUTH_LOGOUT:
            return {
                ...state, token: null
            }
        case SET_USERID:
            return {
                ...state, userId: action.payload
            }
        default:
            return state
    }
}