import React, {useEffect} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {PTBQueue} from "./PTBQueue/PTBQueue";
import {connect, useSelector} from "react-redux";
import {showLoader} from "../../store/action/app";
import {
    removeSongInQueueActionCreator,
    setSelectedQueueActionCreator,
    successSongActionCreator
} from "../../store/action/modules/queue";
import {addUserIdAtLink} from "../../companents/GlobalParamaters/linkWithUserId";
import {useHistory} from "react-router";
import ConteinerTableDragDrop from "../../companents/TableDragDrop/ConteinerTableDragDrop";
import moment from "moment";
import {compose} from "redux";
import {withDrawer} from "../../companents/hoc/withDrawer";

const Queue = (props) => {
    const history = useHistory();

    function createData(position, title, artist, amount, requestedBy, note) {
        return {
            position: {type: 'position'},
            title, artist, amount, requestedBy, note,
            action: { type: 'btn', data: [
                    { type: 'icon', name: 'Detail', handle: handleDetail },
                    { type: 'icon', name: 'Delete', handle: handleDelete },
                    { type: 'icon', name: 'Done', handle: handleDone },
                ]
            }}
    }


    const wrapperSong = (song) => {
        return song.map(item => {
            const {position, title, artist, amount, requestedBy, note} = item.data;
            return {id: item.id, data: createData(position, title, artist, amount, requestedBy, note)}
        })
    };

    function handleDetail(id) {
        let queueList = {...props.queueData};
        const uuidSong = queueList.list.find(item => item.id === id);
        history.push(addUserIdAtLink("/songs/detail/"+uuidSong.id))
    }

    function handleDelete(id) {
        props.action.deleteSong(id);
    }

    function handleDone(id) {
        const currentTime = new Date();
        const songState = props.queueData.list.find(item => item.id === id);
        delete songState.data.position
        songState.data.played = moment().format();//today;
        const timesPlayed = Object.values(props.songData.list).find(item => item.id === songState.idSong).data.timesPlayed;
        props.action.songPerformed(songState, timesPlayed+1);

    }

    const updateQueueData = () => {
        let queueList = {...props.queueData};
        if (Object.keys(queueList.list).length > 0) {
            let queueListTest = wrapperSong(Object.values(queueList.list));
            queueList.list = queueListTest;
            return (
                queueList
            )
        } else {
            return queueList
        }
    };

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
            <ConteinerTableDragDrop
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
        songData: state.songs,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            deleteSong: (uuid) => dispatch(removeSongInQueueActionCreator(uuid)),
            songPerformed: (song, timesPlayed) => dispatch(successSongActionCreator(song, timesPlayed)),
            setSelected: (data) => setSelectedQueueActionCreator(data),
            loader: () => dispatch(showLoader())
        }
    }
};
export default compose(
    withDrawer,
    connect(mapStateToProps, mapDispatchToProps))
(Queue);