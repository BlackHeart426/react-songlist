import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogSongsRemove from "../../../../companents/Dialog/DialogSongs/DialogSongsRemove";
import {DialogSongsEdit} from "../../../../companents/Dialog/DialogSongs/DialogSongsEdit";
import {removeSongSavedQueueActionCreator} from "../../../../store/action/modules/savedQueue";
import {useDispatch} from "react-redux";

export const RemoveSong = (props) => {
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {selected, lenSelected, songData, loading} = props;
    const dispatch = useDispatch()


    const handleOpenConfirm = () => {
        setConfirmOpened(true)
    }

    function showButton(selected) {
        return selected != 0 ? false : true
    }

    const handleemoveSong = () => {
        dispatch(removeSongSavedQueueActionCreator(selected[0]))
    }

    return (
        <>
            <IconButton onClick={handleemoveSong} disabled={loading === true ? true : showButton(lenSelected)}>
                <DeleteIcon />
            </IconButton>
            {/*<DialogSongsRemove*/}
            {/*    show = { confirmOpened }*/}
            {/*    onHide = { () => setConfirmOpened(false) }*/}
            {/*    onAccept = { handleemoveSong }*/}
            {/*    dataSong={ songData.find(item => item.id == selected) }*/}
            {/*/>*/}
        </>
    )
}