import React, {useContext, useEffect} from "react";
import {ContentDetail} from "../DetailSong/Content/ContentDetail";
import {ToolsDetail} from "../DetailSong/Tools/ToolsDetail";
import {useDispatch, useSelector} from "react-redux";
import {getSongDataActionCreator} from "../../store/action/songs";

export const DetailSong = props => {
    const selected = useSelector(state => state.songs.selected)
    const listSong = useSelector(state => state.songs.list)
    const dispatch = useDispatch()
    // const {listSong, selected, setSongData, songData} = useContext(SongsContext);
    // let listSong = {...songData};
    useEffect(() => {
        debugger
        console.log(props.match.params.id)
        dispatch(getSongDataActionCreator()); //Заполнение таблицы с песнями
    },[]);
    // useEffect(() => {
    //     localStorage.setItem('songs', JSON.stringify(songData));
    //     console.log('list',listSong.find(item => item.id == props.match.params.id))
    // },[songData]);
    //TODO для открытия по сылке при загрузке сайта добавить loading при загрузке с firebase

    return (
        <>
            <ToolsDetail/>
            <ContentDetail detailSong = { listSong.find(item => item.id == props.match.params.id) }/>
        </>
    )
}