import React, {useEffect} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {PTBQueue} from "./PTBQueue/PTBQueue";
import {connect} from "react-redux";
import {showLoader} from "../../store/action/app";
import {
    removeSongInQueueActionCreator,
    setSelectedQueueActionCreator,
    successSongActionCreator
} from "../../store/action/modules/queue";

const Queue = (props) => {

    function createData(position, title, artist, amount, requestBy, note) {
        return {position, title, artist, amount, requestBy, note,
            action: { type: 'btn', data: [
                    { type: 'icon', name: 'Detail', handler: handlerDetail },
                    { type: 'icon', name: 'Delete', handler: handlerDelete },
                    { type: 'icon', name: 'Done', handler: handlerDone },
                ]
            }}
    }


    const wrapperSong = (song) => {
        return song.map(item => {
            const {position, title, artist, amount, requestedBy, note} = item.data;
            return {id: item.id, data: createData(position, title, artist, amount, requestedBy, note), active: item.active}
        })
    };

    function handlerDetail(id) {
        console.log('detail', id)
    }

    function handlerDelete(id) {
        props.action.deleteSong(id);
        console.log('delete', id)
    }

    function handlerDone(id) {
        var today = new Date();
        const songState = props.queueData.list.find(item => item.id == id);
        delete songState.data.position
        songState.data.played = 'today';//today;
        props.action.songPerformed(songState);
        console.log('done', id)
    }

    const updateQueueData = () => {
        let queueList = {...props.queueData};
        //debugger
        if (Object.keys(queueList.list).length > 0) {
            let queueListTest = wrapperSong(Object.values(queueList.list));
            queueList.list = queueListTest;
            return (
                queueList
            )
        } else {
            return queueList
        }
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


    useEffect(() => {
        localStorage.setItem('listQueue', JSON.stringify(props.songData))
    },[props.songData]);


    return (
        <>
            <PTBQueue/>
            <TablePagination
                typeCheckBox={'solo'}
                onSelectRow = {(data) => props.action.setSelected(data)}
                headCells = {headCells}
                rowsData = {updateQueueData()}
            />
        </>

    )
}


const mapStateToProps = state => {
    return {
        queueData: state.queue,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            deleteSong: (uuid) => dispatch(removeSongInQueueActionCreator()),
            songPerformed: (song) => dispatch(successSongActionCreator(song)),
            setSelected: (data) => setSelectedQueueActionCreator(data),
            loader: () => dispatch(showLoader())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);