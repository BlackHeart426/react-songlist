import React from "react";
import * as QueueAPI from "../../../API/QueueAPI";
import {hideLoader, showAlert, showLoader} from "../app";
import {

} from "../../types";
import {SET_QUEUEDATA} from "../../types";
import {ADD_SONG_IN_QUEUE} from "../../types";
import {SET_SELECTED} from "../../types";

export const getQueueDataActionCreator = () => async dispatch => {
    const data = [];
    dispatch(showLoader())
    try {
        await QueueAPI.getRef().once('value')
            .then((snapshot) => {
                    snapshot.forEach(childSnapshot => {
                        data.push(childSnapshot.val());
                    });
                dispatch({ type: SET_QUEUEDATA, list: data });
                dispatch(hideLoader())
            })
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const addSongInQueueActionCreator = (state) => async dispatch => {

    dispatch(showLoader())
    try {
        await QueueAPI.getRef().child(state.id).set(state)
             .then(dispatch({ type: ADD_SONG_IN_QUEUE, newSong: state }))
            .catch(console.log('setData error'))
        dispatch(hideLoader())
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const setSelectedQueueActionCreator = (state) => {
    return {
        type: SET_SELECTED,
        newSelect: state
    }
};

export const MoveSongInSavedQueue = () => async dispatch => {

}

export const successSong = () => async dispatch => {

}

export const removeSong = (uuid) => async dispatch => {
    // SongAPI.removeData(state, () => dispatch({
    //     type: REMOVE_SONG,
    //     row: state
    // }))
    // SongAPI.getRef().child(uuid).remove()
    //     .then(dispatch({ type: REMOVE_SONG,  row: uuid }))
    //     .catch(console.log('removeData error'))
};

export const editSong = (state) => async dispatch => {
    // const updates = {};
    // updates['/'+state.id+'/'] = state;
    // SongAPI.getRef().update(updates)
    //     .then(dispatch({ type: EDIT_SONG,    song: state }))
    // return {
    //     type: EDIT_SONG,
    //     song: state
    // }
};