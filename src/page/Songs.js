import React, {useContext, useEffect} from "react";
import TablePagination from '../companents/TablePagination/ComponentTablePagination'
import {requestHandler} from "../actionPage/Songs/rows";
import {PTBSongs} from "../companents/PageToolbar/PTBSongs/PTBSongs";
import {SongsState} from "../contex/module/songs/SongsState";
import {SongsContext} from "../contex/module/songs/songsContext";
import {EditModeContext} from "../contex/editMode/editNodeContext";

export function createData(title, artist, timesPlayed, lastPlayed, tags, action) {
    return {title, artist, timesPlayed, lastPlayed, tags, action}
}

export const Songs = () => {


    const headCells = [
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'times-played', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Times played', type: 'txt' },
        { id: 'last-played', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Last Played', type: 'txt' },
        { id: 'tags', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'tag' },
        { id: 'action', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'btn' },
    ];

    const rows = [
        createData(
        'The Kill',
        '30 Seconds To Mars',
        1,
        '1 week age',
        { name: 'Music',  type: 'tag' },
        { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }
        )
    ]

    const rowsTest = [
        {
            data: createData(
                'The Kill',
                '30 Seconds To Mars',
                1,
                '1 week age',
                { name: 'Music',  type: 'tag' },
                { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
            ),
            active: false
        },
        {
            data: createData(
                'Hello',
                'Adele',
                2,
                '2 week age',
                { name: 'Music', type: 'tag' },
                { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
            ),
            active: true
        },
    ];

    const {rowsSongs, setRows} = useContext(SongsContext)

    useEffect(() => {
        setRows(rowsTest)
        localStorage.setItem('rowSongs', JSON.stringify(rowsTest))
    },[])


    useEffect(() => {
        localStorage.setItem('rowSongs', JSON.stringify(rowsSongs))
    },[rowsSongs])

    return (
        <div>
            <h1>Songs</h1>
            <PTBSongs/>
            <TablePagination headCells = {headCells} rowsData = {rowsSongs}  rows = {rows} />
        </div>
    )
};