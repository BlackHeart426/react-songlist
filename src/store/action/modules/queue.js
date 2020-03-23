import React from "react";
import * as QueueAPI from "../../../API/QueueAPI";
import {hideLoader, showAlert, showLoader} from "../app";
import {

} from "../../types";
import {SET_QUEUEDATA} from "../../types";
import {ADD_SONG_IN_QUEUE} from "../../types";
import {SET_SELECTED} from "../../types";
import {CHANGE_POSITION} from "../../types";

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

export const addSongInQueueActionCreator = (state, id) => async dispatch => {

    dispatch(showLoader())
    try {
        let length = 0;
        await QueueAPI.getRef().once('value')
            .then((snapshot) => {
                snapshot.forEach(childSnapshot => {
                    length++;
                });
            })
            .catch(console.log('setData error'))
        state.position = length+1;
        let song = {};
        song.data = {...state};
        song.id = id;
        await QueueAPI.getRef().child(id).set(song)
             .then(dispatch({ type: ADD_SONG_IN_QUEUE, newSong: song }))
            .catch(console.log('setData error'))
        dispatch(hideLoader());
        dispatch(showAlert('Song move to q'))
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

export const MoveSongInSavedQueue = (state) => async dispatch => {
    dispatch({
        type: CHANGE_POSITION,
        position: state
    })
}

export const successSong = () => async dispatch => {

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