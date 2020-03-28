import {
    ADD_SONG_IN_QUEUE,
    CHANGE_POSITION,
    REMOVE_SONG_IN_QUEUE,
    SET_QUEUEDATA,
    SET_SELECTED_QUEUE,
    UPDATE_SONG_QUEUE
} from "../../types";

const initialState = {
    list: [],
    selected: []
}

export const queueReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUEUEDATA:
            return { ...state, list: action.list };
        case CHANGE_POSITION:
            return { ...state, list: moveArrayItemToNewIndex(
                    state.list,
                    state.list.findIndex(item => item.id === action.position),
                    state.list.findIndex(item => item.id === action.position)-1
                )};
        case ADD_SONG_IN_QUEUE:
            return { ...state, list: [ ...state.list, action.newSong ] };
        case SET_SELECTED_QUEUE:
            return { ...state, selected: action.newSelect };
        case REMOVE_SONG_IN_QUEUE:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        case UPDATE_SONG_QUEUE:
            return { ...state, ...state.list.forEach((item, index) => ((state.list[index].id === action.song.id) &&
                    (state.list[index].data = action.song.data) &&
                    (state.list[index].active = action.song.active)))
            };
        default:
            return {...state}
    }
};

export const moveArrayItemToNewIndex = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};