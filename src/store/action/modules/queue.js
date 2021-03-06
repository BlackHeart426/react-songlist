import * as QueueAPI from "../../../API/QueueAPI";
import {hideLoader, showAlert, showLoader} from "../app";
import {EDIT_ATTRIBUTES, SET_QUEUEDATA} from "../../types";
import {ADD_SONG_IN_QUEUE} from "../../types";
import {CHANGE_POSITION} from "../../types";
import {SET_SEARCHTEXT} from "../../types";
import {addSongInHistoryActionCreator} from "./history";
import {REMOVE_SONG_IN_QUEUE} from "../../types";
import {addSongInSavedQueueActionCreator} from "./savedQueue";
import {SET_SELECTED_QUEUE} from "../../types";
import * as shortid from "shortid";
import * as AttributesAPI from "../../../API/AttributesAPI";
import {editLastPlayedActionCreator, editPlayedActionCreator, userId} from "./songs";

export const getQueueDataActionCreator = () => async dispatch => {
    const data = [];
    dispatch(showLoader())
    try {
        await QueueAPI.getRef(userId).orderByChild("position").once('value')
            .then((snapshot) => {
                snapshot.forEach(childSnapshot => {
                    data.push(childSnapshot.val());
                });
                let dataNotFound = false
                if(data.length === 0) {
                    dataNotFound = true
                }
                dispatch({ type: SET_QUEUEDATA, list: data, dataNotFound: dataNotFound });
                dispatch(hideLoader())
            })
    } catch (e) {
        // dispatch(showAlert('Что-то пошло не так'))
    }
};
export const setQueueDataActionCreator = (state) => async dispatch => {
    dispatch(showLoader())
    try {
        const updates = {};
        updates['/'+state.id+'/'] = state;
        QueueAPI.getRef(userId).update(updates)
        // .then(dispatch({ type: ADD_SONG_IN_QUEUE, newSong: song }))
        // .catch(console.log('setData error'))
        await dispatch(hideLoader())
    } catch (e) {
        console.log(e)
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }

};

export const addSongInQueueActionCreator = (state, idSong) => async dispatch => {

    dispatch(showLoader())
    try {
        let length = 1;
        await QueueAPI.getRef(userId).once('value')
            .then((snapshot) => {
                snapshot.forEach(childSnapshot => {
                    length++;
                });
            })
            .catch(console.log('setData error'))
        // state.position = length;
        const song = {};
        song.position = length;
        song.data = {...state};
        song.id = shortid.generate();
        song.idSong = idSong;
        await QueueAPI.getRef(userId).child(song.id).set(song)
            .then(dispatch({ type: ADD_SONG_IN_QUEUE, newSong: song }))
            .catch(console.log('setData error'))
        dispatch(hideLoader())
        dispatch(showAlert('Song move to q'))
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const editSongInQueueActionCreator = (state) => async dispatch => {
    // const updates = {};
    // updates['/'+state.id+'/'] = state;
    // SongAPI.getRef().update(updates)
    //     .then(dispatch({ type: EDIT_SONG,    song: state }))
    // return {
    //     type: EDIT_SONG,
    //     song: state
    // }
};
export const checkPosition = (currentItem, oldPosition, newPosition) => {
    if (currentItem.position === newPosition)
    {
        currentItem.position++

    } else {
        if ( currentItem.position === oldPosition){
            currentItem.position = newPosition
        } else {
            currentItem.position > newPosition && currentItem.position++
        }
    }

}

export const movePositionInQueue = (idCurrent, newId) => async dispatch => {
    const list =  [];
    await QueueAPI.getRef(userId).orderByChild("position").once('value')
    .then((snapshot) => {
        snapshot.forEach(childSnapshot => {
            list.push(childSnapshot.val());
        });
    });
    const currentPosition = {...list.find(item => item.id === idCurrent)};
    const newPosition = {...list.find(item => item.id === newId)};
    list.forEach((item, index) => {
        checkPosition(item, currentPosition.position, newPosition.position)
    });
    // list.map(item => (
    //     updateData(item)
    // ))

    // async function updateData(item) {
    //     const updates = {};
    //     updates['/'+item.id+'/'] = item;
    //     await QueueAPI.getRef().update(updates)
    //         .then(dispatch({ type: EDIT_ATTRIBUTES, song: item }))
    // }
    await dispatch(getQueueDataActionCreator())

}

export const addSongInSavedQueue = (state) => async dispatch => {
    await dispatch(removeSongInQueueActionCreator(state.id))
    await dispatch(addSongInSavedQueueActionCreator(state))
}

export const successSongActionCreator = (stateSong, timesPlayed) => async dispatch => {
    await dispatch(removeSongInQueueActionCreator(stateSong.id))
    await dispatch(addSongInHistoryActionCreator(stateSong))
    await dispatch(editPlayedActionCreator(stateSong.idSong, timesPlayed))
    await dispatch(editLastPlayedActionCreator(stateSong.idSong))
}


export const removeSongInQueueActionCreator = (uuid) => async dispatch => {
    QueueAPI.getRef(userId).child(uuid).remove()
        .then(dispatch({ type: REMOVE_SONG_IN_QUEUE,  row: uuid }))
        .catch(console.log('removeData error'))
};

export const setSelectedQueueActionCreator = (state) => {
    return {
        type: SET_SELECTED_QUEUE,
        newSelect: state
    }
};

export const setSearchTextQueueActionCreator = (state) => {
    return {
        type: SET_SEARCHTEXT,
        text: state
    }
};
