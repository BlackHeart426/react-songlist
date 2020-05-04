import {
    ADD_SONG_IN_HISTORY,
    REMOVE_SONG_HISTORY, SET_FILTER_HISTORY, SET_FILTER_SONG,
    SET_HISTORYDATA, SET_SEARCHTEXT_HISTORY,
    SET_SELECTED_HISTORY
} from "../../types";



const initialState = {
    list: [],
    selected: [],
    searchText: '',
    filterData: ["stream"],
    dataNotFound: false
};

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORYDATA:
            return { ...state, list: action.list, dataNotFound: action.dataNotFound };
        case ADD_SONG_IN_HISTORY:
            return { ...state, list: [action.newSong, ...state.list] };
            // return { ...state, list: Object.values(state.list).unshift(action.newSong) };
        case SET_SELECTED_HISTORY:
            return { ...state, selected: action.newSelect };
        case SET_FILTER_HISTORY:
            return { ...state, filterData: action.newAttribute };
        case SET_SEARCHTEXT_HISTORY:
            return { ...state, searchText: action.text };
        case REMOVE_SONG_HISTORY:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        default:
            return {...state}
    }
};