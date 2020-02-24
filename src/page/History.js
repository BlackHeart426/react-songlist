import React from "react";
import {Card} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from '@material-ui/icons/BorderColor';

export const HistoryQueue = () => {

    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }

    return (
        <>
            <h1>History</h1>
            <Card style={mbt10}>
                <IconButton>
                    <BorderColorIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Card>
        </>

    )
}