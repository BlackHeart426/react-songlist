import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongs} from "../../../Dialog/DialogSongs/DialogSongs";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import {requestHandler} from "../../../../actionPage/Songs/rows";
import {createData} from "../../../../page/Songs";

export const AddSongs = () => {

    const [dialogOpened, setDialogOpened] = useState(false);
    const {songData, addRows} = useContext(SongsContext)

    const openDialog = () => {
        setDialogOpened(true)
    }

    const addRowsSong = (property) => {
        const {title, artist, tags, active} = property;

        const newSong = {
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
        console.log('songData', songData)
        const {list} = songData
        console.log('list', [...list, newSong])
        // addRows(newSong)

    }

    return (
        <>
            <IconButton onClick={openDialog}>
                <ControlPointIcon />
            </IconButton>
            <DialogSongs onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}