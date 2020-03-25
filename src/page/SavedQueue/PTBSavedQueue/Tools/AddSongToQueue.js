import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {moveSongInQueueActionCreator} from "../../../../store/action/modules/savedQueue";

export const AddSongToQueue = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, songData, selected} = props;
    const dispatch = useDispatch();

    const openDialog = () => {
        setDialogOpened(true)
    };

    const handlerAddSongInQueue = () => {
        const stateSong = songData.find(item => item.id == selected[0]);
        dispatch(moveSongInQueueActionCreator(stateSong))
    };

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }
    return (
        <>
            <IconButton onClick={ handlerAddSongInQueue } disabled={ showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            {/*<DialogSongsAdd onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>*/}
        </>
    )
};