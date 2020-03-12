import IconButton from "@material-ui/core/IconButton";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import React, {useContext} from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {SongsContext} from "../../../contex/module/songs/songsContext";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import {addUserIdAtLink} from "../../../companents/GlobalParamaters/linkWithUserId";

export const ToolDetailEditSong = () => {
    const {detailShow} = useContext(SongsContext);
    const history = useHistory();

    function detailClose() {
        // detailShow(false);
        history.push(addUserIdAtLink("/songs/edit/"+2525))
    }

    return (
        <>
            <Button onClick={detailClose}>
                Edit
            </Button>
        </>
    )
}