import {Card} from "@material-ui/core";
import React, {useEffect} from "react";
import {EditSong} from "./Tools/EditSong";
import {RemoveSong} from "./Tools/RemoveSong";
import { useSelector} from "react-redux";
import {SearchField} from "../../../companents/SearchField/SearchField";
import {setSearchTextHistoryActionCreator} from "../../../store/action/modules/history";
import {FilterSong} from "./Tools/FilterSong";
import {Paper} from "material-ui";
import makeStyles from "@material-ui/core/styles/makeStyles";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
};


const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        border: `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
    },
    divider: {
        alignSelf: 'stretch',
        height: 'auto',
        margin: theme.spacing(1, 0.5),
    },
}));

export const PTBHistory = (props) => {
    const selected = useSelector(state => state.history.selected);
    const listSong = useSelector(state => state.history.list);
    const searchText = useSelector(state => state.history.searchText);
    const loading = useSelector(state => state.app.loading);
    const lenSelected = selected.length;
    const classes = useStyles();

    return (
        <>
            <Card style={mbt10} elevation={0} className={classes.paper}>
                <EditSong loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <RemoveSong loading={loading} lenSelected={lenSelected} songData={listSong} selected={selected}/>
                <FilterSong params={props.params} loading={loading}/>
                <SearchField loading={loading} searchText={searchText} moduleActionCreator={setSearchTextHistoryActionCreator}/>
            </Card>

        </>
    )
};