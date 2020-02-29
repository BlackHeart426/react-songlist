import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import Switch from "@material-ui/core/Switch";

export const SwitchActiveSongs = () => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {rowsContext} = useContext(SongsContext)

    const addItemToRows = () => {
        setDialogOpened(true)
    }

    return (
        <>
            <Switch color="primary" />
            Show inactive
        </>
    )
}