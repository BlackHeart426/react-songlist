import React from "react";
import {Card} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import EditIcon from '@material-ui/icons/Edit';
import PublishIcon from '@material-ui/icons/Publish';
import BlockIcon from '@material-ui/icons/Block';
import TablePagination from '../companents/TablePagination/ComponentTablePagination'

export const Queue = () => {
    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }

    const btnAction = [
        { type:'icon', icon:'Detail' },
        { type:'icon', icon:'Remove' },
        { type:'icon', icon:'Success' }
    ]

    function createData(position, title, artist, amount, requestBy, note, action) {
        return {position, title, artist, amount, requestBy, note, action}
    }

    const headCells = [
        { id: 'position', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Position', type: 'txt' },
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'request-by', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Request by', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
        { id: 'action', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'btn' },
    ];


    const rows = [
        createData(1,'The Kill', '30 Seconds To Mars', 5, 'Black', 'for me', 'btn'),
        createData(2,'Hello', 'Adele', 10, 'Heart', 'for my friends', 'btn'),
    ]

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
            <TablePagination headCells = {headCells} rowsData = {rows}/>
        </>

    )
}