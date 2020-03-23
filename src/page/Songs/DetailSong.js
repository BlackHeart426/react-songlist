import React, {useContext, useEffect} from "react";
import {ContentDetail} from "../DetailSong/Content/ContentDetail";
import {ToolsDetail} from "../DetailSong/Tools/ToolsDetail";
import {useDispatch, useSelector} from "react-redux";
import {getSongDataActionCreator} from "../../store/action/modules/songs";

export const DetailSong = props => {
    const listSong = useSelector(state => state.songs.list)

    return (
        <>
            <ToolsDetail/>
            <ContentDetail detailSong = { listSong.find(item => item.id == props.match.params.id) }/>
        </>
    )
}