import {
    ADD_SONG, CHANGE_POSITION,
    REMOVE_SONG,
    SET_SELECTED,
    SET_SONGDATA,
    UPDATE_SONG_QUEUE
} from "../../types";

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

const changePosition = (arr, position, newPosition) => {
    const uuid = position;
    console.log('arr', arr)
    const selected = arr.find(item => item.id === position)
    console.log('arr', selected)
    //
    // const positionInArr =  selected.data.position;
    // return (
    //     moveArrayItemToNewIndex(arr, positionInArr-1, positionInArr)
    // )
}

export const queueReducer = (state, action) => {
    switch (action.type) {
        case SET_SONGDATA:
            return { ...state, list: action.list };
        case CHANGE_POSITION:
            return { ...state, list: moveArrayItemToNewIndex(
                state.list,
                state.list.findIndex(item => item.id === action.position),
                state.list.findIndex(item => item.id === action.position)-1
            )};
            // return { ...state, list: changePosition(state.list, action.position)};
        case ADD_SONG:
            return { ...state, list: [ ...state.list, action.newSong ] };
        case SET_SELECTED:
            return { ...state, selected: action.newSelect };
        case REMOVE_SONG:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        case UPDATE_SONG_QUEUE:
            return { ...state, ...state.list.forEach((item, index) => ((state.list[index].id === action.song.id) &&
                    (state.list[index].data = action.song.data) &&
                    (state.list[index].active = action.song.active)))
            };
        default:
            return {
               state
            }
    }
}