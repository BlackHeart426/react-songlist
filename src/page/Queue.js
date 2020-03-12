import React from "react";
import {Card} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import EditIcon from '@material-ui/icons/Edit';
import PublishIcon from '@material-ui/icons/Publish';
import BlockIcon from '@material-ui/icons/Block';
import TablePagination from '../companents/TablePagination/ComponentTablePagination'
import * as shortid from "shortid";
import {createData} from "./Songs/Songs";
import {PTBQueue} from "../companents/PageToolbar/PTBQueue/PTBQueue";

export const Queue = () => {
    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }

    function createData(position, title, artist, amount, requestBy, note, action) {
        return {position, title, artist, amount, requestBy, note, action}
    }

    function handlerDetail(id) {
        console.log('detail', id)
    }

    function handlerDelete(id) {
        console.log('delete', id)
    }

    function handlerDone(id) {
        console.log('done', id)
    }


    const songList = [
        {
            id: shortid.generate(),
            data: createData(
            1,
            'The Kill',
            '30 Seconds To Mars',
            1,
            'Black',
            'note',
            {
                type: 'btn',
                data: [
                { type: 'icon', name: 'Detail', handler: handlerDetail },
                { type: 'icon', name: 'Delete', handler: handlerDelete },
                { type: 'icon', name: 'Done', handler: handlerDone },
                ]
            }
            )
        },
        {
            id: shortid.generate(),
            data: createData(
                2,
                'Hello',
                'Adele',
                2,
                'Black',
                'Black',
                {
                    type: 'btn',
                    data: [
                        { type: 'icon', name: 'Detail', handler: handlerDetail },
                        { type: 'icon', name: 'Delete', handler: handlerDelete },
                        { type: 'icon', name: 'Done', handler: handlerDone },
                    ]
                }
            )
        },
    ]

    const headCells = [
        { id: 'position', numeric: false, order: false, disablePadding: true, editMode: true, label: 'Position', type: 'txt' },
        { id: 'title', numeric: false, order: false, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: false, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'request-by', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Request by', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
        { id: 'action', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'btn' },
    ];

    return (
        <>
            <PTBQueue/>
            <TablePagination headCells = {headCells} rowsData = {songList}/>
        </>

    )
}