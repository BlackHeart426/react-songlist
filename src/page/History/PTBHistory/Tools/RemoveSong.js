import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {DialogRemoveSongHistory} from "../../../../companents/Dialog/DialogHistory/DialogRemoveSongHistory";
import {useDispatch} from "react-redux";
import {removeSongHistoryActionCreator} from "../../../../store/action/modules/history";

export const RemoveSong = (props) => {
    const [confirmOpened, setConfirmOpened] = useState(false);
    const {selected, lenSelected, songData, loading} = props;
    const dispatch = useDispatch();


    const handleOpenConfirm = () => {
        setConfirmOpened(true)
    };

    function showButton(selected) {
        return selected === 0
    }

    const handleRemoveSong = () => {
        dispatch(removeSongHistoryActionCreator(selected[0]))
    };

    return (
        <>
            <IconButton onClick={handleOpenConfirm} disabled={loading === true ? true : showButton(lenSelected)}>
                <DeleteIcon />
            </IconButton>
            <DialogRemoveSongHistory
                show = { confirmOpened }
                onHide = { () => setConfirmOpened(false) }
                onAccept = { handleRemoveSong }
                dataSong={ songData.find(item => item.id === selected) }
            />
        </>
    )
};