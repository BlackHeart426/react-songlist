import React from "react";
import * as HistoryAPI from "../../../API/HistoryAPI";
import {hideLoader, showAlert, showLoader} from "../app";
import {
    ADD_SONG_IN_HISTORY,
    ADD_SONG_IN_QUEUE,
    REMOVE_SONG_HISTORY, REMOVE_SONG_IN_QUEUE,
    SET_HISTORYDATA,
    SET_SEARCHTEXT, SET_SEARCHTEXT_HISTORY,
    SET_SELECTED, SET_SELECTED_HISTORY
} from "../../types";
import * as QueueAPI from "../../../API/QueueAPI";


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

export const removeSongHistoryActionCreator = (uuid) => async dispatch => {
    HistoryAPI.getRef().child(uuid).remove()
        .then(dispatch({ type: REMOVE_SONG_HISTORY,  row: uuid }))
        .catch(console.log('removeData error'))
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

export const addSongInHistoryActionCreator = (state) => async dispatch => {
    dispatch(showLoader())
    try {
        await HistoryAPI.getRef().child(state.id).set(state)
            .then(dispatch({ type: ADD_SONG_IN_HISTORY, newSong: state }))
            .catch(console.log('setData error'))
        dispatch(hideLoader())
        dispatch(showAlert('Song move to q'))
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
}

export const setSelectedHistoryActionCreator = (state) => {
    return {
        type: SET_SELECTED_HISTORY,
        newSelect: state
    }
};

export const setSearchTextHistoryActionCreator = (state) => {
    return {
        type: SET_SEARCHTEXT_HISTORY,
        text: state
    }
};

export const filterHistoryActionCreator = (state) => {
    return {
        type: SET_SEARCHTEXT,
        text: state
    }
};