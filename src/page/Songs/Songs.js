import React, { useEffect, useState} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {PTBSongs} from "./PTBSongs/PTBSongs";
import {headCells} from "./headTable";
import {connect} from "react-redux";
import {getSongDataActionCreator, setSelectedActionCreator} from "../../store/action/songs";

const Songs = (props) => {

    const requestHandler = (id) => {
        console.log('request', id)
    };

    const nameArr = nameTag => ( {name: nameTag} )
    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed,
            tags: { type: 'tag', data: Object.values(tags).map((tag, index) => nameArr(tag)) },
            action: { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }}
    }

    const wrapperSong = (song) => (
        song.map(item => {
            const {title, artist, timesPlayed, lastPlayed, tags} = item.data;
            return {id: item.id, data: createData(title, artist, timesPlayed, lastPlayed,  tags), active: item.active}
        })
    );

    const {active, setActive} = useState(false);

    useEffect(() => {
        console.log('qqqqqqqqqqqqqqqq')
        props.action.getSongData(); //Заполнение таблицы с песнями
    },[]);

    useEffect(() => {
        console.log('props.songData', props.songData);
        localStorage.setItem('songs', JSON.stringify(props.songData));
    },[props.songData]);


    const handlerFilter = () => {
        let songList = {...props.songData};
        // console.log('songList', songList)
        if(songList.list.length > 0) {
            let songListTest = wrapperSong(songList.list);
            const filtered = songListTest.filter(item =>  {

                const values = Object.values(item.data);
                const search = props.searchText.toLowerCase();
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
            songList.list = filtered;
        }
        return (
            songList
        )
    };


    return (
        <>
            <PTBSongs showActive={active}/>
            <TablePagination onSelectRow = {() => props.action.setSelected} headCells = {headCells} rowsData = {handlerFilter()} showActive={active}/>
        </>
    )
};


const mapStateToProps = state => {
    console.log('state.songs', state.songs)
    return {
        searchText: state.songs.searchText,
        songData: state.songs,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            getSongData: getSongDataActionCreator(),
            setSelected: (data) => dispatch(setSelectedActionCreator(data)),
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs);