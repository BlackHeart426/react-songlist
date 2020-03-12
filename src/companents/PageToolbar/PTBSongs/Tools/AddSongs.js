import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongsAdd} from "../../../Dialog/DialogSongs/DialogSongsAdd";
import {requestHandler} from "../../../../actionPage/Songs/rows";
import {createData} from "../../../../page/Songs/Songs";
import * as shortid from "shortid";
import {getStyles, MenuProps, useStyles} from "../../../Dialog/DialogSongs/style";

export const AddSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, addSong} = props;

    const openDialog = () => {
        setDialogOpened(true)
    }

    function showButton(lenSelected) {
        return lenSelected == 0 ? false : true
    }

    const addRowsSong = (property) => {
        console.log('property', property)
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

    return (
        <>
            <IconButton onClick={ openDialog } disabled={ showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            <DialogSongsAdd onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}