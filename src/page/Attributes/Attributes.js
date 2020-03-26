import React from "react";
import {connect} from "react-redux";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {headCells} from "../Songs/headTable";
import {PTBAttributes} from "./PTBAttributes/PTBAttributes";
import {showAlert, showLoader} from "../../store/action/app";
import {setSelectedAttributeActionCreator} from "../../store/action/modules/attributes";

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
        let attributesList = {...props.tagsData};
        if (Object.keys(attributesList.list).length > 0) {
            let attributesListTest = wrapperSong(Object.values(attributesList.list));
            attributesList.list = attributesListTest;
            return (
                attributesList
            )
        } else {
            return attributesList
        }

    };


    return (
        <>
            <PTBAttributes />
            {/*<TablePagination*/}
            {/*    onSelectRow = {(data) => props.action.setSelected(data)}*/}
            {/*    headCells = {headCells}*/}
            {/*    rowsData = {handleFilter()}*/}
            {/*/>*/}
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
            setSelected: (data) => setSelectedAttributeActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Attributes)