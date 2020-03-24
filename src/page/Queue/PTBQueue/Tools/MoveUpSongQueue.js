import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import PublishIcon from '@material-ui/icons/Publish';

export const MoveUpSongQueue = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, editSong, changePosition, selected} = props;

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    const requestHandler = () => {

    }

    const handleEditRows = () => {
        setDialogOpened(true)
    }

    const handleMoveUpSong = () => {
        changePosition(selected)

    }

    return (
        <>
            <IconButton onClick={handleMoveUpSong} disabled={showButton(lenSelected)}>
                <PublishIcon/>
            </IconButton>
        </>
    )
}