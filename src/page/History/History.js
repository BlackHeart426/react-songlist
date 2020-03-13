import React from "react";
import {Card} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";

export const HistoryQueue = () => {

    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }


    function createData( title, artist, amount, requestBy, played, note) {
        return { title, artist, amount, requestBy, played, note}
    }

    const headCells = [
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'request-by', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Request by', type: 'txt' },
        { id: 'played', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Played', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
    ];


    const rows = [
        createData('The Kill', '30 Seconds To Mars', 5, 'Black', 'for me'),
        createData('Hello', 'Adele', 10, 'Heart', 'for my friends'),
    ]

    return (
        <>
            <Card style={mbt10}>
                <IconButton>
                    <BorderColorIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Card>
            <TablePagination headCells = {headCells} rowsData = {rows}/>
        </>

    )
}