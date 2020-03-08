import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongs} from "../../../Dialog/DialogSongs/DialogSongs";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import {requestHandler} from "../../../../actionPage/Songs/rows";
import {createData} from "../../../../page/Songs";
import * as shortid from "shortid";
import CustomDialog from "../../../Dialog/CustomDialog";
import DialogConfirm from "../../../Dialog/DialogConfirm";
import {TextField} from "@material-ui/core";

export const AddSongs = (props) => {

    const [dialogOpened, setDialogOpened] = useState(false);

    const {lenSelected, songData, addSong} = props;

    const openDialog = () => {
        setDialogOpened(true)
    }

    function showButton(lenSelected) {
        return lenSelected == 0 ? false : true
    }

    const addRowsSong = (property) => {
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
        addSong(newSong)
    }

    const data = {
        title: 'Create new song',
        content: <div><p>Title: <TextField/></p><p>Artist: <strong></strong></p></div>
    }

    return (
        <>
            <IconButton onClick={ openDialog } disabled={ showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            <CustomDialog  data = { data } show={ dialogOpened }  onHide={ () => setDialogOpened(false) }/>
            {/*<DialogSongs onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>*/}
        </>
    )
}