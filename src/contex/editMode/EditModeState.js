import React, {useReducer} from "react";
import {EditModeContext} from "./editNodeContext";
import {editModeReducer} from "./editModeReducer";
import {TOGGLE_EDITMODE} from "../types";

export const EditModeState = ({children}) => {

    const [state, dispatch] = useReducer(editModeReducer, false)

    const toggle = (status) => (
        dispatch({
            type: TOGGLE_EDITMODE,
            payload: status
        })
    );

    return (
        <EditModeContext.Provider value={{
            toggle, statusEditMode: state
        }}>
            {children}
        </EditModeContext.Provider>
    )
};