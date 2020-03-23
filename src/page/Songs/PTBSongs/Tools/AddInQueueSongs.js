import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import {DialogSongsAddQueue} from "../../../../companents/Dialog/DialogSongs/DialogSongsAddQueue";
import {useDispatch} from "react-redux";
import {moveSongInQueueActionCreator} from "../../../../store/action/modules/songs";

export const AddInQueueSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, songData, selected} = props;
    const dispatch = useDispatch()

    const addItemToRows = () => {
        setDialogOpened(true)
    }

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    function addItemToQueue() {
        console.log('asd')
    }

    const handlerMoveSongInQueue = (song) => {
        dispatch(moveSongInQueueActionCreator(song, selected[0]))
    }

    return (
        <>
            <IconButton onClick={addItemToRows} disabled={showButton(lenSelected)}>
                <PlaylistAddIcon />
            </IconButton>
            <DialogSongsAddQueue
                onAddItemToQueue={ addItemToQueue }
                dataSong={songData.find(item => item.id == selected[0])}
                onAccept = { handlerMoveSongInQueue }
                show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}