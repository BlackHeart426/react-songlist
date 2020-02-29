import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongs} from "../../../Dialog/DialogSongs";
import {SongsContext} from "../../../../contex/module/songs/songsContext";

export const AddSongs = () => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {rowsContext} = useContext(SongsContext)

    const addItemToRows = () => {
        setDialogOpened(true)
    }

    return (
        <>
            <IconButton onClick={addItemToRows}>
                <ControlPointIcon />
            </IconButton>
            <DialogSongs show={dialogOpened} onHide={() => setDialogOpened(false)}/>
        </>
    )
}