import {
    SET_CURRENT_USER,
} from "../types";


const initialState = {
    currentUserId: false,
};

export const currentUserReducer = (state  = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {...state, currentUserId: action.payload};
        default: return state
    }
}