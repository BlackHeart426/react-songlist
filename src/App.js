import React, {useContext} from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";
import {Queue} from "./page/Queue";
import {Songs} from "./page/Songs/Songs";
import {SavedQueue} from "./page/SavedQueue";
import {HistoryQueue} from "./page/History";
import {Settings} from "./page/Settings";
import {About} from "./page/About";
import NavBar from "./companents/NavBar/NavBar";
import DrawerCustom from "./companents/Drawer/DrawerCustom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {AlertCustom} from  './companents/Alert/Alert'
import {SongsState} from "./contex/module/songs/SongsState";
import {DrawerContext} from "./contex/drawer/drawerContext";
import {DetailSong} from "./page/Songs/DetailSong";
import {EditDetailSong} from "./page/Songs/EditDetailSong";

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        marginTop: '40px',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        marginTop: '40px', //TODO не динамичекий
        padding: theme.spacing(3),
        paddingTop: '48px'
    },
    toolbar: theme.mixins.toolbar,
}));

export const App = () => {
    const classes = useStyles();
    const { toggleEditMode, statusEditMode, toggleOpenDrawer, statusOpenDrawer } = useContext(DrawerContext)

    const SongsRouter = () => (
        <Switch>
            <Route exact path="/songs" component={Songs}/>
            <Route path="/songs/detail/:id" component={DetailSong}/>
            <Route path="/songs/edit/:id" component={EditDetailSong}/>
        </Switch>
    )

    return (

            <div className={classes.root}>
                <CssBaseline />
                <NavBar
                    toggleOpenDrawer = {toggleOpenDrawer}
                    statusOpenDrawer = {statusOpenDrawer}
                    className={classes.appBar}
                />
                <DrawerCustom
                    toggleEditMode = {toggleEditMode}
                    statusEditMode = {statusEditMode}
                    toggleOpenDrawer = {toggleOpenDrawer}
                    statusOpenDrawer = {statusOpenDrawer}
                    className={classes.drawer}
                    classes={{
                    paper: classes.drawerPaper,
                     }}
                />
                <main className={classes.content}>
                    <div  className={classes.toolbar}>
                        <Switch>
                            <Route component={Queue} path="/queue"/>
                            <SongsState><Route component={SongsRouter} path="/songs" /></SongsState>
                            <Route component={SavedQueue} path="/saved-queue" />
                            <Route component={HistoryQueue} path="/history" />
                            <Route component={Settings} path="/settings" />
                            <Route component={About} path="/about" />
                        </Switch>
                        <AlertCustom text={'Test'}/>
                    </div>
                </main>
            </div>
    );
}
