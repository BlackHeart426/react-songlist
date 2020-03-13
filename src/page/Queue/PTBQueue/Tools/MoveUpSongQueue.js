import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongsEdit} from "../../../../companents/Dialog/DialogSongs/DialogSongsEdit";
import {createData} from "../../../Songs/Songs";
import PublishIcon from '@material-ui/icons/Publish';

export const MoveUpSongQueue = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, editSong, changePosition, selected} = props;

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    const requestHandler = () => {

    }

    const handlerEditRows = () => {
        setDialogOpened(true)
    }

    const handlerMoveUpSong = () => {
        changePosition(selected)
    }

    return (
        <>
            <IconButton onClick={handlerMoveUpSong} disabled={showButton(lenSelected)}>
                <PublishIcon/>
            </IconButton>
        </>
    )
}