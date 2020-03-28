import * as SavedQueueAPI from "../../../API/SavedQueueAPI";
import {hideLoader, showAlert, showLoader} from "../app";
import {
    ADD_SONG_IN_SAVEDQUEUE, REMOVE_SONG_SAVEDQUEUE,
    SET_SAVEDQUEUEDATA,
    SET_SEARCHTEXT_SAVEDQUEUE,
    SET_SELECTED_SAVEDQUEUE
} from "../../types";
import {addSongInQueueActionCreator} from "./queue";


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
        dispatch(showAlert('Song move to Saved Queue'))
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const moveSongInQueueActionCreator = (stateSong) => async dispatch => {
    debugger
    await dispatch(removeSongSavedQueueActionCreator(stateSong.id));
    await dispatch(addSongInQueueActionCreator(stateSong.data, stateSong.id));
};

export const removeSongSavedQueueActionCreator = (uuid) => async dispatch => {
    SavedQueueAPI.getRef().child(uuid).remove()
        .then(dispatch({ type: REMOVE_SONG_SAVEDQUEUE,  row: uuid }))
        .catch(console.log('removeData error'))
};

export const setSelectedSavedQueueActionCreator = (state) => {
    return {
        type: SET_SELECTED_SAVEDQUEUE,
        newSelect: state
    }
};

export const setSearchTextSavedQueueActionCreator = (state) => {
    return {
        type: SET_SEARCHTEXT_SAVEDQUEUE,
        text: state
    }
};

