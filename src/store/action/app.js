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
    return {
        type: SHOW_ALERT,
        payload: text
    }
};

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}
