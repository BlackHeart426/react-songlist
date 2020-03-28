import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import {DialogSongsAddQueue} from "../../../../companents/Dialog/DialogSongs/DialogSongsAddQueue";
import {useDispatch} from "react-redux";
import {addSongInQueueActionCreator} from "../../../../store/action/modules/queue";

export const AddInQueueSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, songData, selected, loading} = props;
    const dispatch = useDispatch()

    const addItemToRows = () => {
        setDialogOpened(true)
    };

    function showButton(lenSelected) {
        return lenSelected !== 1
    }

    function addItemToQueue() {
        console.log('asd')
    }

    const handleMoveSongInQueue = (song) => {
        dispatch(addSongInQueueActionCreator(song))
    };

    return (
        <>
            <IconButton onClick={addItemToRows} disabled={loading === true ? true : showButton(lenSelected)}>
                <PlaylistAddIcon />
            </IconButton>
            <DialogSongsAddQueue
                onAddItemToQueue={ addItemToQueue }
                dataSong={songData.find(item => item.id === selected[0])}
                onAccept = { handleMoveSongInQueue }
                show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
};