import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogSongsRemove from "../../../../companents/Dialog/DialogSongs/DialogSongsRemove";
import {useDispatch} from "react-redux";
import {removeSongActionCreator} from "../../../../store/action/modules/songs";

export const RemoveSongs = (props) => {
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {selected, lenSelected, songData, loading} = props;
    const dispatch = useDispatch()

    const handleOpenConfirm = () => {
        setConfirmOpened(true)
    }

    function showButton(selected) {
        return selected != 0 ? false : true
    }

    const handleRemoveSong = () => {
        dispatch(removeSongActionCreator(selected[0]))
    }

    return (
        <>
            <IconButton onClick={handleOpenConfirm} disabled={loading === true ? true : showButton(lenSelected)}>
                <DeleteIcon />
            </IconButton>
            <DialogSongsRemove
                show = { confirmOpened }
                onHide = { () => setConfirmOpened(false) }
                onAccept = { handleRemoveSong }
                dataSong={ songData.find(item => item.id == selected) }
            />
        </>
    )
}