import React from "react";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {PTBHistory} from "./PTBHistory/PTBHistory";
import {showAlert, showLoader} from "../../store/action/app";
import {connect} from "react-redux";
import {setSelectedHistoryActionCreator} from "../../store/action/modules/history";
import moment from "moment";
import {compose} from "redux";
import {withDrawer} from "../../companents/hoc/withDrawer";


const History = (props) => {
    const wrapperSong = (song) => {
        return song.map(item => {
            const {title, artist, amount, requestedBy, played, note} = item.data;
            return {id: item.id, data: createData(title, artist, amount, requestedBy, played, note), active: item.active}
        })
    };

    function createData( title, artist, amount, requestedBy, played, note) {
        return { title, artist, amount, requestedBy, played, note}
    }

    const headCells = [
        { id: 'title', numeric: false, order: false, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'amount', numeric: true, order: false, disablePadding: false, editMode: true, label: 'Amount', type: 'txt' },
        { id: 'requested-by', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Requested by', type: 'txt' },
        { id: 'played', numeric: false, order: false, disablePadding: false, editMode: true, label: 'played', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Note', type: 'txt' },
    ];

    const handleFilter = () => {
        let songList = {...props.songData};
        if (Object.keys(songList.list).length > 0) {
            let songListTest = wrapperSong(Object.values(songList.list));
            const filteredSearch = songListTest.filter(item => {

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
                return item.data.title.toUpperCase().indexOf(search) !== -1
            });
            const filtered = filteredSearch.filter(item => {
                const attributes = {...props.filter};
                const datePlayed = item.data.played;
                let flag = false;
                const list = Object.values(attributes);
                var now = moment().format();
                list.forEach(item => {
                    debugger
                    switch (item) {
                        case "all":
                            flag = true;
                            break;
                        case "stream":
                            if( moment(now).isSame(datePlayed, 'day') !== false) {
                                flag = true;
                            }
                            break;
                        case "day":
                            if( moment(now).isSame(datePlayed, 'day') !== false) {
                                flag = true;
                            }
                            break;
                        case "month":
                            if( moment(now).isSame(datePlayed, 'month') !== false) {
                                flag = true;
                            }
                            break;
                        case "year":
                            if( moment(now).isSame(datePlayed, 'year') !== false) {
                                flag = true;
                            }
                            break;


                    }
                })

                // if (val.data.forEach(valItem => {
                //
                //     if (list.find(item => item === valItem.id)) {
                //         flag = true;
                //         return;
                //     }
                // })) ;
                if (flag) return item
            });
            filtered.forEach(item => item.data.played =  moment(item.data.played).fromNow());
            debugger
            songList.list = filtered;
            return (
                songList
            )
        } else {
            return songList
        }

    };


    return (
        <>
            <PTBHistory/>
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
        filter: state.history.filterData,
        searchText: state.history.searchText,
        songData: state.history,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            setSelected: (data) => setSelectedHistoryActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader())
        }
    }
};
export default compose(
    withDrawer,
    connect(mapStateToProps, mapDispatchToProps))
(History);