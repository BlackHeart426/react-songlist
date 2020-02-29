import {Card} from "@material-ui/core";
import React, {useContext, useEffect, useState} from "react";
import {AddSongs} from "./Tools/AddSongs";
import {EditSongs} from "./Tools/EditSongs";
import {DeleteSongs} from "./Tools/DeleteSongs";
import {DetailSongs} from "./Tools/DetailSongs";
import {AddInQueueSongs} from "./Tools/AddInQueueSongs";
import {SwitchActiveSongs} from "./Tools/SwitchActiveSongs";
import {SongsContext} from "../../../contex/module/songs/songsContext";


let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBSongs = () => {


    return (
        <>
            <Card style={mbt10}>
                <AddSongs/>
                <EditSongs/>
                <DeleteSongs/>
                <DetailSongs/>
                <AddInQueueSongs/>
                <SwitchActiveSongs/>
            </Card>

        </>
    )
}