import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddInQueueSong} from "./Tools/AddInQueueSong";
import {SongsContext} from "../../../contex/module/songs/songsContext";
import {UpdateSongQueue} from "./Tools/UpdateSongQueue";
import {MoveUpSongQueue} from "./Tools/MoveUpSongQueue";
import {AddSongInHistory} from "./Tools/AddSongInHistory";
import {QueueContext} from "../../../contex/module/queue/queueContext";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBQueue = (props) => {
    const {showActive, onActive} = props
    const {selected, listSong, addSong, removeSong, setSearchText, searchText, editSong, detailShow} = useContext(QueueContext);
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddInQueueSong lenSelected={lenSelected} songData={listSong} removeSong={removeSong} selected={selected}/>
                <UpdateSongQueue lenSelected={lenSelected} songData={listSong} addSong={addSong}/>
                <MoveUpSongQueue lenSelected={lenSelected} songData={listSong} editSong={editSong} selected={selected}/>
                <AddSongInHistory lenSelected={lenSelected} songData={listSong} removeSong={removeSong} selected={selected} />
            </Card>

        </>
    )
}