import {HIDE_ALERT, HIDE_LOADER, OPEN_DRAWER, SHOW_ALERT, SHOW_LOADER, TOGGLE_EDITMODE} from "../types";


const initialState = {
    loading: false,
    alert: null,
    editMode: true,
    openDrawer: false
};

export const appReducer = (state  = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        case SHOW_ALERT:
            return {...state, alert: action.payload};
        case HIDE_ALERT:
            return {...state, alert: null};
        case TOGGLE_EDITMODE:
            return { ...state, editMode: action.payload };
        case OPEN_DRAWER:
            return { ...state, openDrawer: action.payload };
        default: return state
    }
}