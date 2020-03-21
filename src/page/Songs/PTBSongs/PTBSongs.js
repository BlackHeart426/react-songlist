import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddSongs} from "./Tools/AddSongs";
import {EditSongs} from "./Tools/EditSongs";
import {RemoveSongs} from "./Tools/RemoveSongs";
import {DetailSongs} from "./Tools/DetailSongs";
import {AddInQueueSongs} from "./Tools/AddInQueueSongs";
import {SwitchActiveSongs} from "./Tools/SwitchActiveSongs";
import {SongsContext} from "../../../contex/module/songs/songsContext";
import {SearchSong} from "./Tools/SearchSong";
import {useDispatch, useSelector} from "react-redux";
import {addSong, removeSong, setSearchText} from "../../../store/action/songs";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBSongs = (props) => {
    const {showActive, onActive} = props
    // const {selected, listSong, addSong, removeSong, setSearchText, searchText, editSong, detailShow} = useContext(SongsContext);
    const selected = useSelector(state => state.songs.selected)
    const listSong = useSelector(state => state.songs.list)
    const searchText = useSelector(state => state.songs.searchText)
    const dispatch = useDispatch()
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddSongs lenSelected={lenSelected} songData={listSong} />
                <EditSongs lenSelected={lenSelected} songData={listSong} editSong={() => dispatch(addSong)} selected={selected}/>
                <RemoveSongs lenSelected={lenSelected} songData={listSong} removeSong={() => dispatch(removeSong)} selected={selected} />
                <DetailSongs lenSelected={lenSelected} selected={selected} songData={listSong}/>
                <AddInQueueSongs lenSelected={lenSelected} songData={listSong} removeSong={() => dispatch(removeSong)} selected={selected}/>
                <SwitchActiveSongs showActive={showActive} onActive = {onActive}/>
                <SearchSong setSearchText={() => dispatch(setSearchText)} searchText={searchText}/>
            </Card>

        </>
    )
}

