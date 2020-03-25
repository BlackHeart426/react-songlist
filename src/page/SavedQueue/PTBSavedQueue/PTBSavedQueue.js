import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {RemoveSong} from "./Tools/RemoveSong";
import {useDispatch, useSelector} from "react-redux";
import {AddSongToQueue} from "./Tools/AddSongToQueue";

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
                <AddSongToQueue lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <RemoveSong lenSelected={lenSelected} songData={listSong} selected={selected} />
            </Card>

        </>
    )
}