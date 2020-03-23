import React, {useContext, useEffect, useState} from "react";
import Switch from "@material-ui/core/Switch";
import {useDispatch, useSelector} from "react-redux";
import {toggleActiveActionCreator} from "../../../../store/action/modules/songs";

export const SwitchActiveSongs = (props) => {
    const [active, setActived] = useState(false);
    // const {songData, toggleActive} = useContext(SongsContext)
    const songData = useSelector(state => state.songs)
    const dispatch = useDispatch()

    const handlerActive = event => {
        setActived(event.target.checked)
        // onActive(event.target.checked)
        console.log(songData.active)
        dispatch(toggleActiveActionCreator(!songData.active))
    };

    return (
        <>
            <Switch color="primary" checked={active} onChange={handlerActive}/>
            Show inactive
        </>
    )
}