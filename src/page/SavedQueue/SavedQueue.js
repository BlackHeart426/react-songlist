import React, {useContext, useEffect} from "react";
import {Card} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import DeleteIcon from "@material-ui/icons/Delete";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {QueueContext} from "../../contex/module/queue/queueContext";
import {SavedQueueContext} from "../../contex/module/savedQueue/savedQueueContext";
import * as shortid from "shortid";
import {PTBSavedQueue} from "./PTBSavedQueue/PTBSavedQueue";


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
            )
        },
    ]

    const headCells = [
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'request-by', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Request by', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
    ];

    const {songData, setSongData, searchText, listSong, selected, setSelected} = useContext(SavedQueueContext);

    useEffect(() => {
        setSongData(songList);
        localStorage.setItem('listSavedQueue', JSON.stringify(songList))
    },[]);

    useEffect(() => {
        console.log('songDataEff', songData)
        localStorage.setItem('listSavedQueue', JSON.stringify(songData))
    },[songData])

    return (
        <>
            <PTBSavedQueue/>
            <TablePagination onSelectRow = {setSelected}   headCells = {headCells} rowsData = {songData}/>
        </>
    )
}