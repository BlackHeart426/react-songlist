import React from "react";
import {SongsContext} from "./songsContext";
import {useReducer} from "react";
import {songsReducer} from "./songsReducer";
import {ADD_SONG, REMOVE_SONG, SET_SEARCHTEXT, SET_SELECTED, SET_SONGDATA, TOGGLE_ACTIVE} from "../../types";

export const SongsState = ({children}) => {
    const initialState = {
        list: [],
        selected: [],
        active: false,
        searchText: ''
    }

    const [state, dispatch]  = useReducer(songsReducer, initialState);

    const setSongData = (state) => (
        dispatch({
            type: SET_SONGDATA,
            list: state
        })
    );

    const addSong = (state) => (
        dispatch({
            type: ADD_SONG,
            newSong: state
        })
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

    return (
        <SongsContext.Provider value={{
            setSongData,
            setSearchText,
            setSelected,
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