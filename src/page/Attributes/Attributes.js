import React, {useEffect} from "react";
import {connect} from "react-redux";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {headCells} from "./headTable";
import {PTBAttributes} from "./PTBAttributes/PTBAttributes";
import {showAlert, showLoader} from "../../store/action/app";
import {getAttributesDataActionCreator, setSelectedAttributeActionCreator} from "../../store/action/modules/attributes";
import {compose} from "redux";
import {withDrawer} from "../../companents/hoc/withDrawer";
import {useParams, withRouter} from "react-router";
import {withCheckPage} from "../../companents/hoc/withCheckPage";
import {setCurrentUserActionCreator, updateEmailCurrentUserActionCreator} from "../../store/action/currentUser";

const Attributes = (props) => {
    const params = useParams();

    useEffect(()=>{
        props.action.setUser(params.userId)
    },[])

    useEffect(()=>{
        props.action.update(params.userId)
        if(Object.values(props.attributesList).length > 0){
            console.log('success')
        } else {
            console.log('getData')
            if(!props.attributesDataNotFound){
                props.action.getAttributesData()
            }

        }
    },[props.attributesList])


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
        attributesList: state.attributes.list,
        attributesDataNotFound: state.attributes.dataNotFound,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            setSelected: (data) => setSelectedAttributeActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader()),
            getAttributesData: () => dispatch(getAttributesDataActionCreator()),
            setUser: (currentUser) => dispatch(setCurrentUserActionCreator(currentUser)),
            update: (currentUser) => dispatch(updateEmailCurrentUserActionCreator(currentUser)),
        }
    }
};
export default compose(
    withDrawer,
    withRouter,
    withCheckPage,
    connect(mapStateToProps, mapDispatchToProps))
(Attributes);