import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import {DialogAddSongToQueue} from "../../../../companents/Dialog/DialogQueue/DialogAddSongToQueue";
import {useDispatch} from "react-redux";
import {addSongInQueueActionCreator} from "../../../../store/action/modules/queue";

export const AddInQueueSong = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, songData, selected, removeSong, loading} = props;
    const dispatch = useDispatch();

    const addItemToRows = () => {
        setDialogOpened(true)
    };

    function showButton(lenSelected) {
        return lenSelected !== 0
    }

    function addItemToQueue() {
    }

    function handleAddSong(song, idSong) {
        dispatch(addSongInQueueActionCreator(song, idSong))
    }

    return (
        <>
            <IconButton onClick={addItemToRows} disabled={loading === true ? true : showButton(lenSelected)}>
                <ControlPointIcon />
            </IconButton>
            <DialogAddSongToQueue
                onAddItemToQueue={ addItemToQueue }
                dataSong={songData.find(item => item.id === selected)}
                onAccept = { handleAddSong }
                show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
};