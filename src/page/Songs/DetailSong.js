import React, {useContext} from "react";
import {SongsContext} from "../../contex/module/songs/songsContext";
import {ContentDetail} from "../DetailSong/Content/ContentDetail";
import {ToolsDetail} from "../DetailSong/Tools/ToolsDetail";

export const DetailSong = props => {
    const {listSong, selected} = useContext(SongsContext);
    // let listSong = {...songData};
    return (
        <>
            <ToolsDetail/>
            <ContentDetail detailSong = { listSong.find(item => item.id == selected) }/>
        </>
    )
}