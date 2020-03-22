import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddInQueueSong} from "./Tools/AddInQueueSong";
import {UpdateSongQueue} from "./Tools/UpdateSongQueue";
import {MoveUpSongQueue} from "./Tools/MoveUpSongQueue";
import {AddSongInHistory} from "./Tools/AddSongInHistory";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBQueue = (props) => {
    // const {selected, listSong, addSong, removeSong, changePosition} = useContext(QueueContext);
    // const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                {/*<AddInQueueSong lenSelected={lenSelected} songData={listSong} removeSong={removeSong} selected={selected}/>*/}
                {/*<UpdateSongQueue lenSelected={lenSelected} songData={listSong} addSong={addSong}/>*/}
                {/*<MoveUpSongQueue lenSelected={lenSelected} songData={listSong} changePosition={changePosition} selected={selected}/>*/}
                {/*<AddSongInHistory lenSelected={lenSelected} songData={listSong} removeSong={removeSong} selected={selected} />*/}
            </Card>

        </>
    )
}