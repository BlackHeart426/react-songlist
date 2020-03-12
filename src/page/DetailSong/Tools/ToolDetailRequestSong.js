import IconButton from "@material-ui/core/IconButton";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import React, {useContext} from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {SongsContext} from "../../../contex/module/songs/songsContext";
import Button from "@material-ui/core/Button";

export const ToolDetailRequestSong = () => {
    const {detailShow} = useContext(SongsContext)

    function detailClose() {
        detailShow(false)
    }

    return (
        <>
            <Button onClick={detailClose}>
                Request
            </Button>
        </>
    )
}