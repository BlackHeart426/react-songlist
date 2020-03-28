import IconButton from "@material-ui/core/IconButton";
import React from "react";
import PublishIcon from '@material-ui/icons/Publish';
import {useDispatch} from "react-redux";
import {movePositionInQueue} from "../../../../store/action/modules/queue";

export const MoveUpSongQueue = (props) => {
    const {lenSelected, changePosition, selected, loading} = props;
    const dispatch = useDispatch();

    function showButton(lenSelected) {
        return lenSelected === 1 ? false : true
    }


    const handleMoveUpSong = () => {
        let  newPosition = 2;
        dispatch(movePositionInQueue(selected[0], "reX_UClAT"))

    };

    return (
        <>
            <IconButton onClick={handleMoveUpSong} disabled={loading === true ? true : showButton(lenSelected)}>
                <PublishIcon/>
            </IconButton>
        </>
    )
};