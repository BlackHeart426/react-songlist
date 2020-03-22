import React, {useContext, useEffect} from "react";
import {ContentDetail} from "../DetailSong/Content/ContentDetail";
import {ToolsDetail} from "../DetailSong/Tools/ToolsDetail";
import {useDispatch, useSelector} from "react-redux";
import {getSongDataActionCreator} from "../../store/action/songs";

export const DetailSong = props => {
    const listSong = useSelector(state => state.songs.list)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     debugger
    //     console.log(props.match.params.id)
    //     dispatch(getSongDataActionCreator()); //Заполнение таблицы с песнями
    // },[]);

    //TODO для открытия по сылке при загрузке сайта добавить loading при загрузке с firebase

    return (
        <>
            <ToolsDetail/>
            <ContentDetail detailSong = { listSong.find(item => item.id == props.match.params.id) }/>
        </>
    )
}