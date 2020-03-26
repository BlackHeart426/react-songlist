import React, {useEffect} from "react";
import {connect} from "react-redux";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {headCells} from "./headTable";
import {PTBAttributes} from "./PTBAttributes/PTBAttributes";
import {showAlert, showLoader} from "../../store/action/app";
import {setSelectedAttributeActionCreator} from "../../store/action/modules/attributes";

const Attributes = (props) => {

    function createData(name, image, active, showInTable, priority, ofSongs) {
        return {name, image, active, showInTable, priority, ofSongs}
    }

    const wrapperSong = (song) => {
        return song.map(item => {
            const {name, image, active, showInTable, priority, ofSongs} = item.data;
            return {id: item.id, data: createData(name, image, active, showInTable, priority, ofSongs)}
        })
    };
    useEffect(() => {
        // props.action.getSongData(); //Заполнение таблицы с песнями
        // dispatch(showLoader())

    },[]);

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
            setSelected: (data) => setSelectedAttributeActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Attributes)