import React, {useContext} from "react";
import {Card} from "@material-ui/core";
import {ToolDetailBack} from "../../DetailSong/Tools/ToolDetailBack";
import {ToolEditDetailBack} from "./ToolEditDetailBack";


let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}
let btnRight = {
    position: 'absolute',
    right: '35px',
    top: '104px'
}

export const ToolsEditDetail = (props) => {
    const {showActive, onActive} = props
    return (
        <>
            <Card style={mbt10}>
                <ToolEditDetailBack/>
                <label color="textSecondary">Last update on Feb 29, 2020</label>
            </Card>
        </>
    )
}