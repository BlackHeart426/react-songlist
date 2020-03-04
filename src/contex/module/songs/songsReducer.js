import {ADD_ROWS, REMOVE_ROWS, SET_ROWS, TOGGLE_ACTIVE} from "../../types";

// const handlers = {
//     [SET_ROWS]: (state, action) =>  action.payload,
//     [ADD_ROWS]: (state, action) => [...state, action.payload],
//     // [REMOVE_ROWS]: (state, action) => [...state.items.slice(0, action.payload)],
//     DEFAULT: state => state
// }

export const songsReducer = (state, action) => {
    // const handler = handlers[action.type]  || handlers.DEFAULT
    // return handler(state, action)
    switch (action.type) {
        case SET_ROWS:
            return {...state, list: action.list}
        case TOGGLE_ACTIVE:
            return {...state, active: action.active}
        case ADD_ROWS:
            return {
                state: {...state, list: action.list}
            };
        default:
            return {
                state: state
            }
    }
}