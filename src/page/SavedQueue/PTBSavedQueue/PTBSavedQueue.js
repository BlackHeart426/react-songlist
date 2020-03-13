import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {SavedQueueContext} from "../../../contex/module/savedQueue/savedQueueContext";
import {BackSongToQueue} from "./Tools/BackSongToQueue";
import {RemoveSong} from "./Tools/RemoveSong";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBSavedQueue = (props) => {
    const {selected, listSong, addSong, removeSong, setSearchText, searchText, editSong, detailShow} = useContext(SavedQueueContext);
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <BackSongToQueue lenSelected={lenSelected} songData={listSong} addSong={addSong}/>
                <RemoveSong lenSelected={lenSelected} songData={listSong} removeSong={removeSong} selected={selected} />
            </Card>

        </>
    )
}