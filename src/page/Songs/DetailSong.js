import React, {useContext, useEffect} from "react";
import {SongsContext} from "../../contex/module/songs/songsContext";
import {ContentDetail} from "../DetailSong/Content/ContentDetail";
import {ToolsDetail} from "../DetailSong/Tools/ToolsDetail";

export const DetailSong = props => {
    const {listSong, selected, setSongData, songData} = useContext(SongsContext);
    // let listSong = {...songData};
    // useEffect(() => {
    //     console.log(props.match.params.id)
    //     setSongData(); //Заполнение таблицы с песнями
    // },[]);
    // useEffect(() => {
    //     localStorage.setItem('songs', JSON.stringify(songData));
    //     console.log('list',listSong.find(item => item.id == props.match.params.id))
    // },[songData]);
    //TODO для открытия по сылке при загрузке сайта добавить loading при загрузке с firebase

    return (
        <>
            <ToolsDetail/>
            <ContentDetail detailSong = { listSong.find(item => item.id == selected) }/>
        </>
    )
}