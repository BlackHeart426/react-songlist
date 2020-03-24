import React from "react";
import {
    ADD_SONG_IN_QUEUE,
    ADD_SONG_IN_SAVEDQUEUE,
    REMOVE_SONG_SAVEDQUEUE,
    SET_SAVEDQUEUEDATA,
    SET_SELECTED, SET_SELECTED_SAVEDQUEUE
} from "../../types";


const initialState = {
    list: [],
    selected: [],
    searchText: '',

}

export const savedQueueReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SAVEDQUEUEDATA:
            return { ...state, list: action.list };
        case SET_SELECTED_SAVEDQUEUE:
            return { ...state, selected: action.newSelect };
        case ADD_SONG_IN_SAVEDQUEUE:
            return { ...state, list: [ ...state.list, action.newSong ] };
        case REMOVE_SONG_SAVEDQUEUE:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        default:
            return {...state}
    }
};
