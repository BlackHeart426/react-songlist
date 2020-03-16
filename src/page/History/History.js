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
    ];

    const headCells = [
        { id: 'title', numeric: false, order: false, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: false, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'request-by', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Request by', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
        { id: 'action', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'btn' },
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
            <TablePagination  typeCheckBox={'solo'} onSelectRow = {setSelected}   headCells = {headCells} rowsData = {songData}/>
        </>
    )
}