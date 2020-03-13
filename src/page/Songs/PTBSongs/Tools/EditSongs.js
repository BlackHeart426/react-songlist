import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import EditIcon from "@material-ui/icons/Edit";
import {DialogSongsEdit} from "../../../../companents/Dialog/DialogSongs/DialogSongsEdit";
import {createData} from "../../Songs";

export const EditSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, editSong, songData, selected} = props;

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }


    const requestHandler = () => {

    }

    const handlerEditRows = () => {
        setDialogOpened(true)
    }

    const handlerEditRowsSong = (property) => {
        const {title, artist, tags, active} = property;
        const newSong = {
            id: selected[0],
            data: createData(
                title,
                artist,
                '',
                '',
                { type: 'tag', data: [ { name: 'Music' }] } ,
                { type: 'btn', data: [ { type: 'text', name: 'Request11', handler: requestHandler }] }
            ),
            active: active
        }
        editSong(newSong)
    }

    return (
        <>
            <IconButton onClick={handlerEditRows} disabled={showButton(lenSelected)}>
                <EditIcon />
            </IconButton>
            <DialogSongsEdit onAddSongs={ handlerEditRowsSong } dataSong={songData.find(item => item.id == selected)} show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}