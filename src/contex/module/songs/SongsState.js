import React from "react";
import {SongsContext} from "./songsContext";
import {useReducer} from "react";
import {songsReducer} from "./songsReducer";
import {ADD_ROWS, SET_ROWS} from "../../types";

export const SongsState = ({children}) => {

    const [state, dispatch]  = useReducer(songsReducer, []);

    const setRows = (state) => (
        dispatch({
            type: SET_ROWS,
            payload: state
        })
    );

    const addRows = (state) => (
        dispatch({
            type: ADD_ROWS,
            payload: state
        })
    );

    const removeRows = (state) => (
        dispatch({
            type: ADD_ROWS,
            payload: state
        })
    );

    return (
        <SongsContext.Provider value={{
            removeSong, setRows, addRows, rowsSongs: state
        }}>
            {children}
        </SongsContext.Provider>
    )
};