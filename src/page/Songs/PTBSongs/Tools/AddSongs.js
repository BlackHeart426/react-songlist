import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import {DialogSongsAdd} from "../../../../companents/Dialog/DialogSongs/DialogSongsAdd";
import * as shortid from "shortid";
import {useDispatch} from "react-redux";
import {addSongActionCreator} from "../../../../store/action/modules/songs";

export const AddSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);

    const {lenSelected, loading, attributesList} = props;
    const dispatch = useDispatch();

    const openDialog = () => {
        setDialogOpened(true)
    };

    function showButton(lenSelected) {
        return lenSelected === 0 ? false : true
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
        dispatch(addSongActionCreator(newSong))
    };

    return (
        <>
            <IconButton onClick={ openDialog } disabled={ loading === true ? true : showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            <DialogSongsAdd attributesList={attributesList} onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
};