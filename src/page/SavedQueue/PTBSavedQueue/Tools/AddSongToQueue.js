import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {useDispatch} from "react-redux";
import {moveSongInQueueActionCreator} from "../../../../store/action/modules/savedQueue";

export const AddSongToQueue = (props) => {
    const {lenSelected, songData, selected, loading} = props;
    const dispatch = useDispatch();

    const handleAddSongInQueue = () => {
        const stateSong = songData.find(item => item.id === selected[0]);
        console.log(stateSong)
        dispatch(moveSongInQueueActionCreator(stateSong))
    };

    function showButton(lenSelected) {
        return lenSelected === 1 ? false : true
    }
    return (
        <>
            <IconButton onClick={ handleAddSongInQueue } disabled={loading === true ? true :  showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            {/*<DialogSongsAdd onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>*/}
        </>
    )
};