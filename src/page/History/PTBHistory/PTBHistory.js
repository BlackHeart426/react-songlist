import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {HistoryContext} from "../../../contex/module/history/historyContext";
import {EditSong} from "./Tools/EditSong";
import {RemoveSong} from "./Tools/RemoveSong";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBHistory = (props) => {
    const {selected, listSong, addSong, removeSong} = useContext(HistoryContext);
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <EditSong lenSelected={lenSelected} songData={listSong} removeSong={removeSong} selected={selected}/>
                <RemoveSong lenSelected={lenSelected} songData={listSong} addSong={addSong}/>
            </Card>

        </>
    )
}