import React, {useEffect} from "react";
import {ContentDetailEdit} from "../EditDetailSong/Content/ContentDetailEdit";
import {ToolsEditDetail} from "../EditDetailSong/Tools/ToolsEditDetail";
import {connect, useSelector} from "react-redux";
import {withDrawer} from "../../companents/hoc/withDrawer";
import {useParams, withRouter} from "react-router";
import {compose} from "redux";
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



const EditDetailSong = props => {
    const listSong = useSelector(state => state.songs.list)
    const params = useParams();

    useEffect(()=>{
        const userId = localStorage.getItem('userId')
        props.action.getSongData(userId);
    },[])
    return (
        <>
            <ToolsEditDetail/>
            <ContentDetailEdit detailSong={listSong.find(item => item.id === params.id)}/>
        </>
    )
}

const mapStateToProps = state => ({
    userId: state.auth.userId

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
(EditDetailSong);