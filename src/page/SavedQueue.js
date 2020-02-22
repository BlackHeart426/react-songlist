import React from "react";
import Button from "react-bootstrap/Button";
import {Card} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";


export const SavedQueue = () => {
    let pt0 = {
        padding: 0
    }
    let noneBorderBottom = {
        borderBottom: 0
    }
    let noneBottomMargin = {
        marginBottom: 0
    }

    return (
        <>
            <h1>SavedQueue</h1>
            <Card>
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