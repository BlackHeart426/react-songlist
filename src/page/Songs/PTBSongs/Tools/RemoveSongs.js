import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogSongsRemove from "../../../../companents/Dialog/DialogSongs/DialogSongsRemove";
import {useDispatch} from "react-redux";
import {removeSong} from "../../../../store/action/songs";

export const RemoveSongs = (props) => {
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
        dispatch(removeSong(selected[0]))
    }

    return (
        <>
            <IconButton onClick={handlerOpenConfirm} disabled={showButton(lenSelected)}>
                <DeleteIcon />
            </IconButton>
            {/*<DialogSongsRemove*/}
            {/*    show = { confirmOpened }*/}
            {/*    onHide = { () => setConfirmOpened(false) }*/}
            {/*    onAccept = { handlerRemoveSong }*/}
            {/*    dataSong={ songData.find(item => item.id == selected) }*/}
            {/*/>*/}
        </>
    )
}