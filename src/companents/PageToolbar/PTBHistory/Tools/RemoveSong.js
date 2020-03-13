import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogSongsRemove from "../../../Dialog/DialogSongs/DialogSongsRemove";
import {DialogSongsEdit} from "../../../Dialog/DialogSongs/DialogSongsEdit";

export const RemoveSong = (props) => {
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {removeSong, selected, lenSelected, songData} = props;


    const handlerOpenConfirm = () => {
        setConfirmOpened(true)
    }

    function showButton(selected) {
        return selected != 0 ? false : true
    }

    const handlerRemoveSong = () => {
        removeSong(selected[0])
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