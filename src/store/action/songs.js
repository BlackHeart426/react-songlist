import React from "react";
import * as SongAPI from "../../API/SongAPI";
import {
    ADD_SONG,
    EDIT_SONG,
    REMOVE_SONG,
    SET_SEARCHTEXT,
    SET_SELECTED,
    SET_SONGDATA,
    TOGGLE_ACTIVE
} from "../../contex/types";
import {hideLoader, showAlert, showLoader} from "./app";
import {database} from "../../firebaseService";
import Axios from "axios";

export const getItem = () => {
    const userId = localStorage.getItem('userId');
    const ref = database.ref('songs').child(userId);
    const data = [];
    return async dispatch => {
        // dispatch(showLoader())
        // dispatch(showAlert('Что-то пошло не так'))
        await ref.once('value')
            .then(snapshot => {
                snapshot.forEach(childSnapshot => {
                    data.push(childSnapshot.val())
                })
                // dispatch({ type: SET_SONGDATA, list: data })
                // dispatch(hideLoader())

            })
            .catch(error => {
                // dispatch(showAlert('Что-то пошло не так'))
                // dispatch(hideLoader())
            })
    }
}

export const getSongDataActionCreator = () => async dispatch => {
    const userId = localStorage.getItem('userId');
    const ref = database.ref('songs').child(userId);
    const data = [];
    dispatch(showLoader())
    try {

        await ref.on('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                data.push(childSnapshot.val());
            });
            dispatch({ type: SET_SONGDATA, list: data })
            dispatch(hideLoader())
        })
    } catch (e) {
        dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
    }

    // await SongAPI.getData((response) => dispatch({ type: SET_SONGDATA, list: response }))

    //.then(console.log('getData error',data)).catch(console.log('getData error'));
//     return (
//         SongAPI.getData((response) => dispatch({ type: SET_SONGDATA, list: response }))
// )
    // SongAPI.getData((data) =>  dispatch({
    //     type: SET_SONGDATA,
    //     list: data
    // }))
    // return dispatch => {
        // dispatch(showLoader())
        //     const response = await SongAPI.getData();
        // console.log('wwwwwwwwwwwwwwwww', response.length)
        // const json = await response.json()
        // let response = await SongAPI.getData();
        // let user = await response;
        // dispatch({ type: SET_SONGDATA, list: response });
        // dispatch(showAlert('Что-то пошло не так'))
        // try {
        //     console.log('wwwwwwwwwwwwwwwww')
        //     let promise = new Promise((resolve, reject) => {
        //         SongAPI.getData();
        //     });
        //     let result = await promise;
        //     // dispatch(showLoader())
        //     console.log('response', result)
        //     dispatch(showAlert('Что-то пошло не так'))
        //     // return dispatch({ type: SET_SONGDATA, list: response });
        // } catch (e) {
        //     // dispatch(showAlert('Что-то пошло не так'))
        //     // dispatch(hideLoader())
        // }
    // }
};

export const addSong = (state) => {
    // SongAPI.setData(state, (state) => dispatch({
    //     type: ADD_SONG,
    //     newSong: state
    // }))
    return {
        type: ADD_SONG,
        newSong: state
    }
};

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

export const removeSong = (state) => {
    // SongAPI.removeData(state, () => dispatch({
    //     type: REMOVE_SONG,
    //     row: state
    // }))
    return {
        type: REMOVE_SONG,
        row: state
    }
};

export const editSong = (state) => {
    // SongAPI.updateData(state, () => dispatch({
    //     type: EDIT_SONG,
    //     song: state
    // }))
    return {
        type: EDIT_SONG,
        song: state
    }
};