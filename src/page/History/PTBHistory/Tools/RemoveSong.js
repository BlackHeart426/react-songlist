import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {DialogRemoveSongHistory} from "../../../../companents/Dialog/DialogHistory/DialogRemoveSongHistory";
import {useDispatch} from "react-redux";
import {removeSongHistoryActionCreator} from "../../../../store/action/modules/history";

export const RemoveSong = (props) => {
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {selected, lenSelected, songData} = props;
    const dispatch = useDispatch();


    const handlerOpenConfirm = () => {
        setConfirmOpened(true)
    }

    function showButton(selected) {
        return selected != 0 ? false : true
    }

    const handlerRemoveSong = () => {
        dispatch(removeSongHistoryActionCreator(selected[0]))
    }

    return (
        <>
            <IconButton onClick={handlerOpenConfirm} disabled={showButton(lenSelected)}>
                <DeleteIcon />
            </IconButton>
            <DialogRemoveSongHistory
                show = { confirmOpened }
                onHide = { () => setConfirmOpened(false) }
                onAccept = { handlerRemoveSong }
                dataSong={ songData.find(item => item.id == selected) }
            />
        </>
    )
}