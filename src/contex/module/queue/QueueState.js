import React from "react";
import {useReducer} from "react";
import {
    ADD_SONG, CHANGE_POSITION,
    EDIT_SONG,
    REMOVE_SONG,
    SET_SEARCHTEXT,
    SET_SELECTED,
    SET_SONGDATA,
    SHOW_DETAIl,
    TOGGLE_ACTIVE, UPDATE_SONG_QUEUE
} from "../../types";
import {queueReducer} from "./queueReducer";
import {QueueContext} from "./queueContext";

export const QueueState = ({children}) => {
    const initialState = {
        list: [],
        selected: []
    }

    const [state, dispatch]  = useReducer(queueReducer, initialState);

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

    const removeSong = (state) => (
        dispatch({
            type: REMOVE_SONG,
            row: state
        })
    );

    const updateSongQueue = (state) => (
        dispatch({
            type: UPDATE_SONG_QUEUE,
            song: state
        })
    );

    const changePosition = (state) => (
        dispatch({
            type: CHANGE_POSITION,
            song: state
        })
    );
    return (
        <QueueContext.Provider value={{
            setSongData,
            setSelected,
            updateSongQueue,
            addSong,
            removeSong,
            changePosition,
            listSong: state.list,
            selected: state.selected,
            active: state.active,
            searchText: state.searchText,
            songData: state
        }}>
            {children}
        </QueueContext.Provider>
    )
};