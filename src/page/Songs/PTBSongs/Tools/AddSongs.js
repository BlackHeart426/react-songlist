import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import {DialogSongsAdd} from "../../../../companents/Dialog/DialogSongs/DialogSongsAdd";
import * as shortid from "shortid";
import {useDispatch} from "react-redux";
import {addSongActionCreator} from "../../../../store/action/modules/songs";
import moment from "moment";

export const AddSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);

    const {lenSelected, loading, attributesList} = props;
    const dispatch = useDispatch();

    const openDialog = () => {
        setDialogOpened(true)
    };

    function showButton(lenSelected) {
        return lenSelected !== 0
    }

    const addRowsSong = (property) => {
        const {title, artist, tags, active} = property;
        const today = new Date();
        const newSong = {
            id: shortid.generate(),
            data: {
                title: title,
                artist: artist,
                capo: '',
                chords: '',
                lyrics: '',
                comment: '',
                tabs: '',
                limit: null,
                timesPlayed: 0,
                lastPlayed: 'never',
                tags: tags,
                create_at: moment().format(),
                update_at: moment().format()
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