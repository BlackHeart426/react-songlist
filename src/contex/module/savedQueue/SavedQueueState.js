import React from "react";
import {useReducer} from "react";
import {
    ADD_SONG, CHANGE_POSITION,
    REMOVE_SONG,
    SET_SELECTED,
    SET_SONGDATA,
    UPDATE_SONG_QUEUE
} from "../../types";
import {savedQueueReducer} from "./savedQueueReducer";
import {SavedQueueContext} from "./savedQueueContext";

export const SavedQueueState = ({children}) => {
    const initialState = {
        list: [],
        selected: []
    }

    const [state, dispatch]  = useReducer(savedQueueReducer, initialState);

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

    return (
        <SavedQueueContext.Provider value={{
            setSongData,
            setSelected,
            addSong,
            removeSong,
            listSong: state.list,
            selected: state.selected,
            active: state.active,
            searchText: state.searchText,
            songData: state
        }}>
            {children}
        </SavedQueueContext.Provider>
    )
};