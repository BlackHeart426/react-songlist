import React, {useContext, useEffect, useState} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {PTBSongs} from "./PTBSongs/PTBSongs";
import {SongsContext} from "../../contex/module/songs/songsContext";
import * as shortid from "shortid";
import {headCells} from "./headTable";

export const Songs = () => {

    const requestHandler = () => {

    };
    // { type: 'tag', data: [ { name: 'Music' }] },
    const createTags = (tags) => {
        console.log('tags' , tags);
        debugger
        if(tags) {
            tags.map(tag => {
                return `{ name: "${tag}" }`
            })
        }
    };

    const nameArr = nameTag => ( {name: nameTag} )
    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed,
            tags: { type: 'tag', data: Object.values(tags).map((tag, index) => nameArr(tag)) },
            action: { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }}
    }

    const song = {
        id: shortid.generate(),
    };

    // const songList = [
    //     {
    //         id: shortid.generate(),
    //         data: createData(
    //             'The Kill',
    //             '30 Seconds To Mars',
    //             1,
    //             '1 week age',
    //             { type: 'tag', data: [ { name: 'Music' }] },
    //             // { type: 'btn', data: [ { type: 'text', name: 'Request' }] },
    //             // { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
    //         ),
    //         active: false
    //     },
    //     {
    //         id: shortid.generate(),
    //         data: createData(
    //             'The Kill1',
    //             '30 Seconds To Mars',
    //             1,
    //             '1 week age',
    //             { type: 'tag', data: [ { name: 'Music' }] },
    //             // { type: 'btn', data: [ { type: 'text', name: 'Request' }] },
    //             // { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
    //         ),
    //         active: false
    //     },
    //     {
    //         id: shortid.generate(),
    //         data: createData(
    //             'Hello1',
    //             'Adele',
    //             2,
    //             '2 week age',
    //             { type: 'tag', data: [ { name: 'Music' }] },
    //             // { type: 'btn', data: [ { type: 'text', name: 'Request' }] },
    //             // { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
    //         ),
    //         active: true
    //     },
    //     {
    //         id: shortid.generate(),
    //         data: createData(
    //             'Hello',
    //             'Adele',
    //             2,
    //             '2 week age',
    //             { type: 'tag', data: [ { name: 'Music' }] },
    //             // { type: 'btn', data: [ { type: 'text', name: 'Request' }] },
    //             // { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] },
    //         ),
    //         active: true
    //     },
    // ];

    const wrapperSong = (song) => (
        song.map(item => {
            const {title, artist, timesPlayed, lastPlayed, tags} = item.data;
            return createData(title, artist, timesPlayed, lastPlayed,  tags)
        })
    );

    const {songData, setSongData, searchText, listSong, selected, setSelected} = useContext(SongsContext);
    const {active, setActive} = useState(false)
    let newSongData = [];

    useEffect(() => {
        setSongData(); //Заполнение таблицы с песнями
    },[]);

    useEffect(() => {
        console.log('songDataEff', songData);
        localStorage.setItem('songs', JSON.stringify(songData));
    },[songData]);


    const handlerFilter = () => {
        let songList = {...songData};
        console.log('songList', songList.list);
        if(songList.list.length > 0) {
            let filtered = [];
            // let filteredNew = songList;
            let filteredNew = wrapperSong(songList.list);
            console.log('filteredNew', filteredNew);
            filtered = filteredNew.filter(item =>  item.data.title.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
            // console.log('songData', songData);
            songList.list = filtered;
            console.log('songList.list', songList.list);
        }
        return (
            songList
        )
    };


    return (
        <>
            <PTBSongs showActive={active}/>
            <TablePagination onSelectRow = {setSelected} headCells = {headCells} rowsData = {handlerFilter()} showActive={active}/>
        </>
    )
};