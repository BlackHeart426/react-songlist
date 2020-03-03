import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import Switch from "@material-ui/core/Switch";

export const SwitchActiveSongs = (props) => {
    const {showActive, onActive} = props
    const [active, setActived] = useState(false);

    const handlerActive = event => {
        console.log(event.target.checked)
        setActived(event.target.checked)
        onActive(event.target.checked)
    };

    return (
        <>
            <Switch color="primary" checked={active} onChange={handlerActive}/>
            Show inactive
        </>
    )
}