import IconButton from "@material-ui/core/IconButton";
import React from "react";
import PublishIcon from '@material-ui/icons/Publish';

export const MoveUpSongQueue = (props) => {
    const {lenSelected, changePosition, selected, loading} = props;

    function showButton(lenSelected) {
        return lenSelected === 1 ? false : true
    }


    const handleMoveUpSong = () => {
        changePosition(selected)

    };

    return (
        <>
            <IconButton onClick={handleMoveUpSong} disabled={loading === true ? true : showButton(lenSelected)}>
                <PublishIcon/>
            </IconButton>
        </>
    )
};