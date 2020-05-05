import React, {useEffect} from "react";
import {ContentDetail} from "../DetailSong/Content/ContentDetail";
import {ToolsDetail} from "../DetailSong/Tools/ToolsDetail";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {withDrawer} from "../../companents/hoc/withDrawer";
import {useParams, withRouter} from "react-router";
import {
    getAllDataActionCreator,
    hideLoader, isPageUserActionCreator,
    showAlert,
    showLoader,
    toggleEditModeActionCreator
} from "../../store/action/app";
import {getAttributesDataActionCreator} from "../../store/action/modules/attributes";
import {getSongDataActionCreator, setSelectedActionCreator} from "../../store/action/modules/songs";
import {getQueueDataActionCreator} from "../../store/action/modules/queue";
import {getSavedQueueDataActionCreator} from "../../store/action/modules/savedQueue";
import {getHistoryDataActionCreator} from "../../store/action/modules/history";
import {autoLogin, getUserActionCreator} from "../../store/action/auth";

const DetailSong = props => {
    const params = useParams();
    const listSong = useSelector(state => state.songs.list)
    const attributesList = useSelector(state => state.attributes.list)

    useEffect(()=>{
        console.log(listSong)
        const userId = localStorage.getItem('userId')
        props.action.getSongData(userId)
    },[])

    return (
        <>
            <ToolsDetail uuid={params.id}/>
            <ContentDetail attributesList={attributesList} detailSong = { listSong.find(item => item.id == params.id) }/>
        </>
    )
}

const mapStateToProps = state => ({
    alert: state.app.alert,
});

const mapDispatchToProps = dispatch => {
    return {
        action: {
            getSongData: (userId) => dispatch(getSongDataActionCreator(userId)),
        }
    }
};

export default compose(
    withDrawer,
    connect(mapStateToProps, mapDispatchToProps))
(DetailSong);