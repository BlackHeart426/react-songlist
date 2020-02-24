import React from "react";
import {Card} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import DeleteIcon from "@material-ui/icons/Delete";


export const SavedQueue = () => {
    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }

    return (
        <>
            <h1>SavedQueue</h1>
            <Card style={mbt10}>
                <IconButton>
                    <ControlPointIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Card>
        </>
    )
}