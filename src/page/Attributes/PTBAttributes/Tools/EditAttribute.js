import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import EditIcon from "@material-ui/icons/Edit";
import {DialogSongsEdit} from "../../../../companents/Dialog/DialogSongs/DialogSongsEdit";
import {useDispatch} from "react-redux";
import {editSongActionCreator} from "../../../../store/action/modules/songs";
import {editAttributeActionCreator} from "../../../../store/action/modules/attributes";

export const EditAttribute = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, songData, selected, loading} = props;
    const dispatch = useDispatch()

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed, tags }
    }

    const handleEditRows = () => {
        setDialogOpened(true)
    }

    const handleEditRowsAttribute = (property) => {
        const {title, artist, tags, active, timesPlayed, lastPlayed} = property;
        const newAttribute = {
            id: selected[0],
            data: createData(
                title,
                artist,
                timesPlayed,
                lastPlayed,
                tags ,
            ),
            active: active
        }
        dispatch(editAttributeActionCreator(newAttribute))
    }

    return (
        <>
            <IconButton onClick={handleEditRows} disabled={loading === true ? true : showButton(lenSelected)}>
                <EditIcon />
            </IconButton>
            <DialogSongsEdit onAddAttribute={ handleEditRowsAttribute } dataSong={songData.find(item => item.id == selected)} show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}