import React, {useReducer} from "react";
import {DrawerContext} from "./drawerContext";
import {drawerReducer} from "./drawerReducer";
import {OPEN_DRAWER, TOGGLE_EDITMODE} from "../types";

export const DrawerState = ({children}) => {

    const initialState = {
        editMode: true,
        openDrawer: false
    }

    const [state, dispatch] = useReducer(drawerReducer, initialState)

    const toggleEditMode = (status) => (
        dispatch({
            type: TOGGLE_EDITMODE,
            payload: status
        })
    );

    const toggleOpenDrawer = (status) => (
        dispatch({
            type: OPEN_DRAWER,
            payload: status
        })
    );

    return (
        <DrawerContext.Provider value={{
            toggleEditMode,
            toggleOpenDrawer,
            statusEditMode: state.editMode,
            statusOpenDrawer: state.openDrawer
        }}>
            {children}
        </DrawerContext.Provider>
    )
};