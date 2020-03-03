import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import DeleteIcon from "@material-ui/icons/Delete";
import Confirm from "../../../Dialog/Confirm";
import {DialogSongs} from "../../../Dialog/DialogSongs/DialogSongs";


export const RemoveSongs = () => {
    const {rowsSongs, addRows} = useContext(SongsContext)
    const [confirmOpened, setConfirmOpened] = React.useState(false);

    const deleteItemToRows = () => {
        setConfirmOpened(true)
    }

    return (
        <>
            <IconButton onClick={deleteItemToRows}>
                <DeleteIcon />
            </IconButton>
            <Confirm show={ confirmOpened } onHide={ () => setConfirmOpened(false) } />
        </>
    )
}