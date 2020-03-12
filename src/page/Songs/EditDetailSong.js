import React, {useContext} from "react";
import {SongsContext} from "../../contex/module/songs/songsContext";
import {ToolDetailEditSong} from "../DetailSong/Tools/ToolDetailEditSong";
import {ContentDetailEdit} from "../EditDetailSong/Content/ContentDetailEdit";



export const EditDetailSong = props => {
    const {listSong, selected} = useContext(SongsContext);

    return (
        <>
            <ToolDetailEditSong/>
            <ContentDetailEdit detailSong={listSong.find(item => item.id == selected)}/>
        </>
    )
}