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
import {QueueState} from "./contex/module/queue/QueueState";

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
        <SongsState>
            <Switch>
                <Route exact path="/s/:userId/songs" component={Songs}/>
                <Route path="/s/:userId/songs/detail/:id" component={DetailSong}/>
                <Route path="/s/:userId/songs/edit/:id" component={EditDetailSong}/>
            </Switch>
        </SongsState>
    );

    const QueueRouter = () => (
        <QueueState>
            <Switch>
                <Route exact path="/s/:userId/queue" component={Queue}/>
                <Route path="/s/:userId/queue/detail/:id" component={DetailSong}/>
            </Switch>
        </QueueState>
    );

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
                            <Route component={QueueRouter} path="/s/:userId/queue"/>
                            <Route component={SongsRouter} path="/s/:userId/songs"/>
                            <Route component={SavedQueue} path="/saved-queue"/>
                            <Route component={HistoryQueue} path="/history"/>
                            <Route component={Settings} path="/settings"/>
                        </Switch>
                        <AlertCustom text={'Test'}/>
                    </div>
                </main>
            </div>
    );
}
