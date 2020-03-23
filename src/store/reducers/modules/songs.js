import React from "react";
import {ADD_SONG, EDIT_SONG, REMOVE_SONG, SET_SEARCHTEXT, SET_SELECTED, SET_SONGDATA, TOGGLE_ACTIVE} from "../../types";


const initialState = {
    list: [],
    selected: [],
    active: false,
    searchText: '',
};

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGDATA:
            return { ...state, list: action.list };
        case SET_SEARCHTEXT:
            return { ...state, searchText: action.text };
        case TOGGLE_ACTIVE:
            return { ...state, active: action.active,  selected: [] };
        case ADD_SONG:
            return { ...state, list: Object.values(state.list).concat(action.newSong) };
        case SET_SELECTED:
            return { ...state, selected: action.newSelect };
        case REMOVE_SONG:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        case EDIT_SONG:
            return { ...state, ...state.list.forEach((item, index) => ((state.list[index].id === action.song.id) &&
                    (state.list[index].data = action.song.data) &&
                    (state.list[index].active = action.song.active)))
            };
        default:
            return  {...state}
    }
};