import {ADD_SONG, REMOVE_ROWS, SET_SELECTED, SET_SONGDATA, TOGGLE_ACTIVE} from "../../types";

// const handlers = {
//     [SET_ROWS]: (state, action) =>  {...state, list: action.list},
//     [ADD_ROWS]: (state, action) => [...state, action.payload],
//     // [REMOVE_ROWS]: (state, action) => [...state.items.slice(0, action.payload)],
//     DEFAULT: state => state
// }

export const songsReducer = (state, action) => {
    // const handler = handlers[action.type]  || handlers.DEFAULT
    // return handler(state, action)
    switch (action.type) {
        case SET_SONGDATA:
            return { ...state, list: action.list };
        case TOGGLE_ACTIVE:
            return { ...state, active: action.active,  selected: [] };
        case ADD_SONG:
            return { ...state, list: [ ...state.list, action.newSong ] };
        case SET_SELECTED:
            return { ...state, selected: action.newSelect };
        default:
            return {
               state
            }
    }
}