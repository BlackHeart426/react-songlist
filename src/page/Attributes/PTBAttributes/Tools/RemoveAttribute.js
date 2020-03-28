import IconButton from "@material-ui/core/IconButton";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDispatch} from "react-redux";
import {removeAttributeActionCreator} from "../../../../store/action/modules/attributes";
import DialogAttributesRemove from "../../../../companents/Dialog/DialogAttributes/DialogAttributesRemove";

export const RemoveAttribute = (props) => {
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {selected, lenSelected, songData, loading} = props;
    const dispatch = useDispatch()

    const handleOpenConfirm = () => {
        setConfirmOpened(true)
    };

    function showButton(lenSelected) {
        return lenSelected === 0
    }

    const handleRemoveSong = () => {
        dispatch(removeAttributeActionCreator(selected[0]))
    };

    return (
        <>
            <IconButton onClick={handleOpenConfirm} disabled={loading === true ? true : showButton(lenSelected)}>
                <DeleteIcon />
            </IconButton>
            <DialogAttributesRemove
                show = { confirmOpened }
                onHide = { () => setConfirmOpened(false) }
                onAccept = { handleRemoveSong }
                dataSong={ songData.find(item => item.id === selected) }
            />
        </>
    )
};