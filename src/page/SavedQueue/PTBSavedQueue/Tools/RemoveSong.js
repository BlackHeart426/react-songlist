import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogSongsRemove from "../../../../companents/Dialog/DialogSongs/DialogSongsRemove";
import {DialogSongsEdit} from "../../../../companents/Dialog/DialogSongs/DialogSongsEdit";
import {removeSongSavedQueueActionCreator} from "../../../../store/action/modules/savedQueue";
import {useDispatch} from "react-redux";

export const RemoveSong = (props) => {
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {selected, lenSelected, songData} = props;
    const dispatch = useDispatch()


    const handlerOpenConfirm = () => {
        setConfirmOpened(true)
    }

    function showButton(selected) {
        return selected != 0 ? false : true
    }

    const handlerRemoveSong = () => {
        dispatch(removeSongSavedQueueActionCreator(selected[0]))
    }

    return (
        <>
            <IconButton onClick={handlerRemoveSong} disabled={showButton(lenSelected)}>
                <DeleteIcon />
            </IconButton>
            {/*<DialogSongsRemove*/}
            {/*    show = { confirmOpened }*/}
            {/*    onHide = { () => setConfirmOpened(false) }*/}
            {/*    onAccept = { handleRemoveSong }*/}
            {/*    dataSong={ songData.find(item => item.id == selected) }*/}
            {/*/>*/}
        </>
    )
}