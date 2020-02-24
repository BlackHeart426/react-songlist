import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {Card} from "@material-ui/core";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';

export const Songs = () => {
    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }
    return (
        <div className={{top:'40px'}}>
            <h1>Songs</h1>
            <Card style={mbt10}>
                <IconButton>
                    <ControlPointIcon/>
                </IconButton>
                <IconButton>
                    <EditIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <ErrorOutlineIcon/>
                </IconButton>
                <IconButton>
                    <PlaylistAddIcon/>
                </IconButton>
                <IconButton>
                    <ToggleOffIcon/>
                </IconButton>
            </Card>
        </div>
    )
}