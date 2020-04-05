import {HIDE_ALERT, HIDE_LOADER, IS_LOGIN, OPEN_DRAWER, SHOW_ALERT, SHOW_LOADER, TOGGLE_EDITMODE} from "../types";
import {getSongDataActionCreator, setSelectedActionCreator} from "./modules/songs";
import {getQueueDataActionCreator} from "./modules/queue";
import {getSavedQueueDataActionCreator} from "./modules/savedQueue";
import {getHistoryDataActionCreator} from "./modules/history";
import {getAttributesDataActionCreator} from "./modules/attributes";

export const getAllDataActionCreator = () => async dispatch => {
    dispatch(showLoader())
    await dispatch(getSongDataActionCreator())
    await dispatch(getQueueDataActionCreator())
    await dispatch(getSavedQueueDataActionCreator())
    await dispatch(getHistoryDataActionCreator())
    await dispatch(getAttributesDataActionCreator())
    await dispatch(hideLoader())
}

export const isLoginActionCreator = (state) => {
    return {
        type: IS_LOGIN,
        payload: state
    }
};

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

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}



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
