import {ADD_ROWS} from "../../types";

const handlers = {
    [ADD_ROWS]: (state, action) => action.payload,
    DEFAULT: state => state
}

export const songsReducer = (state, action) => {
    const handler = handlers[action.type]  || handlers.DEFAULT
    return handler(state, action)
}