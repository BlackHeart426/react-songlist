import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import DeleteIcon from "@material-ui/icons/Delete";
import Confirm from "../../../Dialog/Confirm";

let paramTest = {
    title: 'The kill',
    artist: '30 sec'
}

export const RemoveSongs = (props) => {
    const testForm = {
        data: [],
        active: false,
        selected: null
    }
    const [test, setTest] = useState(testForm);
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {selected} = props;
    const dataToConfirm = {
        title: 'Are you sure you want to delete these song?',
        content: <div><p>Title: <strong>{paramTest.title}</strong></p><p>Artist: <strong>{paramTest.artist}</strong></p></div>
    }

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


    const handlerRemoveSong = (props) => {
        // removeSong()
        console.log(props)
    }

    return (
        <>
            <IconButton onClick={handlerOpenConfirm} disabled={showButton(selected)}>
                <DeleteIcon />
            </IconButton>
            <Confirm
                show = { confirmOpened }
                onHide = { () => setConfirmOpened(false) }
                onAccept = { handlerRemoveSong }
                data = { dataToConfirm }
            />
        </>
    )
}