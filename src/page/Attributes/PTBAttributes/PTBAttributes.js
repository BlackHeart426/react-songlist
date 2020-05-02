import {Card} from "@material-ui/core";
import React, {useEffect} from "react";
import {AddAttribute} from "./Tools/AddAttribute";
import {EditAttribute} from "./Tools/EditAttribute";
import {RemoveAttribute} from "./Tools/RemoveAttribute";
import {useSelector} from "react-redux";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBAttributes = (props) => {
    const selected = useSelector(state => state.attributes.selected);
    const listSong = useSelector(state => state.attributes.list);
    const loading = useSelector(state => state.app.loading);
    const lenSelected = selected.length;
    useEffect(()=>{
        console.log('listSong',listSong)
        console.log(selected)
    },[listSong])

    return (
        <>
            <Card style={mbt10}>
                <AddAttribute loading={loading} lenSelected={lenSelected} songData={listSong} />
                <EditAttribute loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <RemoveAttribute loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected} />
            </Card>

        </>
    )
};

