import React from "react";
import {SongsContext} from "./songsContext";
import {useReducer} from "react";
import {songsReducer} from "./songsReducer";
import {
    ADD_SONG,
    EDIT_SONG,
    REMOVE_SONG,
    SET_SEARCHTEXT,
    SET_SELECTED,
    SET_SONGDATA,
    SHOW_DETAIl,
    TOGGLE_ACTIVE
} from "../../types";
import * as firebaseService from "../../../firebaseService";

export const SongsState = ({children}) => {
    const initialState = {
        list: [],
        selected: [],
        active: false,
        searchText: '',
    }

    const [state, dispatch]  = useReducer(songsReducer, initialState);

    const setSongData = (state) => (

        dispatch({
            type: SET_SONGDATA,
            list: state
        })
    );

    const addSong = (state) => (
        firebaseService.setData(state, () =>  dispatch({
            type: ADD_SONG,
            newSong: state
        }))
    );

    const setSelected = (state) => (
        dispatch({
            type: SET_SELECTED,
            newSelect: state
        })
    );

    const setSearchText = (state) => (
        dispatch({
            type: SET_SEARCHTEXT,
            text: state
        })
    );

    const toggleActive = (state) => (
        dispatch({
            type: TOGGLE_ACTIVE,
            active: state
        })
    );

    const removeSong = (state) => (
        dispatch({
            type: REMOVE_SONG,
            row: state
        })
    );

    const editSong = (state) => (
        dispatch({
            type: EDIT_SONG,
            song: state
        })
    );


    return (
        <SongsContext.Provider value={{
            setSongData,
            setSearchText,
            setSelected,
            editSong,
            addSong,
            removeSong,
            toggleActive,
            listSong: state.list,
            selected: state.selected,
            active: state.active,
            searchText: state.searchText,
            songData: state
        }}>
            {children}
        </SongsContext.Provider>
    )
};