import React, {useContext} from "react";
import {SongsContext} from "../../../contex/module/songs/songsContext";
import {Card} from "@material-ui/core";
import {DetailBack} from "./Tools/DetailBack";
import {DetailEditSong} from "./Tools/DetailEditSong";
import {DetailRequestSong} from "./Tools/DetailRequestSong";
import {DetailHistorySong} from "./Tools/DetailHistorySong";
import {StyledFormControl} from "../../PageToolbar/PTBSongs/style";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}
let btnRight = {
    position: 'absolute',
    right: '35px',
    top: '104px'
}

export const DetailTools = (props) => {
    const {showActive, onActive} = props
    return (
        <>
            <Card style={mbt10}>
                <DetailBack/>
                <label color="textSecondary">Created on Feb 29, 2020</label>
                <div  style={btnRight}>
                    <DetailEditSong/>
                    <DetailRequestSong/>
                    <DetailHistorySong/>
                </div>

            </Card>
        </>
    )
}