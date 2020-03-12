import React, {useContext, useEffect, useState} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {requestHandler} from "../../actionPage/Songs/rows";
import {PTBSongs} from "../../companents/PageToolbar/PTBSongs/PTBSongs";
import {SongsState} from "../../contex/module/songs/SongsState";
import {SongsContext} from "../../contex/module/songs/songsContext";
import {DrawerContext} from "../../contex/drawer/drawerContext";
import * as shortid from "shortid";
import {DetailTools} from "../../companents/Content/Detail/DetailTools";
import {DetailInfo} from "../../companents/Content/Detail/DetailInfo/DetailInfo";
import {DetailSongs} from "../../companents/PageToolbar/PTBSongs/Tools/DetailSongs";
import {DetailEdit} from "../../companents/Content/Detail/DetailEdit/DetailEdit";

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

    const songList = [
        {
            id: shortid.generate(),
            data: createData(
                'The Kill',
                '30 Seconds To Mars',
                1,
                '1 week age',
                { type: 'tag', data: [ { name: 'Music' }] },
                { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
            ),
            active: false
        },
        {
            id: shortid.generate(),
            data: createData(
                'The Kill1',
                '30 Seconds To Mars',
                1,
                '1 week age',
                { type: 'tag', data: [ { name: 'Music' }] },
                { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
            ),
            active: false
        },
        {
            id: shortid.generate(),
            data: createData(
                'Hello1',
                'Adele',
                2,
                '2 week age',
                { type: 'tag', data: [ { name: 'Music' }] },
                { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
            ),
            active: true
        },
        {
            id: shortid.generate(),
            data: createData(
                'Hello',
                'Adele',
                2,
                '2 week age',
                { type: 'tag', data: [ { name: 'Music' }] },
                { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
            ),
            active: true
        },
    ];

    const {songData, setSongData, searchText, listSong, selected} = useContext(SongsContext)
    const {active, setActive} = useState(false)
    let filtered = [];
    useEffect(() => {
        setSongData(songList)
        localStorage.setItem('rowSongs', JSON.stringify(songList))
    },[])


    useEffect(() => {
        console.log('songDataEff', songData)
        localStorage.setItem('rowSongs', JSON.stringify(songData))
    },[songData])


    const handlerFilter = () => {
        let filteredNew = {...songData};
        let filtered = [];
        console.log('songData', songData);
        filtered = filteredNew.list.filter(item =>  item.data.title.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
        // console.log('songData', songData);
        filteredNew.list = filtered;
        console.log('filteredNew', filteredNew);
        return (
            filteredNew
        )
    }

    function handlerActive() {
        console.log(active)
        //setActive(!active)
        console.log(active)
    }

    return (
        songData.detailShow
        ? <><DetailTools/>
        {/*<DetailInfo  detailSong={listSong.find(item => item.id == selected)}/></>*/}
        // <DetailEdit detailSong={listSong.find(item => item.id == selected)}/></>
        : <><PTBSongs showActive={active} onActive = {handlerActive}/><TablePagination headCells = {headCells} rowsData = {handlerFilter()} rows = {rows} showActive={active}/></>


    )
};