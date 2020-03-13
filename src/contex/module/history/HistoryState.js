import React from "react";
import {useReducer} from "react";
import {
    REMOVE_SONG,
    SET_SELECTED,
    SET_SONGDATA, UPDATE_SONG_HISTORY,
} from "../../types";
import {historyReducer} from "./historyReducer";
import {HistoryContext} from "./historyContext";

export const HistoryState = ({children}) => {
    const initialState = {
        list: [],
        selected: []
    }

    const [state, dispatch]  = useReducer(historyReducer, initialState);

    const setSongData = (state) => (
        dispatch({
            type: SET_SONGDATA,
            list: state
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

    const updateSongHistory = (state) => (
        dispatch({
            type: UPDATE_SONG_HISTORY,
            song: state
        })
    );

    return (
        <HistoryContext.Provider value={{
            setSongData,
            setSelected,
            updateSongHistory,
            removeSong,
            listSong: state.list,
            selected: state.selected,
            active: state.active,
            searchText: state.searchText,
            songData: state
        }}>
            {children}
        </HistoryContext.Provider>
    )
};