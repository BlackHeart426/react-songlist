import React from "react";
import * as HistoryAPI from "../../../API/HistoryAPI";
import {hideLoader, showAlert, showLoader} from "../app";
import {REMOVE_SONG_HISTORY, SET_HISTORYDATA, SET_SEARCHTEXT, SET_SELECTED} from "../../types";


export const getHistoryDataActionCreator = () => async dispatch => {
    const data = [];
    dispatch(showLoader())
    try {
        await HistoryAPI.getRef().once('value')
            .then((snapshot) => {
                    snapshot.forEach(childSnapshot => {
                        data.push(childSnapshot.val());
                    });
                dispatch({ type: SET_HISTORYDATA, list: data });
                dispatch(hideLoader())
            })
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const removeSongActionCreator = (uuid) => async dispatch => {
    // SongAPI.removeData(state, () => dispatch({
    //     type: REMOVE_SONG,
    //     row: state
    // }))
    // SongAPI.getRef().child(uuid).remove()
    //     .then(dispatch({ type: REMOVE_SONG,  row: uuid }))
    //     .catch(console.log('removeData error'))
};

export const editSongInHistoryActionCreator = (state) => async dispatch => {
    // const updates = {};
    // updates['/'+state.id+'/'] = state;
    // SongAPI.getRef().update(updates)
    //     .then(dispatch({ type: EDIT_SONG,    song: state }))
    // return {
    //     type: EDIT_SONG,
    //     song: state
    // }
};

export const setSelectedHistoryActionCreator = (state) => {
    return {
        type: SET_SELECTED,
        newSelect: state
    }
};

export const setSearchTextHistoryActionCreator = (state) => {
    return {
        type: SET_SEARCHTEXT,
        text: state
    }
};

export const filterHistoryActionCreator = (state) => {
    return {
        type: SET_SEARCHTEXT,
        text: state
    }
};