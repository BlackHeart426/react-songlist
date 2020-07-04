import {Card} from "@material-ui/core";
import React from "react";
import {AddInQueueSong} from "./Tools/AddInQueueSong";
import {UpdateSongQueue} from "./Tools/UpdateSongQueue";
import {MoveUpSongQueue} from "./Tools/MoveUpSongQueue";
import {AddSongInSavedQueue} from "./Tools/AddSongInSavedQueue";
import {useSelector} from "react-redux";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBQueue = (props) => {
    const selected = useSelector(state => state.queue.selected)
    const listSong = useSelector(state => state.queue.list)
    const loading = useSelector(state => state.app.loading)
    const isPageUser = useSelector(state => state.app.isPageUser)
    const lenSelected = selected.length;
    return (
        <>
            {isPageUser
            && <Card style={mbt10}>
                <AddInQueueSong loading={loading} lenSelected={lenSelected} songData={listSong}  selected={selected}/>
                {/*<UpdateSongQueue loading={loading} lenSelected={lenSelected} songData={listSong} />*/}
                <MoveUpSongQueue loading={loading} lenSelected={lenSelected} songData={listSong}  selected={selected}/>
                <AddSongInSavedQueue loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected} />
            </Card>}

        </>
    )
}
