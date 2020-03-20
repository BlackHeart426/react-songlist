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

export const setSongData = (data) => {
    // SongAPI.getData((data) =>  dispatch({
    //     type: SET_SONGDATA,
    //     list: data
    // }))
    return {
        type: SET_SONGDATA,
        list: data
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

export const setSelected = (state) => {
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