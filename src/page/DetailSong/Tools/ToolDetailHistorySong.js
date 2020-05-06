import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {addUserIdAtLink} from "../../../companents/GlobalParamaters/linkWithUserId";
import {useHistory} from "react-router";

export const ToolDetailHistorySong = (props) => {
    const history = useHistory();
    const {uuid} = props;

    function handleOpenHistory() {
        history.push(addUserIdAtLink("/history/all/"+uuid))
    }
    return (
        <>
            <Button onClick={handleOpenHistory}>
                History
            </Button>
        </>
    )
}