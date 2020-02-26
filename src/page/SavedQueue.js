import React from "react";
import {Card} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import DeleteIcon from "@material-ui/icons/Delete";
import TablePagination from "../companents/TablePagination/ComponentTablePagination";


export const SavedQueue = () => {
    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }
    const btnAction = [
        { type:'icon', icon:'Detail' },
        { type:'icon', icon:'Remove' },
        { type:'icon', icon:'Success' }
    ]

    function createData( title, artist, amount, requestBy, note) {
        return { title, artist, amount, requestBy, note}
    }

    const headCells = [
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'request-by', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Request by', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
    ];


    const rows = [
        createData('The Kill', '30 Seconds To Mars', 5, 'Black', 'for me'),
        createData('Hello', 'Adele', 10, 'Heart', 'for my friends'),
    ]

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
            <TablePagination headCells = {headCells} rowsData = {rows}/>
        </>
    )
}