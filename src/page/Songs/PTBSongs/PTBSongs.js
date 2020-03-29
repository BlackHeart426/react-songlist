import {Card} from "@material-ui/core";
import React from "react";
import {AddSongs} from "./Tools/AddSongs";
import {EditSongs} from "./Tools/EditSongs";
import {RemoveSongs} from "./Tools/RemoveSongs";
import {DetailSongs} from "./Tools/DetailSongs";
import {AddInQueueSongs} from "./Tools/AddInQueueSongs";
import {SwitchActiveSongs} from "./Tools/SwitchActiveSongs";
import {useSelector} from "react-redux";
import {setSearchTextActionCreator} from "../../../store/action/modules/songs";
import {SearchField} from "../../../companents/SearchField/SearchField";
import {FilterAttributes} from "./Tools/FilerAttributes";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
};

export const PTBSongs = (props) => {
    const {showActive, onActive} = props;
    const selected = useSelector(state => state.songs.selected);
    const listSong = useSelector(state => state.songs.list);
    const searchText = useSelector(state => state.songs.searchText);
    const loading = useSelector(state => state.app.loading);
    const attributesList = useSelector(state => state.attributes.list);
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                <AddSongs
                    attributesList={attributesList}
                    loading={loading}
                    lenSelected={lenSelected}
                    songData={listSong} />
                <EditSongs
                    attributesList={attributesList}
                    loading={loading}
                    lenSelected={lenSelected}
                    songData={listSong}
                    selected={selected}/>
                <RemoveSongs
                    loading={loading}
                    lenSelected={lenSelected}
                    songData={listSong}
                    selected={selected} />
                <DetailSongs
                    loading={loading}
                    lenSelected={lenSelected}
                    selected={selected}
                    songData={listSong}/>
                <AddInQueueSongs
                    loading={loading}
                    lenSelected={lenSelected}
                    songData={listSong}
                    selected={selected}/>
                <SwitchActiveSongs
                    loading={loading}
                    showActive={showActive}
                    onActive = {onActive}/>
                <FilterAttributes
                    loading={loading}
                    lenSelected={lenSelected}
                    attributesList={attributesList} />
                <SearchField
                    loading={loading}
                    searchText={searchText}
                    moduleActionCreator={setSearchTextActionCreator}/>
            </Card>

        </>
    )
};

