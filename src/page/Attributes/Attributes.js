import React from "react";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {headCells} from "../Songs/headTable";
import {PTBAttributes} from "./PTBAttributes/PTBAttributes";
import {getSongDataActionCreator, setSelectedActionCreator} from "../../store/action/modules/songs";
import {showAlert, showLoader} from "../../store/action/app";

const Attributes = (props) => {

    function createData(title, artist, timesPlayed, lastPlayed) {
        return {title, artist, timesPlayed, lastPlayed}
    }

    const wrapperSong = (song) => {
        return song.map(item => {
            const {title, artist, timesPlayed, lastPlayed, tags} = item.data;
            return {id: item.id, data: createData(title, artist, timesPlayed, lastPlayed, tags), active: item.active}
        })
    };

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
                // return item.data.title.toUpperCase().indexOf(search) !== -1
            });
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
            <PTBAttributes />
            <TablePagination
                onSelectRow = {(data) => props.action.setSelected(data)}
                headCells = {headCells}
                rowsData = {handleFilter()}
            />
        </>
    )
};


const mapStateToProps = state => {
    return {
        tagsData: state.attributes,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            getSongData: () => dispatch(getSongDataActionCreator()),
            setSelected: (data) => setSelectedActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Attributes)