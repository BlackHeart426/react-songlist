import React from "react";
import {Card} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import EditIcon from '@material-ui/icons/Edit';
import PublishIcon from '@material-ui/icons/Publish';
import BlockIcon from '@material-ui/icons/Block';
import TablePagination from '../companents/TablePagination/TablePagination'

export const Queue = () => {
    let mbt10 = {
      marginBottom: '10px',
        marginTop: '10px'
    }



    return (
        <>
            <h1>Queue</h1>
            <Card style={mbt10}>
                <IconButton>
                    <ControlPointIcon/>
                </IconButton>
                <IconButton>
                    <EditIcon/>
                </IconButton>
                <IconButton>
                    <PublishIcon/>
                </IconButton>
                <IconButton>
                    <BlockIcon/>
                </IconButton>
            </Card>
            <TablePagination/>
        </>

    )
}