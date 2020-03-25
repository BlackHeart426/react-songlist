import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import EditIcon from "@material-ui/icons/Edit";
import {DialogEditSongHistory} from "../../../../companents/Dialog/DialogHistory/DialogEditSongHistory";

export const EditSong = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, editSong, songData, selected, loading} = props;

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed, tags, action: { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }}
    }

    const requestHandler = () => {

    }

    const handleEditRows = () => {
        setDialogOpened(true)
    }

    const handleEditRowsSong = (property) => {
        const {title, artist, tags, active} = property;
        const newSong = {
            id: selected[0],
            data: createData(
                title,
                artist,
                '',
                '',
                tags
                // { type: 'tag', data: [ { name: 'Music' }] } ,
                // { type: 'btn', data: [ { type: 'text', name: 'Request11', handle: requestHandler }] }
            ),
            active: active
        }
        editSong(newSong)
    }

    return (
        <>
            <IconButton onClick={handleEditRows} disabled={loading === true ? true : showButton(lenSelected)}>
                <EditIcon />
            </IconButton>
            <DialogEditSongHistory onAddSongs={ handleEditRowsSong } dataSong={songData.find(item => item.id == selected)} show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}