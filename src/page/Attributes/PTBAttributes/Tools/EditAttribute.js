import IconButton from "@material-ui/core/IconButton";
import React, {useEffect, useState} from "react";
import EditIcon from "@material-ui/icons/Edit";
import {useDispatch} from "react-redux";
import {editAttributeActionCreator} from "../../../../store/action/modules/attributes";
import {DialogAttributesEdit} from "../../../../companents/Dialog/DialogAttributes/DialogAttributesEdit";

export const EditAttribute = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, songData, selected, loading} = props;
    const dispatch = useDispatch()

    function showButton(lenSelected) {
        return lenSelected !== 1
    }

    function createData(name, image, active, showInTable, priority, ofSongs) {
        return {name, image, active, showInTable, priority, ofSongs }
    }

    const handleEditRows = () => {
        setDialogOpened(true)
    }

    const handleEditRowsAttribute = (property) => {
        const {name, image, active, showInTable, priority, ofSongs} = property;
        const newAttribute = {
            id: selected[0],
            data: createData(
                name,
                image,
                active,
                showInTable,
                priority,
                ofSongs,
            ),
            active: active
        }
        console.log(newAttribute)
        dispatch(editAttributeActionCreator(newAttribute))
    }

    return (
        <>
            <IconButton onClick={handleEditRows} disabled={loading === true ? true : showButton(lenSelected)}>
                <EditIcon />
            </IconButton>
            <DialogAttributesEdit onAddAttribute={ handleEditRowsAttribute } dataSong={Object.values(songData).find(item => item.id === selected[0])} show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}