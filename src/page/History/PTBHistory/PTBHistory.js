import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {HistoryContext} from "../../../contex/module/history/historyContext";
import {EditSong} from "./Tools/EditSong";
import {RemoveSong} from "./Tools/RemoveSong";
import {useDispatch, useSelector} from "react-redux";
import {SwitchActiveSongs} from "../../Songs/PTBSongs/Tools/SwitchActiveSongs";
import {SearchField} from "../../../companents/SearchField/SearchField";
import {setSearchTextHistoryActionCreator} from "../../../store/action/modules/history";
import {AddSongs} from "../../Songs/PTBSongs/Tools/AddSongs";
import {FilterSong} from "./Tools/FilterSong";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBHistory = (props) => {
    const selected = useSelector(state => state.history.selected)
    const listSong = useSelector(state => state.history.list)
    const searchText = useSelector(state => state.history.searchText)
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <EditSong loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <RemoveSong loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <FilterSong loading={loading}/>
                <SearchField loading={loading} searchText={searchText} moduleActionCreator={setSearchTextHistoryActionCreator}/>
            </Card>

        </>
    )
}