import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import {DetailInfo} from "../../../Content/Detail/DetailInfo";

export const DetailSongs = (props) => {
    const {rowsContext} = useContext(SongsContext)
    const {lenSelected} = props;

    const addItemToRows = () => {
        return (
            <DetailInfo/>
        )
    }

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    return (
        <>
            <IconButton onClick={addItemToRows} disabled={showButton(lenSelected)}>
                <ErrorOutlineIcon />
            </IconButton>
        </>
    )
}