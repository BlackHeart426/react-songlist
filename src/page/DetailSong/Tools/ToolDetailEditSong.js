import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import {addUserIdAtLink} from "../../../companents/GlobalParamaters/linkWithUserId";

export const ToolDetailEditSong = (props) => {
    const history = useHistory();
    const {uuid} = props;

    function handleDetailEdit() {
        history.push(addUserIdAtLink("/songs/edit/"+uuid))
    }

    return (
        <>
            <Button onClick={handleDetailEdit}>
                Edit
            </Button>
        </>
    )
}