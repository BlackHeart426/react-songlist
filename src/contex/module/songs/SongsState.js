import React from "react";
import {SongsContext} from "./songsContext";
import {useReducer} from "react";
import {songsReducer} from "./songsReducer";
import {ADD_SONG, SET_SONGDATA, TOGGLE_ACTIVE} from "../../types";

export const SongsState = ({children}) => {
    const initialState = {
        list: [],
        selected: [],
        active: false
    }

    const [state, dispatch]  = useReducer(songsReducer, initialState);

    const setSongData = (state) => (
        dispatch({
            type: SET_SONGDATA,
            list: state
        })
    );

    const addRows = (state) => (
        dispatch({
            type: ADD_SONG,
            newSong: state
        })
    );

    const toggleActive = (state) => (
        dispatch({
            type: TOGGLE_ACTIVE,
            active: state
        })
    );

    // const removeRows = (state) => (
    //     dispatch({
    //         type: ADD_ROWS,
    //         payload: state
    //     })
    // );

    return (
        <SongsContext.Provider value={{
            setSongData, addRows, songData: state, toggleActive
        }}>
            {children}
        </SongsContext.Provider>
    )
};