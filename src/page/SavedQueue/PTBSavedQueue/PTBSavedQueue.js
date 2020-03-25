import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {SavedQueueContext} from "../../../contex/module/savedQueue/savedQueueContext";
import {BackSongToQueue} from "./Tools/BackSongToQueue";
import {RemoveSong} from "./Tools/RemoveSong";
import {useDispatch, useSelector} from "react-redux";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBSavedQueue = (props) => {
    const selected = useSelector(state => state.savedQueue.selected)
    const listSong = useSelector(state => state.savedQueue.list)
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <BackSongToQueue lenSelected={lenSelected} songData={listSong} />
                <RemoveSong lenSelected={lenSelected} songData={listSong} selected={selected} />
            </Card>

        </>
    )
}