import * as SongAPI from "../../../API/SongAPI";

import {hideLoader, showAlert, showLoader} from "../app";
import {
    ADD_SONG,
    EDIT_SONG, EDIT_SONGS_LASTPLAYED, EDIT_SONGS_TIMESPLAYED,
    REMOVE_SONG, SET_FILTER_SONG,
    SET_SEARCHTEXT,
    SET_SELECTED_SONG,
    SET_SONGDATA,
    TOGGLE_ACTIVE
} from "../../types";
import {useSelector} from "react-redux";
import moment from "moment";

export const userId = localStorage.getItem('userId')

export const getSongDataActionCreator = (userId) => async dispatch => {
    const data = [];
    dispatch(showLoader())
    try {
        await SongAPI.getRef(userId).once('value')
            .then((snapshot) => {
                snapshot.forEach(childSnapshot => {
                    data.push(childSnapshot.val());
                });
                let dataNotFound = false
                if(data.length === 0) {
                    dataNotFound = true
                }
                dispatch({ type: SET_SONGDATA, list: data, dataNotFound: dataNotFound });
                dispatch(hideLoader())
            })
    } catch (e) {
        console.log(e)
        // dispatch(showAlert('Что-то пошло не так'));
    }
};

export const updateDataActionCreator = (id, nameColumn, value) => async dispatch => {
    dispatch(showLoader());
    try {
        await SongAPI.getRef(userId).child(id).child('data').update({[nameColumn]: value});
        // await  dispatch({ type: EDIT_SONGS_TIMESPLAYED, data: {id: id, timesPlayed: timesPlayed} });
        dispatch(hideLoader())
        dispatch(showAlert('Данные сохранены'))
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const editPlayedActionCreator = (id, timesPlayed) => async dispatch => {
    dispatch(showLoader());
    try {
        await SongAPI.getRef(userId).child(id).child('data').update({'timesPlayed': timesPlayed});
        await  dispatch({ type: EDIT_SONGS_TIMESPLAYED, data: {id: id, timesPlayed: timesPlayed} });
        dispatch(hideLoader())
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const editLastPlayedActionCreator = (id) => async dispatch => {
    dispatch(showLoader());
    const dataTime = moment().format();
    try {
        await SongAPI.getRef(userId).child(id).child('data').update({'lastPlayed': dataTime});
        await  dispatch({ type: EDIT_SONGS_LASTPLAYED, data: {id: id, lastPlayed: dataTime} });
        dispatch(hideLoader())
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};
export const addSongActionCreator = (state) => async dispatch => {
    dispatch(showLoader());
    try {
        await SongAPI.getRef(userId).child(state.id).set(state)
            .then(dispatch({ type: ADD_SONG, newSong: state }))
            .catch(console.log('setData error'));
        dispatch(hideLoader())
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const addFilterActionCreator = (state) => async dispatch => {
    dispatch(showLoader());
    try {
        await dispatch({ type: SET_FILTER_SONG, newAttribute: state })
        dispatch(hideLoader())
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const editSongActionCreator = (state) => async dispatch => {
    const updates = {};
    updates['/'+state.id+'/'] = state;
    SongAPI.getRef(userId).update(updates)
        .then(dispatch({ type: EDIT_SONG,    song: state }))
    // return {
    //     type: EDIT_SONG,
    //     song: state
    // }
};

export const removeSongActionCreator = (uuid) => async dispatch => {
    // SongAPI.removeData(state, () => dispatch({
    //     type: REMOVE_SONG,
    //     row: state
    // }))
    SongAPI.getRef(userId).child(uuid).remove()
        .then(dispatch({ type: REMOVE_SONG,  row: uuid }))
        .catch(console.log('removeData error'))
};

export const setSelectedActionCreator = (state) => {
    return {
        type: SET_SELECTED_SONG,
        newSelect: state
    }
};

export const setSearchTextActionCreator = (state) => {
    return {
        type: SET_SEARCHTEXT,
        text: state
    }
};

export const toggleActiveActionCreator = (state) => {
    return {
        type: TOGGLE_ACTIVE,
        active: state
    }
};
