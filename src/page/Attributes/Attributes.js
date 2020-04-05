import React, {useEffect} from "react";
import {connect} from "react-redux";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {headCells} from "./headTable";
import {PTBAttributes} from "./PTBAttributes/PTBAttributes";
import {showAlert, showLoader} from "../../store/action/app";
import {setSelectedAttributeActionCreator} from "../../store/action/modules/attributes";
import {compose} from "redux";
import {withDrawer} from "../../companents/hoc/withDrawer";

const Attributes = (props) => {

    function createData(id, name, image, active, showInTable, priority, ofSongs) {
        return {
            name,
            image: { type: 'tags', data: [{url: image, id: id}] },
            active, showInTable, priority, ofSongs}
    }

    const wrapperSong = (song) => {
        return song.map(item => {
            const {name, image, active, showInTable, priority, ofSongs} = item.data;
            return {id: item.id, data: createData(
                    item.id, name, image, active == 1 ? 'yes' : 'no', showInTable == 1 ? 'yes' : 'no', priority, ofSongs)}
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
export default compose(
    withDrawer,
    connect(mapStateToProps, mapDispatchToProps))
(Attributes);