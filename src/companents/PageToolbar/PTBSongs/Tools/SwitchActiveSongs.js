import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import Switch from "@material-ui/core/Switch";

export const SwitchActiveSongs = (props) => {
    const {showActive, onActive} = props
    const [active, setActived] = useState(false);
    const {songData, toggleActive} = useContext(SongsContext)

    const handlerActive = event => {
        setActived(event.target.checked)
        // onActive(event.target.checked)
        console.log(songData.active)
        toggleActive(!songData.active)
    };

    return (
        <>
            <Switch color="primary" checked={active} onChange={handlerActive}/>
            Show inactive
        </>
    )
}