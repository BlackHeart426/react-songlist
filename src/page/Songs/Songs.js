import React, {useContext, useEffect, useState} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {PTBSongs} from "./PTBSongs/PTBSongs";
import {SongsContext} from "../../contex/module/songs/songsContext";
import * as shortid from "shortid";
import {headCells} from "./headTable";
import {SongAPI} from "../../API/SongAPI";
// import * as SongAPI from "../../API/SongAPI";

export const Songs = () => {

    const requestHandler = () => {

    };

    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed, tags, action: { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }}
    }

    const song = {
        id: shortid.generate(),
    };

    const songList = [
        {
            id: shortid.generate(),
            data: createData(
                'The Kill',
                '30 Seconds To Mars',
                1,
                '1 week age',
                { type: 'tag', data: [ { name: 'Music' }] },
                // { type: 'btn', data: [ { type: 'text', name: 'Request' }] },
                // { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
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
                // { type: 'btn', data: [ { type: 'text', name: 'Request' }] },
                // { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
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
                // { type: 'btn', data: [ { type: 'text', name: 'Request' }] },
                // { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
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
                // { type: 'btn', data: [ { type: 'text', name: 'Request' }] },
                // { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
            ),
            active: true
        },
    ];

    const wrapperSong = (song) => song.list.map(item => createData(item));

    const {songData, setSongData, searchText, listSong, selected, setSelected} = useContext(SongsContext);
    const {active, setActive} = useState(false)
    let newSongData = [];

    useEffect(() => {
        setSongData();
        // const songData = SongAPI.getData();
        console.log('songData', songData);
        // wrapperSong(songData);
        // localStorage.setItem('songs', JSON.stringify(songData));
        // setSongData(songList);
    },[]);

    const updateItem = item => createData(item);


    useEffect(() => {
        console.log('songDataEff', songData)
        localStorage.setItem('songs', JSON.stringify(songData));
        // Firebaseservice.setData(songData);
        // newSongData = { ...songData };
        // newSongData.list.map(item => updateItem(item))
    },[songData])


    const handlerFilter = () => {
        let filteredNew = {...songData};
        let filtered = [];
        filtered = filteredNew.list.filter(item =>  item.data.title.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
        // console.log('songData', songData);
        filteredNew.list = filtered;
        console.log('filteredNew', filteredNew);
        return (
            filteredNew
        )
    }


    return (
        <>
            <PTBSongs showActive={active}/>
            <TablePagination onSelectRow = {setSelected} headCells = {headCells} rowsData = {handlerFilter()} showActive={active}/>
        </>
    )
};