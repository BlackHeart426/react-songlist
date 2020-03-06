import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import EditIcon from "@material-ui/icons/Edit";

export const EditSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {rowsContext} = useContext(SongsContext)
    const {selected} = props;

    function showButton(selected) {
        return selected == 1 ? false : true
    }

    const addItemToRows = () => {
        setDialogOpened(true)
    }

    return (
        <>
            <IconButton onClick={addItemToRows} disabled={showButton(selected)}>
                <EditIcon />
            </IconButton>
        </>
    )
}