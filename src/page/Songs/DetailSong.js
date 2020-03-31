import React, {useEffect} from "react";
import {ContentDetail} from "../DetailSong/Content/ContentDetail";
import {ToolsDetail} from "../DetailSong/Tools/ToolsDetail";
import { useSelector} from "react-redux";

export const DetailSong = props => {
    const listSong = useSelector(state => state.songs.list)
    const attributesList = useSelector(state => state.attributes.list)

     return (
        <>
            <ToolsDetail uuid={props.match.params.id}/>
            <ContentDetail attributesList={attributesList} detailSong = { listSong.find(item => item.id == props.match.params.id) }/>
        </>
    )
}