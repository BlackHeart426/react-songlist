import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

export const DetailSongs = () => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {rowsContext} = useContext(SongsContext)

    const addItemToRows = () => {
        setDialogOpened(true)
    }

    return (
        <>
            <IconButton onClick={addItemToRows}>
                <ErrorOutlineIcon />
            </IconButton>
        </>
    )
}