import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import DeleteIcon from "@material-ui/icons/Delete";


export const DeleteSongs = () => {
    const {rowsContext} = useContext(SongsContext)

    const deleteItemToRows = () => {

    }

    return (
        <>
            <IconButton onClick={deleteItemToRows}>
                <DeleteIcon />
            </IconButton>
        </>
    )
}