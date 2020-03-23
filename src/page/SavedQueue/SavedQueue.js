import React, {useContext, useEffect} from "react";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {PTBSavedQueue} from "./PTBSavedQueue/PTBSavedQueue";
import {showAlert, showLoader} from "../../store/action/app";
import {connect} from "react-redux";
import {setSelectedSavedQueueActionCreator} from "../../store/action/modules/savedQueue";

const SavedQueue = (props) => {

    const wrapperSong = (song) => {
        return song.map(item => {
            const {title, artist, timesPlayed, lastPlayed, tags} = item.data;
            return {id: item.id, data: createData(title, artist, timesPlayed, lastPlayed, tags), active: item.active}
        })
    };

    function createData( title, artist, amount, requestBy, note) {
        return { title, artist, amount, requestBy, note}
    }

    const headCells = [
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'request-by', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Request by', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
    ];
    //
    // const {songData, setSongData, searchText, listSong, selected, setSelected} = useContext(SavedQueueContext);


    useEffect(() => {
        console.log('props.songData',props.songData)
        localStorage.setItem('songs', JSON.stringify(props.songData));
    },[props.songData]);
    return (
        <>
            <PTBSavedQueue/>
            <TablePagination
                onSelectRow = {(data) => props.action.setSelected(data)}
                headCells = {headCells}
                rowsData = {props.songData}
            />
        </>
    )
}

const mapStateToProps = state => {
    console.log('songData', state.songs)
    return {
        searchText: state.savedQueue.searchText,
        songData: state.savedQueue,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            setSelected: (data) => setSelectedSavedQueueActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedQueue);