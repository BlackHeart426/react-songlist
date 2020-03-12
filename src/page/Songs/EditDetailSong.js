import React, {useContext} from "react";
import {SongsContext} from "../../contex/module/songs/songsContext";
import {ContentDetailEdit} from "../EditDetailSong/Content/ContentDetailEdit";
import {ToolsEditDetail} from "../EditDetailSong/Tools/ToolsEditDetail";



export const EditDetailSong = props => {
    const {listSong, selected} = useContext(SongsContext);

    return (
        <>
            <ToolsEditDetail/>
            <ContentDetailEdit detailSong={listSong.find(item => item.id == selected)}/>
        </>
    )
}