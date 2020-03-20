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
import {showAlert} from "./app";

export const getSongDataActionCreator = () => {

    // SongAPI.getData((data) =>  dispatch({
    //     type: SET_SONGDATA,
    //     list: data
    // }))
    return async dispatch => {

        try {
            console.log('wwwwwwwwwwwwwwwww')
            // dispatch(showLoader())
            dispatch(showAlert('Что-то пошло не так'))
            // const response = await SongAPI.getData();
            // return dispatch({ type: SET_SONGDATA, list: response });
        } catch (e) {
            // dispatch(showAlert('Что-то пошло не так'))
            // dispatch(hideLoader())
        }
    }
};

export const addSong = (state) => {
    // SongAPI.setData(state, (state) => dispatch({
    //     type: ADD_SONG,
    //     newSong: state
    // }))
    return {
        type: ADD_SONG,
        newSong: state
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