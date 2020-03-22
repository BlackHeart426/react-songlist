import IconButton from "@material-ui/core/IconButton";
import React, {useContext} from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router";
import {addUserIdAtLink} from "../../../companents/GlobalParamaters/linkWithUserId";

export const ToolEditDetailBack = () => {
    const history = useHistory();

    function detailClose() {
        history.push(addUserIdAtLink("/songs/detail/"+2525))
    }

    return (
        <>
            <IconButton onClick={detailClose}>
                <ArrowBackIcon />
            </IconButton>
        </>
    )
};