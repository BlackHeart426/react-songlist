import React, {useContext, useEffect, useState} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {PTBSongs} from "./PTBSongs/PTBSongs";
import {SongsContext} from "../../contex/module/songs/songsContext";
import * as shortid from "shortid";
import {headCells} from "./headTable";

export const Songs = () => {

    const requestHandler = (id) => {
        console.log('request', id)
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
            return {id: item.id, data: createData(title, artist, timesPlayed, lastPlayed,  tags), active: item.active}
        })
    );

    const {songData, setSongData, searchText, listSong, selected, setSelected} = useContext(SongsContext);
    const {active, setActive} = useState(false)
    let newSongData = [];

    useEffect(() => {
        setSongData(); //Заполнение таблицы с песнями
    },[]);

    useEffect(() => {
        localStorage.setItem('songs', JSON.stringify(songData));
    },[songData]);


    const handlerFilter = () => {
        let songList = {...songData};
        if(songList.list.length > 0) {
            let songListTest = wrapperSong(songList.list);
            const filtered = songListTest.filter(item =>  {

                const values = Object.values(item.data);
                const search = searchText.toLowerCase();
                let flag = false;
                values.forEach(val => {
                    if(typeof val == "string") {
                        if (val.toLowerCase().indexOf(search) > -1) {
                            flag = true;
                            return;
                        }
                    }
                })
                if (flag) return item
                // return item.data.title.toUpperCase().indexOf(search) !== -1
            });
            console.log('filtered', filtered);
            songList.list = filtered;
            console.log('songList', songList);
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