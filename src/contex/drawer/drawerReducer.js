import {ADD_SONG, OPEN_DRAWER, SET_SELECTED, SET_SONGDATA, TOGGLE_ACTIVE, TOGGLE_EDITMODE} from "../types";


// const handlers = {
//     [TOGGLE_EDITMODE]: (state, action) => action.payload,
//     DEFAULT: state => state
// };

export const drawerReducer = (state, action) => {

    switch (action.type) {
        case TOGGLE_EDITMODE:
            return { ...state, editMode: action.payload };
        case OPEN_DRAWER:
            return { ...state, openDrawer: action.payload };
        default:
            return {
                state
            }
    }
};