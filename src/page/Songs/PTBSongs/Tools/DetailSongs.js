import IconButton from "@material-ui/core/IconButton";
import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import {useHistory} from "react-router";
import {addUserIdAtLink} from "../../../../companents/GlobalParamaters/linkWithUserId";

export const DetailSongs = (props) => {
    const {lenSelected} = props;
    const history = useHistory();

    const showDetail = () => {
        history.push(addUserIdAtLink("/songs/detail/"+2525))
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