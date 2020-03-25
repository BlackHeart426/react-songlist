import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddSongs} from "./Tools/AddSongs";
import {EditSongs} from "./Tools/EditSongs";
import {RemoveSongs} from "./Tools/RemoveSongs";
import {DetailSongs} from "./Tools/DetailSongs";
import {AddInQueueSongs} from "./Tools/AddInQueueSongs";
import {SwitchActiveSongs} from "./Tools/SwitchActiveSongs";
import {useDispatch, useSelector} from "react-redux";
import {setSearchTextActionCreator} from "../../../store/action/modules/songs";
import {SearchField} from "../../../companents/SearchField/SearchField";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBSongs = (props) => {
    const {showActive, onActive} = props
    const selected = useSelector(state => state.songs.selected)
    const listSong = useSelector(state => state.songs.list)
    const searchText = useSelector(state => state.songs.searchText)
    const dispatch = useDispatch()
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddSongs lenSelected={lenSelected} songData={listSong} />
                <EditSongs lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <RemoveSongs lenSelected={lenSelected} songData={listSong} selected={selected} />
                <DetailSongs lenSelected={lenSelected} selected={selected} songData={listSong}/>
                <AddInQueueSongs lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <SwitchActiveSongs showActive={showActive} onActive = {onActive}/>
                <SearchField searchText={searchText} moduleActionCreator={setSearchTextActionCreator}/>
            </Card>

        </>
    )
}

