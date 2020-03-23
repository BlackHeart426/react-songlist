import React from "react";
import * as SavedQueueAPI from "../../../API/SavedQueueAPI";
import {hideLoader, showAlert, showLoader} from "../app";
import {ADD_SONG_IN_SAVEDQUEUE, SET_SAVEDQUEUEDATA, SET_SELECTED} from "../../types";


export const getSavedQueueDataActionCreator = () => async dispatch => {
    const data = [];
    dispatch(showLoader())
    try {
        await SavedQueueAPI.getRef().once('value')
            .then((snapshot) => {
                snapshot.forEach(childSnapshot => {
                    data.push(childSnapshot.val());
                });
                dispatch({ type: SET_SAVEDQUEUEDATA, list: data });
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
        await SavedQueueAPI.getRef().child(state.id).set(state)
             .then(dispatch({ type: ADD_SONG_IN_SAVEDQUEUE, newSong: state }))
            .catch(console.log('setData error'))
        dispatch(hideLoader())
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const setSelectedSavedQueueActionCreator = (state) => {
    return {
        type: SET_SELECTED,
        newSelect: state
    }
};

export const MoveSongInQueue = () => async dispatch => {

}


export const removeSongActionCreator = (uuid) => async dispatch => {
    // SongAPI.removeData(state, () => dispatch({
    //     type: REMOVE_SONG,
    //     row: state
    // }))
    // SongAPI.getRef().child(uuid).remove()
    //     .then(dispatch({ type: REMOVE_SONG,  row: uuid }))
    //     .catch(console.log('removeData error'))
};
