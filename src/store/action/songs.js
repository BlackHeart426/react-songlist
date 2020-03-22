import React from "react";
import * as SongAPI from "../../API/SongAPI";

import {hideLoader, showAlert, showLoader} from "./app";
import {ADD_SONG, EDIT_SONG, REMOVE_SONG, SET_SEARCHTEXT, SET_SELECTED, SET_SONGDATA, TOGGLE_ACTIVE} from "../types";
import Axios from "axios";

export const getSongDataActionCreator = () => async dispatch => {
    const data = [];
    dispatch(showLoader())
    try {

        // const res = await Axios.get('https://song-list-95d78.firebaseio.com/songs/aYDAtD5RU6hGLLpBywY3ZBxUQEE2.json')
        // console.log('res', res.data)
        //     dispatch({ type: SET_SONGDATA, list: res.data })
        //     dispatch(hideLoader())
        // await SongAPI.getRef().on('value', snapshot => {
        //     snapshot.forEach(childSnapshot => {
        //         data.push(childSnapshot.val());
        //     });
        //     dispatch({ type: SET_SONGDATA, list: data })
        //     dispatch(hideLoader())
        // })
        await SongAPI.getRef().once('value')
            .then((snapshot) => {
                debugger
                    snapshot.forEach(childSnapshot => {
                        data.push(childSnapshot.val());
                    });
                dispatch({ type: SET_SONGDATA, list: data });
                dispatch(hideLoader())
            })
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};

export const addSong = (state) => async dispatch => {

    dispatch(showLoader())
    try {
        await SongAPI.getRef().child(state.id).set(state)
             .then(dispatch({ type: ADD_SONG, newSong: state }))
            .catch(console.log('setData error'))
        dispatch(hideLoader())
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }
};
// export const addSong = (state) => async dispatch => {
//     console.log('state',state)
//     dispatch(showLoader())
//     debugger
//     await SongAPI.getRef().child(state.id).set(state)
//      .then(dispatch({ type: ADD_SONG, newSong: state }))
//         .catch(console.log('setData error'))
// //     await dispatch({ type: ADD_SONG, newSong: state })
// };

export const setSelectedActionCreator = (state) => {
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

export const removeSong = (uuid) => async dispatch => {
    // SongAPI.removeData(state, () => dispatch({
    //     type: REMOVE_SONG,
    //     row: state
    // }))
    SongAPI.getRef().child(uuid).remove()
        .then(dispatch({ type: REMOVE_SONG,  row: uuid }))
        .catch(console.log('removeData error'))
};

export const editSong = (state) => async dispatch => {
    const updates = {};
    updates['/'+state.id+'/'] = state;
    SongAPI.getRef().update(updates)
        .then(dispatch({ type: EDIT_SONG,    song: state }))
    // return {
    //     type: EDIT_SONG,
    //     song: state
    // }
};