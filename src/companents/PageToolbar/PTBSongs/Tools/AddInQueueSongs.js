import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

export const AddInQueueSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {rowsContext} = useContext(SongsContext)
    const {selected} = props;

    const addItemToRows = () => {
        setDialogOpened(true)
    }

    function showButton(selected) {
        return selected == 1 ? false : true
    }

    return (
        <>
            <IconButton onClick={addItemToRows} disabled={showButton(selected)}>
                <PlaylistAddIcon />
            </IconButton>
        </>
    )
}