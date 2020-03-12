import IconButton from "@material-ui/core/IconButton";
import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import {useHistory} from "react-router";

export const DetailSongs = (props) => {
    const {lenSelected, detailShow, dataSong} = props;
    const history = useHistory();

    const showDetail = () => {
        history.push("/songs/detail-song/"+2525)
        // detailShow(true)
    }

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }


    return (
        <IconButton onClick={showDetail} disabled={showButton(lenSelected)}>
            <ErrorOutlineIcon />
        </IconButton>
    )
}