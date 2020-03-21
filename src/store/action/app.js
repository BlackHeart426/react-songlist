import {HIDE_ALERT, HIDE_LOADER, OPEN_DRAWER, SHOW_ALERT, SHOW_LOADER, TOGGLE_EDITMODE} from "../types";


export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
};

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
};

export const showAlert = text => {
    // return {
    //     type: SHOW_ALERT,
    //     payload: text
    // }
    return dispatch => {
        console.log('vvvvvvvvvv')
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
};

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
};

export const toggleEditModeActionCreator = (status) => {
    return {
        type: TOGGLE_EDITMODE,
        payload: status
    }
};

export const toggleOpenDrawerActionCreator = (status) => {
    return {
        type: OPEN_DRAWER,
        payload: status
    }
};
