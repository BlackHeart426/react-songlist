import IconButton from "@material-ui/core/IconButton";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import React, {useContext} from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {SongsContext} from "../../../contex/module/songs/songsContext";
import {useHistory} from "react-router";

export const ToolDetailBack = () => {
    const {detailShow} = useContext(SongsContext);
    const history = useHistory();

    function detailClose() {
        // detailShow(false);
        history.push("/songs")
    }

    return (
        <>
            <IconButton onClick={detailClose}>
                <ArrowBackIcon />
            </IconButton>
        </>
    )
};