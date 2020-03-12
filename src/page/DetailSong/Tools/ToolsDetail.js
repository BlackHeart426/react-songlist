import React, {useContext} from "react";
import {Card} from "@material-ui/core";
import {ToolDetailBack} from "./ToolDetailBack";
import {ToolDetailEditSong} from "./ToolDetailEditSong";
import {ToolDetailRequestSong} from "./ToolDetailRequestSong";
import {ToolDetailHistorySong} from "./ToolDetailHistorySong";


let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}
let btnRight = {
    position: 'absolute',
    right: '35px',
    top: '104px'
}

export const ToolsDetail = (props) => {
    const {showActive, onActive} = props
    return (
        <>
            <Card style={mbt10}>
                <ToolDetailBack/>
                <label color="textSecondary">Created on Feb 29, 2020</label>
                <div  style={btnRight}>
                    <ToolDetailEditSong/>
                    <ToolDetailRequestSong/>
                    <ToolDetailHistorySong/>
                </div>
            </Card>
        </>
    )
}