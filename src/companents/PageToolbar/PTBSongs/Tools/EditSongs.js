import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import EditIcon from "@material-ui/icons/Edit";
import {DialogSongs} from "../../../Dialog/DialogSongs/DialogSongs";
import * as shortid from "shortid";
import {createData} from "../../../../page/Songs";
import {requestHandler} from "../../../../actionPage/Songs/rows";

export const EditSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, editSong, songData, selected} = props;

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    const handlerEditRows = () => {
        setDialogOpened(true)
    }


    const handlerEditRowsSong = (property) => {
        const {title, artist, tags, active} = property;
        const newSong = {
            id: shortid.generate(),
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
            <DialogSongs onAddSongs={ handlerEditRowsSong } dataSong={songData.find(item => item.id == selected)} show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}