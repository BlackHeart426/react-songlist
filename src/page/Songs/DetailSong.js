import React from "react";
import {ContentDetail} from "../DetailSong/Content/ContentDetail";
import {ToolsDetail} from "../DetailSong/Tools/ToolsDetail";
import { useSelector} from "react-redux";

export const DetailSong = props => {
    const listSong = useSelector(state => state.songs.list)

    return (
        <>
            <ToolsDetail uuid={props.match.params.id}/>
            <ContentDetail detailSong = { listSong.find(item => item.id == props.match.params.id) }/>
        </>
    )
}