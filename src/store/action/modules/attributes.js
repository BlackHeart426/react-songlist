import * as AttributesAPI from "../../../API/AttributesAPI";
import {hideLoader, showAlert, showLoader} from "../app";
import {
    ADD_ATTRIBUTES,
    EDIT_ATTRIBUTES,
    REMOVE_ATTRIBUTES,
    SET_ATTRIBUTESDATA,
    SET_SELECTED_ATTRIBUTES,
} from "../../types";

export const getAttributesDataActionCreator = () => async dispatch => {
    const data = [];
    try {
        await AttributesAPI.getRef().once('value')
            .then((snapshot) => {
                snapshot.forEach(childSnapshot => {
                    data.push(childSnapshot.val());
                });
                dispatch({ type: SET_ATTRIBUTESDATA, list: data });
            })
    } catch (e) {
        // dispatch(showAlert('Что-то пошло не так'))
    }
};

export const addAttributesActionCreator = (state) => async dispatch => {
    dispatch(showLoader())
    try {
        await AttributesAPI.getRef().child(state.id).set(state)
            .then(dispatch({ type: ADD_ATTRIBUTES, newAttribute: state }))
            .catch(console.log('setData error'))
        dispatch(hideLoader())
    } catch (e) {

        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const editAttributeActionCreator = (state) => async dispatch => {
    const updates = {};
    updates['/'+state.id+'/'] = state;
    AttributesAPI.getRef().update(updates)
        .then(dispatch({ type: EDIT_ATTRIBUTES,    song: state }))
};

export const removeAttributeActionCreator = (uuid) => async dispatch => {
    AttributesAPI.getRef().child(uuid).remove()
        .then(dispatch({ type: REMOVE_ATTRIBUTES,  row: uuid }))
        .catch(console.log('removeData error'))
};

export const setSelectedAttributeActionCreator = (state) => {
    return {
        type: SET_SELECTED_ATTRIBUTES,
        newSelect: state
    }
};

