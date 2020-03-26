import {Card} from "@material-ui/core";
import React from "react";
import {AddSongs} from "./Tools/AddSongs";
import {EditSongs} from "./Tools/EditSongs";
import {RemoveSongs} from "./Tools/RemoveSongs";
import {useDispatch, useSelector} from "react-redux";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBAttributes = (props) => {
    const {showActive, onActive} = props;
    const selected = useSelector(state => state.songs.selected);
    const listSong = useSelector(state => state.songs.list);
    const searchText = useSelector(state => state.songs.searchText);
    const loading = useSelector(state => state.app.loading);
    const dispatch = useDispatch();
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddSongs loading={loading} lenSelected={lenSelected} songData={listSong} />
                <EditSongs loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <RemoveSongs loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected} />
            </Card>

        </>
    )
};

