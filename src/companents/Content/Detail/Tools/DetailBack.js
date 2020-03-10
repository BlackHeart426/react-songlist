import IconButton from "@material-ui/core/IconButton";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import React, {useContext} from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {SongsContext} from "../../../../contex/module/songs/songsContext";

export const DetailBack = () => {
    const {detailShow} = useContext(SongsContext)

    function detailClose() {
        detailShow(false)
    }

    return (
        <>
            <IconButton onClick={detailClose}>
                <ArrowBackIcon />
            </IconButton>
        </>
    )
}