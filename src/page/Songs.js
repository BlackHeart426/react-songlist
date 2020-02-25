import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {Card} from "@material-ui/core";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TablePagination from '../companents/TablePagination/TablePagination'
import Switch from "@material-ui/core/Switch";

export const Songs = () => {
    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }

    // function createData(title, artist, timesPlayed, lastPlayed, tag, action) {
    //     return [
    //         { value: title, type: 'text' },
    //         { value: artist, type: 'text' },
    //         { value: timesPlayed, type: 'text' },
    //         { value: lastPlayed, type: 'text' },
    //         { value: tag, type: 'tag' },
    //         { value: action, type: 'btn' }
    //     ]
    // }

    function createData(title, artist, timesPlayed, lastPlayed, tag, action) {
        return {title, artist, timesPlayed, lastPlayed, tag, action}
    }

    const headCells = [
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'times-played', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Times played', type: 'txt' },
        { id: 'last-played', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Last Played', type: 'txt' },
        { id: 'tags', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'tag' },
        { id: 'action', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'btn' },
    ];

    const rows = [
        createData('The Kill', '30 Seconds To Mars', 1, '1 week age', 'tag', 'btn'),
        createData('Hello', 'Adele', 2, '2 week age', 'tag', 'btn'),
    ]
    //TODO переписать на массив с типом элемента

    return (
        <div>
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
                <>
                <Switch color="primary" />
                    Show inactive
                </>
            </Card>
            <TablePagination headCells = {headCells} rowsData = {rows}/>
        </div>
    )
}