import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongsAdd} from "../../../../companents/Dialog/DialogSongs/DialogSongsAdd";
import * as shortid from "shortid";
import {useDispatch, useSelector} from "react-redux";
import {addSong, addSongActionCreator} from "../../../../store/action/modules/songs";
import {addAttributesActionCreator} from "../../../../store/action/modules/attributes";

export const AddAttribute = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);

    const {lenSelected, loading} = props;
    const dispatch = useDispatch()

    const openDialog = () => {
        setDialogOpened(true)
    };

    function showButton(lenSelected) {
        return lenSelected == 0 ? false : true
    }

    const addAttribute = (property) => {
        console.log('property', property)
        const {title, artist, tags, active} = property;
        const newAttribute = {
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
        dispatch(addAttributesActionCreator(newAttribute))
    };

    return (
        <>
            <IconButton onClick={ openDialog } disabled={ loading === true ? true : showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            <DialogSongsAdd onAddSongs={ addAttribute } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
};