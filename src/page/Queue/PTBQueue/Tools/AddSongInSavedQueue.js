import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import BlockIcon from "@material-ui/icons/Block";
import {useDispatch} from "react-redux";
import {addSongInSavedQueue} from "../../../../store/action/modules/queue";

export const AddSongInSavedQueue = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {songData, lenSelected, selected} = props;
    const dispatch = useDispatch()
    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed, tags, action: { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }}
    }

    const requestHandler = () => {

    }

    const handlerAddSongInQueue = () => {
        const songState = songData.find(item => item.id == selected);
        dispatch(addSongInSavedQueue(songState))
    }

    return (
        <>
            <IconButton onClick={handlerAddSongInQueue} disabled={showButton(lenSelected)}>
                <BlockIcon/>
            </IconButton>
        </>
    )
}