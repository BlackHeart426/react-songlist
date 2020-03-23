import React from "react";
import * as HistoryAPI from "../../../API/HistoryAPI";
import {hideLoader, showAlert, showLoader} from "../app";
import {REMOVE_SONG_HISTORY, SET_HISTORYDATA, SET_SELECTED} from "../../types";


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

export const addSongInSavedQueueActionCreator = (state) => async dispatch => {

    dispatch(showLoader())
    try {
        await HistoryAPI.getRef().child(state.id).set(state)
             .then(dispatch({ type: REMOVE_SONG_HISTORY, newSong: state }))
            .catch(console.log('setData error'))
        dispatch(hideLoader())
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const setSelectedHistoryActionCreator = (state) => {
    return {
        type: SET_SELECTED,
        newSelect: state
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
