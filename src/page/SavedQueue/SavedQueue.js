import React, {useContext, useEffect} from "react";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {PTBSavedQueue} from "./PTBSavedQueue/PTBSavedQueue";
import {showAlert, showLoader} from "../../store/action/app";
import {connect} from "react-redux";
import {setSelectedSavedQueueActionCreator} from "../../store/action/modules/savedQueue";

const SavedQueue = (props) => {

    const wrapperSong = (song) => {
        return song.map(item => {
            const {title, artist, amount, requestedBy, note} = item.data;
            return {id: item.id, data: createData(title, artist, amount, requestedBy, note), active: item.active}
        })
    };

    function createData( title, artist, amount, requestedBy, note) {
        return { title, artist, amount, requestedBy, note}
    }

    const headCells = [
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'requested-by', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Requested by', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
    ];
    //
    // const {songData, setSongData, searchText, listSong, selected, setSelected} = useContext(SavedQueueContext);
    const handleFilter = () => {
        let songList = {...props.songData};
        if (Object.keys(songList.list).length > 0) {
            let songListTest = wrapperSong(Object.values(songList.list));
            const filtered = songListTest.filter(item => {

                const values = Object.values(item.data);
                const search = props.searchText.toLowerCase();
                let flag = false;
                values.forEach(val => {
                    if (typeof val == "string") {
                        if (val.toLowerCase().indexOf(search) > -1) {
                            flag = true;
                            return;
                        }
                    }
                })
                if (flag) return item
            });
            songList.list = filtered;
            return (
                songList
            )
        } else {
            return songList
        }

    };

    useEffect(() => {
        localStorage.setItem('songs', JSON.stringify(props.songData));
    },[props.songData]);
    return (
        <>
            <PTBSavedQueue/>
            <TablePagination
                onSelectRow = {(data) => props.action.setSelected(data)}
                headCells = {headCells}
                rowsData = {handleFilter()}
            />
        </>
    )
}

const mapStateToProps = state => {
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