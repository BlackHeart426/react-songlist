import React, {useContext} from "react";
import {ContentDetailEdit} from "../EditDetailSong/Content/ContentDetailEdit";
import {ToolsEditDetail} from "../EditDetailSong/Tools/ToolsEditDetail";



export const EditDetailSong = props => {

    return (
        <>
            <ToolsEditDetail/>
            {/*<ContentDetailEdit detailSong={listSong.find(item => item.id == selected)}/>*/}
        </>
    )
}