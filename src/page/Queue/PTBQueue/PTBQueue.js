import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddInQueueSong} from "./Tools/AddInQueueSong";
import {UpdateSongQueue} from "./Tools/UpdateSongQueue";
import {MoveUpSongQueue} from "./Tools/MoveUpSongQueue";
import {AddSongInHistory} from "./Tools/AddSongInHistory";
import {useDispatch, useSelector} from "react-redux";
import {MoveSongInSavedQueue, removeSongActionCreator} from "../../../store/action/modules/queue";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBQueue = (props) => {
    const selected = useSelector(state => state.songs.selected)
    const listSong = useSelector(state => state.songs.list)
    const searchText = useSelector(state => state.songs.searchText)
    const dispatch = useDispatch()
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddInQueueSong lenSelected={lenSelected} songData={listSong} removeSong={() => dispatch(removeSongActionCreator)} selected={selected}/>
                <UpdateSongQueue lenSelected={lenSelected} songData={listSong} updateSong={() => dispatch()}/>
                <MoveUpSongQueue lenSelected={lenSelected} songData={listSong} changePosition={() => dispatch(MoveSongInSavedQueue)} selected={selected}/>
                <AddSongInHistory lenSelected={lenSelected} songData={listSong} removeSong={() => dispatch(removeSongActionCreator)} selected={selected} />
            </Card>

        </>
    )
}