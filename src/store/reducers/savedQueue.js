import React from "react";
import {REMOVE_SONG_SAVEDQUEUE, SET_SAVEDQUEUEDATA, SET_SELECTED} from "../types";


const initialState = {
    list: [],
    selected: []
}

export const queueReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SAVEDQUEUEDATA:
            return { ...state, list: action.list };
        case SET_SELECTED:
            return { ...state, selected: action.newSelect };
        case REMOVE_SONG_SAVEDQUEUE:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        default:
            return {...state}
    }
};
