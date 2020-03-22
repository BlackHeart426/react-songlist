import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongsAdd} from "../../../../companents/Dialog/DialogSongs/DialogSongsAdd";
import * as shortid from "shortid";
import {useDispatch} from "react-redux";
import {addSong} from "../../../../store/action/songs";
import * as SongAPI from "../../../../API/SongAPI";

export const AddSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected} = props;
    const dispatch = useDispatch()

    const openDialog = () => {
        setDialogOpened(true)
    };

    function showButton(lenSelected) {
        return lenSelected == 0 ? false : true
    }

    const addRowsSong = (property) => {
        console.log('property', property)
        const {title, artist, tags, active} = property;
        const newSong = {
            id: shortid.generate(),
            data: {
                title: title,
                artist: artist,
                timesPlayed: '0',
                lastPlayed: 'never',
                tags: tags
            },
            active: active
        };
        // SongAPI.getRef().child(newSong.id).set(newSong)
        dispatch(addSong(newSong))
    };

    return (
        <>
            <IconButton onClick={ openDialog } disabled={ showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            <DialogSongsAdd onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
};