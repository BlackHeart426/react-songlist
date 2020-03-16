import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";

export const BackSongToQueue = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, addSong} = props;

    const openDialog = () => {
        setDialogOpened(true)
    };

    const requestHandler = () => {

    };

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }
    return (
        <>
            <IconButton onClick={ openDialog } disabled={ showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            {/*<DialogSongsAdd onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>*/}
        </>
    )
};