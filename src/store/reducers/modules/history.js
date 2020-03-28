import {
    ADD_SONG_IN_HISTORY,
    REMOVE_SONG_HISTORY,
    SET_HISTORYDATA, SET_SEARCHTEXT_HISTORY,
    SET_SELECTED_HISTORY
} from "../../types";



const initialState = {
    list: [],
    selected: [],
    searchText: '',
    filterData: '',
};

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORYDATA:
            return { ...state, list: action.list };
        case ADD_SONG_IN_HISTORY:
            return { ...state, list: Object.values(state.list).concat(action.newSong) };
        case SET_SELECTED_HISTORY:
            return { ...state, selected: action.newSelect };
        case SET_SEARCHTEXT_HISTORY:
            return { ...state, searchText: action.text };
        case REMOVE_SONG_HISTORY:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        default:
            return {...state}
    }
};