import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {HistoryContext} from "../../../contex/module/history/historyContext";
import {EditSong} from "./Tools/EditSong";
import {RemoveSong} from "./Tools/RemoveSong";
import {useDispatch, useSelector} from "react-redux";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBHistory = (props) => {
    const selected = useSelector(state => state.history.selected)
    const listSong = useSelector(state => state.history.list)
    const searchText = useSelector(state => state.history.searchText)
    const dispatch = useDispatch()
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <EditSong lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <RemoveSong lenSelected={lenSelected} songData={listSong} selected={selected}/>
            </Card>

        </>
    )
}