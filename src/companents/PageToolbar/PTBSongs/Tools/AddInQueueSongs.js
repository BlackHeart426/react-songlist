import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import {DialogSongsAdd} from "../../../Dialog/DialogSongs/DialogSongsAdd";
import {DialogSongsAddQueue} from "../../../Dialog/DialogSongs/DialogSongsAddQueue";
import {DialogSongsEdit} from "../../../Dialog/DialogSongs/DialogSongsEdit";

export const AddInQueueSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {rowsContext} = useContext(SongsContext)
    const {lenSelected, songData, selected} = props;

    const addItemToRows = () => {
        setDialogOpened(true)
    }

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    function addItemToQueue() {
        return(
            console.log('asd')
        )
    }

    return (
        <>
            <IconButton onClick={addItemToRows} disabled={showButton(lenSelected)}>
                <PlaylistAddIcon />
            </IconButton>
            <DialogSongsAddQueue onAddItemToQueue={ addItemToQueue } dataSong={songData.find(item => item.id == selected)} show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}