import {Card} from "@material-ui/core";
import React from "react";
import {RemoveSong} from "./Tools/RemoveSong";
import {useSelector} from "react-redux";
import {AddSongToQueue} from "./Tools/AddSongToQueue";
import {SearchField} from "../../../companents/SearchField/SearchField";
import {setSearchTextSavedQueueActionCreator} from "../../../store/action/modules/savedQueue";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBSavedQueue = (props) => {
    const selected = useSelector(state => state.savedQueue.selected);
    const listSong = useSelector(state => state.savedQueue.list);
    const searchText = useSelector(state => state.songs.searchText);
    const loading = useSelector(state => state.app.loading);
    const isPageUser = useSelector(state => state.app.isPageUser)
    const lenSelected = selected.length;
    return (
        <>
            {isPageUser && <Card style={mbt10}>
                <AddSongToQueue loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <RemoveSong loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected} />
                <SearchField loading={loading} searchText={searchText} moduleActionCreator={setSearchTextSavedQueueActionCreator}/>
            </Card>}

        </>
    )
};
