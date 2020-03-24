import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddInQueueSong} from "./Tools/AddInQueueSong";
import {UpdateSongQueue} from "./Tools/UpdateSongQueue";
import {MoveUpSongQueue} from "./Tools/MoveUpSongQueue";
import {AddSongInSavedQueue} from "./Tools/AddSongInSavedQueue";
import {useDispatch, useSelector} from "react-redux";
import {moveSongInSavedQueue, removeSongInQueueActionCreator} from "../../../store/action/modules/queue";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBQueue = (props) => {
    const selected = useSelector(state => state.queue.selected)
    const listSong = useSelector(state => state.queue.list)
    const dispatch = useDispatch()
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddInQueueSong lenSelected={lenSelected} songData={listSong}  selected={selected}/>
                <UpdateSongQueue lenSelected={lenSelected} songData={listSong} />
                <MoveUpSongQueue lenSelected={lenSelected} songData={listSong}  selected={selected}/>
                <AddSongInSavedQueue lenSelected={lenSelected} songData={listSong} selected={selected} />
            </Card>

        </>
    )
}