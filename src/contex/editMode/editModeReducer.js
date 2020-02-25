import {TOGGLE_EDITMODE} from "../types";


const handlers = {
    [TOGGLE_EDITMODE]: (state, action) => action.payload,
    DEFAULT: state => state
}

export const editModeReducer = (state, action) => {

    const handler = handlers[action.type] || handlers.DEFAULT

    return handler(state, action)
}