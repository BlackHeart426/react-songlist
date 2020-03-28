import IconButton from "@material-ui/core/IconButton";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {removeSongSavedQueueActionCreator} from "../../../../store/action/modules/savedQueue";
import {useDispatch} from "react-redux";

export const RemoveSong = (props) => {
    const {selected, lenSelected, loading} = props;
    const dispatch = useDispatch();

    function showButton(selected) {
        return selected === 0
    }

    const handleMoveSong = () => {
        dispatch(removeSongSavedQueueActionCreator(selected[0]))
    };

    return (
        <>
            <IconButton onClick={handleMoveSong} disabled={loading === true ? true : showButton(lenSelected)}>
                <DeleteIcon />
            </IconButton>
            {/*<DialogSongsRemove*/}
            {/*    show = { confirmOpened }*/}
            {/*    onHide = { () => setConfirmOpened(false) }*/}
            {/*    onAccept = { handleemoveSong }*/}
            {/*    dataSong={ songData.find(item => item.id == selected) }*/}
            {/*/>*/}
        </>
    )
}