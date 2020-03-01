import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongs} from "../../../Dialog/DialogSongs";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import {requestHandler} from "../../../../actionPage/Songs/rows";
import {createData} from "../../../../page/Songs";

export const AddSongs = () => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {rowsSongs, addRows} = useContext(SongsContext)

    const openDialog = () => {
        setDialogOpened(true)
    }

    const addRowsSong = () => {
        console.log('rowsSongs', rowsSongs)
        const newSong = {
            data: createData(
                'The Kill1111111',
                '30 Seconds To Mars111111111111111',
                11,
                '11 week age',
                { name: 'Music',  type: 'tag' },
                { type: 'btn', data: [ { type: 'text', name: 'Request11', handler: requestHandler }] }
            ),
            active: true
        }

        addRows(newSong)
        // setRows([])
        console.log('rowsSongs', rowsSongs)
        console.log('newSong', newSong)

    }

    return (
        <>
            <IconButton onClick={openDialog}>
                <ControlPointIcon />
            </IconButton>
            <DialogSongs onAddSongs={ ()=>addRowsSong() } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}