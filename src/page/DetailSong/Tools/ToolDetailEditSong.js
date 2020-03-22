import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import {addUserIdAtLink} from "../../../companents/GlobalParamaters/linkWithUserId";
import {useSelector} from "react-redux";

export const ToolDetailEditSong = () => {
    const history = useHistory();
    const listSong = useSelector(state => state.songs.list)
    const selected = useSelector(state => state.songs.selected)

    function handlerDetailEdit() {

        // detailShow(false);
        const uuidSong = listSong.find(item => item.id === selected[0]);
        history.push(addUserIdAtLink("/songs/edit/"+uuidSong.id))
    }

    return (
        <>
            <Button onClick={handlerDetailEdit}>
                Edit
            </Button>
        </>
    )
}