import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import {DetailInfo} from "../../../Content/Detail/DetailInfo";

export const DetailSongs = (props) => {
    const {lenSelected, detailShow} = props;

    const showDetail = () => {
        detailShow(true)
    }

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    return (
        <>
            <IconButton onClick={showDetail} disabled={showButton(lenSelected)}>
                <ErrorOutlineIcon />
            </IconButton>
        </>
    )
}