import IconButton from "@material-ui/core/IconButton";
import React from "react";
import BlockIcon from "@material-ui/icons/Block";
import {useDispatch} from "react-redux";
import {addSongInSavedQueue} from "../../../../store/action/modules/queue";

export const AddSongInSavedQueue = (props) => {
    const {songData, lenSelected, selected, loading} = props;
    const dispatch = useDispatch()
    function showButton(lenSelected) {
        return lenSelected === 1 ? false : true
    }

    const handleAddSongInQueue = () => {
        const songState = songData.find(item => item.id === selected[0]);

        delete songState.data.position;

        dispatch(addSongInSavedQueue(songState))
    };

    return (
        <>
            <IconButton onClick={handleAddSongInQueue} disabled={loading === true ? true : showButton(lenSelected)}>
                <BlockIcon/>
            </IconButton>
        </>
    )
};