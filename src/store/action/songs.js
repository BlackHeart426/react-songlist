import React from "react";
import * as SongAPI from "../../API/SongAPI";
import {
    ADD_SONG,
    EDIT_SONG,
    REMOVE_SONG,
    SET_SEARCHTEXT,
    SET_SELECTED,
    SET_SONGDATA,
    TOGGLE_ACTIVE
} from "../../contex/types";
import {hideLoader, showAlert, showLoader} from "./app";

export const getSongDataActionCreator = () => async dispatch => {
    const data = [];
    dispatch(showLoader())
    try {

        await SongAPI.getRef().on('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                data.push(childSnapshot.val());
            });
            dispatch({ type: SET_SONGDATA, list: data })
            dispatch(hideLoader())
        })
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const addSong = (state) => async dispatch => {
    try {
        console.log('state', state)
        await SongAPI.getRef().child(state.id).set(state)
            .then(dispatch({ type: ADD_SONG, newSong: state }))
            .catch(console.log('setData error'))
    } catch (e) {
        console.log(e)
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }

};

export const setSelectedActionCreator = (state) => {
    return {
        type: SET_SELECTED,
        newSelect: state
    }
};

export const setSearchText = (state) => {
    return {
        type: SET_SEARCHTEXT,
        text: state
    }
};

export const toggleActive = (state) => {
    return {
        type: TOGGLE_ACTIVE,
        active: state
    }
};

export const removeSong = (state) => {
    // SongAPI.removeData(state, () => dispatch({
    //     type: REMOVE_SONG,
    //     row: state
    // }))
    return {
        type: REMOVE_SONG,
        row: state
    }
};

export const editSong = (state) => {
    // SongAPI.updateData(state, () => dispatch({
    //     type: EDIT_SONG,
    //     song: state
    // }))
    return {
        type: EDIT_SONG,
        song: state
    }
};