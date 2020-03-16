import React, {useContext, useEffect} from "react";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {PTBHistory} from "./PTBHistory/PTBHistory";
import * as shortid from "shortid";
import {HistoryContext} from "../../contex/module/history/historyContext";

export const History = () => {

    function createData( title, artist, amount, requestBy, played, note) {
        return { title, artist, amount, requestBy, played, note}
    }

    const songList = [
        {
            id: shortid.generate(),
            data: createData(
                'The Kill',
                '30 Seconds To Mars',
                1,
                'Black',
                'Black',
                'note',
            )
        },
        {
            id: shortid.generate(),
            data: createData(
                'Hello',
                'Adele',
                2,
                'Black',
                'Black',
                'Black',
            )
        },
    ];

    const headCells = [
        { id: 'title', numeric: false, order: false, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: false, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'request-by', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Request by', type: 'txt' },
        { id: 'played', numeric: false, order: false, disablePadding: false, editMode: true, label: 'played', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
    ];

    const {songData, setSongData, setSelected} = useContext(HistoryContext);

    useEffect(() => {
        setSongData(songList);
        localStorage.setItem('listHistory', JSON.stringify(songList))
    },[]);

    useEffect(() => {
        console.log('songDataEff', songData);
        localStorage.setItem('listHistory', JSON.stringify(songData))
    },[songData]);


    return (
        <>
            <PTBHistory/>
            <TablePagination onSelectRow = {setSelected}   headCells = {headCells} rowsData = {songData}/>
        </>
    )
}