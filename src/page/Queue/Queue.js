import React, {useContext, useEffect} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import * as shortid from "shortid";
import {PTBQueue} from "./PTBQueue/PTBQueue";
import {QueueContext} from "../../contex/module/queue/queueContext";

export const Queue = () => {

    function createData(position, title, artist, amount, requestBy, note) {
        return {position, title, artist, amount, requestBy, note,
            action: { type: 'btn', data: [
                    { type: 'icon', name: 'Detail', handler: handlerDetail },
                    { type: 'icon', name: 'Delete', handler: handlerDelete },
                    { type: 'icon', name: 'Done', handler: handlerDone },
                ]
            }}
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

    const headCells = [
        { id: 'position', numeric: false, order: false, disablePadding: true, editMode: true, label: 'Position', type: 'txt' },
        { id: 'title', numeric: false, order: false, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: false, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'request-by', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Request by', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
        { id: 'action', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'btn' },
    ];

    // const {songData, setSongData, setSelected} = useContext(QueueContext);

    useEffect(() => {
        setSongData(songList);
        localStorage.setItem('listQueue', JSON.stringify(songList))
    },[]);

    useEffect(() => {
        localStorage.setItem('listQueue', JSON.stringify(songData))
    },[songData]);


    return (
        <>
            <PTBQueue/>
            <TablePagination typeCheckBox={'solo'} onSelectRow = {setSelected}  headCells = {headCells} rowsData = {songData}/>
        </>

    )
}