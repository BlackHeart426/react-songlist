import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddSongs} from "./Tools/AddSongs";
import {EditSongs} from "./Tools/EditSongs";
import {RemoveSongs} from "./Tools/RemoveSongs";
import {DetailSongs} from "./Tools/DetailSongs";
import {AddInQueueSongs} from "./Tools/AddInQueueSongs";
import {SwitchActiveSongs} from "./Tools/SwitchActiveSongs";
import {SongsContext} from "../../../contex/module/songs/songsContext";
import {SearchSong} from "./Tools/SearchSong"
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBSongs = (props) => {
    const {showActive, onActive} = props
    const {selected, listSong, addSong, removeSong, setSearchText, searchText, editSong, detailShow} = useContext(SongsContext);
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddSongs lenSelected={lenSelected} songData={listSong} addSong={addSong}/>
                <EditSongs lenSelected={lenSelected} songData={listSong} editSong={editSong} selected={selected}/>
                <RemoveSongs lenSelected={lenSelected} songData={listSong} removeSong={removeSong} selected={selected} />
                <DetailSongs lenSelected={lenSelected} selected={selected} detailShow={detailShow}/>
                <AddInQueueSongs lenSelected={lenSelected} songData={listSong} removeSong={removeSong} selected={selected}/>
                <SwitchActiveSongs showActive={showActive} onActive = {onActive}/>
                <SearchSong setSearchText={setSearchText} searchText={searchText}/>
            </Card>

        </>
    )
}