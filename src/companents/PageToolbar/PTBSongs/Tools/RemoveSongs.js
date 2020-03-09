import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogSongsRemove from "../../../Dialog/DialogSongs/DialogSongsRemove";

export const RemoveSongs = (props) => {
    const testForm = {
        data: [],
        active: false,
        selected: null
    }
    const [test, setTest] = useState(testForm);
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {removeSong, selected, lenSelected} = props;


    const handlerOpenConfirm = () => {
        setConfirmOpened(true)
        const newTestForm = {
            data: ['asd'],
            active: true,
            selected: 1
        }
        setTest(newTestForm)
        console.log(test)
    }

    function showButton(selected) {
        return selected != 0 ? false : true
    }

    const handlerRemoveSong = () => {
        console.log('selected123', selected[0])
        removeSong(selected[0])
    }

    return (
        <>
            <IconButton onClick={handlerOpenConfirm} disabled={showButton(lenSelected)}>
                <DeleteIcon />
            </IconButton>
            <DialogSongsRemove
                show = { confirmOpened }
                onHide = { () => setConfirmOpened(false) }
                onAccept = { handlerRemoveSong }
            />
        </>
    )
}