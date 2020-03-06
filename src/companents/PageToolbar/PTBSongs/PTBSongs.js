import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddSongs} from "./Tools/AddSongs";
import {EditSongs} from "./Tools/EditSongs";
import {RemoveSongs} from "./Tools/RemoveSongs";
import {DetailSongs} from "./Tools/DetailSongs";
import {AddInQueueSongs} from "./Tools/AddInQueueSongs";
import {SwitchActiveSongs} from "./Tools/SwitchActiveSongs";
import {SongsContext} from "../../../contex/module/songs/songsContext";


let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBSongs = (props) => {
    const {showActive, onActive} = props
    const {selected} = useContext(SongsContext)
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddSongs selected={lenSelected}/>
                <EditSongs selected={lenSelected}/>
                <RemoveSongs selected={lenSelected}/>
                <DetailSongs selected={lenSelected}/>
                <AddInQueueSongs selected={lenSelected}/>
                <SwitchActiveSongs showActive={showActive} onActive = {onActive}/>
            </Card>

        </>
    )
}