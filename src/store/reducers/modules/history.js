import React from "react";
import {REMOVE_SONG_HISTORY, SET_HISTORYDATA, SET_SELECTED} from "../../types";



const initialState = {
    list: [],
    selected: [],
    filterData: '',
};

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORYDATA:
            return { ...state, list: action.list };
        case SET_SELECTED:
            return { ...state, selected: action.newSelect };
        case REMOVE_SONG_HISTORY:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        default:
            return {...state}
    }
};