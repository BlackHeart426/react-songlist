import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import {addUserIdAtLink} from "../../../companents/GlobalParamaters/linkWithUserId";

export const ToolDetailEditSong = () => {
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