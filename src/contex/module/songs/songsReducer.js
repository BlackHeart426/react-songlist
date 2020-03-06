import {ADD_SONG, REMOVE_SONG, SET_SEARCHTEXT, SET_SELECTED, SET_SONGDATA, TOGGLE_ACTIVE} from "../../types";

// const handlers = {
//     [SET_ROWS]: (state, action) =>  {...state, list: action.list},
//     [ADD_ROWS]: (state, action) => [...state, action.payload],
//     // [REMOVE_ROWS]: (state, action) => [...state.items.slice(0, action.payload)],
//     DEFAULT: state => state
// }
function remove(arr, ...args){
    let set = new Set(args);
    return arr.filter((v, k) => !set.has(k));
}

export const songsReducer = (state, action) => {
    // const handler = handlers[action.type]  || handlers.DEFAULT
    // return handler(state, action)
    switch (action.type) {
        case SET_SONGDATA:
            return { ...state, list: action.list };
        case SET_SEARCHTEXT:
            return { ...state, searchText: action.text };
        case TOGGLE_ACTIVE:
            return { ...state, active: action.active,  selected: [] };
        case ADD_SONG:
            return { ...state, list: [ ...state.list, action.newSong ] };
        case SET_SELECTED:
            return { ...state, selected: action.newSelect };
        case REMOVE_SONG:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        default:
            return {
               state
            }
    }
}