import React, {useEffect} from "react";
import {ContentDetail} from "../DetailSong/Content/ContentDetail";
import {ToolsDetail} from "../DetailSong/Tools/ToolsDetail";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {withDrawer} from "../../companents/hoc/withDrawer";

const DetailSong = props => {
    const listSong = useSelector(state => state.songs.list)
    const attributesList = useSelector(state => state.attributes.list)
     return (
        <>
            <ToolsDetail uuid={props.match.params.id}/>
            <ContentDetail attributesList={attributesList} detailSong = { listSong.find(item => item.id == props.match.params.id) }/>
        </>
    )
}
export default withDrawer(DetailSong)