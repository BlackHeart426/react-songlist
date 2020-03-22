import React, {useContext, useEffect} from "react";
import {ContentDetailEdit} from "../EditDetailSong/Content/ContentDetailEdit";
import {ToolsEditDetail} from "../EditDetailSong/Tools/ToolsEditDetail";
import {useDispatch, useSelector} from "react-redux";
import {getSongDataActionCreator} from "../../store/action/songs";



export const EditDetailSong = props => {
    const listSong = useSelector(state => state.songs.list)
    const dispatch = useDispatch()
    useEffect(() => {
        debugger
        console.log(props.match.params.id)
        dispatch(getSongDataActionCreator()); //Заполнение таблицы с песнями
    },[]);

    return (
        <>
            <ToolsEditDetail/>
            <ContentDetailEdit detailSong={listSong.find(item => item.id == props.match.params.id)}/>
        </>
    )
}