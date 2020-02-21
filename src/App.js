import React from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";
import {Queue} from "./page/Queue";
import {Songs} from "./page/Songs";
import {SavedQueue} from "./page/SavedQueue";
import {HistoryQueue} from "./page/History";
import {Settings} from "./page/Settings";
import {About} from "./page/About";
import {NavBar} from "./companents/NavBar/NavBar";
import {DrawerCustom} from "./companents/Drawer/DrawerCustom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

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
    },
    toolbar: theme.mixins.toolbar,
}));

export const App = () => {
    const classes = useStyles();

        return (
            <div className={classes.root}>
                <CssBaseline />
                <NavBar className={classes.appBar}/>
                <DrawerCustom
                    className={classes.drawer}
                    classes={{
                    paper: classes.drawerPaper,
                     }}
                />
                <main className={classes.content}>
                    <div  className={classes.toolbar}>
                        <Switch>
                            <Route component={Queue} path="/queue"/>
                            <Route component={Songs} path="/songs" />
                            <Route component={SavedQueue} path="/saved-queue" />
                            <Route component={HistoryQueue} path="/history" />
                            <Route component={Settings} path="/settings" />
                            <Route component={About} path="/about" />
                        </Switch>
                    </div>
                </main>
            </div>
        );
    }
