import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "../types";


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
    return dispatch({
        type: SHOW_ALERT,
        payload: text
    })    

    setTimeout(() => {
        dispatch(hideAlert())
    },3000)
};

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}
