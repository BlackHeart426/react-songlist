import React from "react";
import {SongsContext} from "./songsContext";
import {useReducer} from "react";
import {songsReducer} from "./songsReducer";
import {TOGGLE_EDITMODE} from "../../types";

export const SongsState = ({children}) => {

    const [state, dispatch]  = useReducer(songsReducer, false);

    const toggle = (status) => (
        dispatch({
            type: TOGGLE_EDITMODE,
            payload: status
        })
    );

    return (
        <SongsContext.Provider value={{
            rowsContext: state, toggle
        }}>
            {children}
        </SongsContext.Provider>
    )
};