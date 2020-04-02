import {
    ADD_SONG,
    EDIT_SONG, EDIT_SONGS_TIMESPLAYED,
    REMOVE_SONG, SET_FILTER_SONG,
    SET_SEARCHTEXT,
    SET_SELECTED_SONG,
    SET_SONGDATA,
    TOGGLE_ACTIVE
} from "../../types";


const initialState = {
    list: [],
    selected: [],
    active: false,
    searchText: '',
    filterAttributes: [],
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
        case SET_FILTER_SONG:
            return { ...state, filterAttributes: action.newAttribute };
        case SET_SELECTED_SONG:
            return { ...state, selected: action.newSelect };
        case REMOVE_SONG:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        case EDIT_SONG:
            return { ...state, ...state.list.forEach((item, index) => ((state.list[index].id === action.song.id) &&
                    (state.list[index].data = action.song.data) &&
                    (state.list[index].active = action.song.active)))
            };
        case EDIT_SONGS_TIMESPLAYED:
            return { ...state, ...state.list.forEach(item => {
                debugger
                item.id === action.data.id && (item.data.timesPlayed = action.data.timesPlayed)
            })
            };
        default:
            return  {...state}
    }
};