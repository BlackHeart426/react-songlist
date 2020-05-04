import {
    ADD_ATTRIBUTES,
    EDIT_ATTRIBUTES,
    REMOVE_ATTRIBUTES,
    SET_ATTRIBUTESDATA,
    SET_SELECTED_ATTRIBUTES,
} from "../../types";

const initialState = {
    list: [],
    selected: [],
    dataNotFound: false
};

export const attributesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ATTRIBUTESDATA:
            return { ...state, list: action.list, dataNotFound: action.dataNotFound };
        case ADD_ATTRIBUTES:
            return { ...state, list: Object.values(state.list).concat(action.newAttribute) };
        case SET_SELECTED_ATTRIBUTES:
            return { ...state, selected: action.newSelect };
        case REMOVE_ATTRIBUTES:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        case EDIT_ATTRIBUTES:
            return { ...state, ...state.list.forEach((item, index) => ((state.list[index].id === action.song.id) &&
                    (state.list[index].data = action.song.data) &&
                    (state.list[index].active = action.song.active)))
            };
        default:
            return  {...state}
    }
};