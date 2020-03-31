import React from "react";
import {ContentDetailEdit} from "../EditDetailSong/Content/ContentDetailEdit";
import {ToolsEditDetail} from "../EditDetailSong/Tools/ToolsEditDetail";
import {useSelector} from "react-redux";



export const EditDetailSong = props => {
    const listSong = useSelector(state => state.songs.list)

    return (
        <>
            <ToolsEditDetail/>
            <ContentDetailEdit detailSong={listSong.find(item => item.id === props.match.params.id)}/>
        </>
    )
}