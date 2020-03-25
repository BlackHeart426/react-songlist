import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import {DialogAddSongToQueue} from "../../../../companents/Dialog/DialogQueue/DialogAddSongToQueue";

export const AddInQueueSong = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, songData, selected, removeSong, loading} = props;

    const addItemToRows = () => {
        setDialogOpened(true)
    }

    function showButton(lenSelected) {
        return lenSelected == 0 ? false : true
    }

    function addItemToQueue() {
    }

    function handleRemoveSong() {
        removeSong(selected[0])
    }

    return (
        <>
            <IconButton onClick={addItemToRows} disabled={loading === true ? true : showButton(lenSelected)}>
                <ControlPointIcon />
            </IconButton>
            <DialogAddSongToQueue
                onAddItemToQueue={ addItemToQueue }
                dataSong={songData.find(item => item.id == selected)}
                onAccept = { handleRemoveSong }
                show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}