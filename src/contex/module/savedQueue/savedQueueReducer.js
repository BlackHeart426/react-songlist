import {
    ADD_SONG, CHANGE_POSITION,
    REMOVE_SONG,
    SET_SELECTED,
    SET_SONGDATA,
    UPDATE_SONG_QUEUE
} from "../../types";

export const savedQueueReducer = (state, action) => {
    switch (action.type) {
        case SET_SONGDATA:
            return { ...state, list: action.list };
        case SET_SELECTED:
            return { ...state, selected: action.newSelect };
        case REMOVE_SONG:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        default:
            return {               state
            }
    }
}