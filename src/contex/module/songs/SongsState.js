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

    return (
        <SongsContext.Provider value={{
            rowsSongs: state,  setRows
        }}>
            {children}
        </SongsContext.Provider>
    )
};