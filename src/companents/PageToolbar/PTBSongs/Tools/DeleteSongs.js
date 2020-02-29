import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import DeleteIcon from "@material-ui/icons/Delete";

export const DeleteSongs = () => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {rowsContext} = useContext(SongsContext)

    const addItemToRows = () => {
        setDialogOpened(true)
    }

    return (
        <>
            <IconButton onClick={addItemToRows}>
                <DeleteIcon />
            </IconButton>
        </>
    )
}