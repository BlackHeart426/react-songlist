import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddInQueueSong} from "./Tools/AddInQueueSong";
import {UpdateSongQueue} from "./Tools/UpdateSongQueue";
import {MoveUpSongQueue} from "./Tools/MoveUpSongQueue";
import {AddSongInSavedQueue} from "./Tools/AddSongInHistory";
import {useDispatch, useSelector} from "react-redux";
import {moveSongInSavedQueue, removeSongInQueueActionCreator} from "../../../store/action/modules/queue";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBQueue = (props) => {
    const selected = useSelector(state => state.songs.selected)
    const listSong = useSelector(state => state.songs.list)
    const dispatch = useDispatch()
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddInQueueSong lenSelected={lenSelected} songData={listSong} removeSong={() => dispatch(removeSongInQueueActionCreator)} selected={selected}/>
                <UpdateSongQueue lenSelected={lenSelected} songData={listSong} updateSong={() => dispatch()}/>
                <MoveUpSongQueue lenSelected={lenSelected} songData={listSong} changePosition={() => dispatch(moveSongInSavedQueue)} selected={selected}/>
                <AddSongInSavedQueue lenSelected={lenSelected} songData={listSong} removeSong={() => dispatch(removeSongInQueueActionCreator)} selected={selected} />
            </Card>

        </>
    )
}