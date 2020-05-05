import {
    SET_CURRENT_USER,
} from "../types";


export const setCurrentUserActionCreator = (state) => {
    return {
        type: SET_CURRENT_USER,
        payload: state
    }
};


