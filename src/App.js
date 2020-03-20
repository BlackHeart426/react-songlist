import React, {useContext} from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";
import {Queue} from "./page/Queue/Queue";
import {SavedQueue} from "./page/SavedQueue/SavedQueue";
import {History} from "./page/History/History";
import {Settings} from "./page/Settings/Settings";
import NavBar from "./companents/NavBar/NavBar";
import DrawerCustom from "./companents/Drawer/DrawerCustom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {AlertCustom} from  './companents/Alert/Alert'
import {SongsState} from "./contex/module/songs/SongsState";
import {DetailSong} from "./page/Songs/DetailSong";
import {EditDetailSong} from "./page/Songs/EditDetailSong";
import {QueueState} from "./contex/module/queue/QueueState";
import {SavedQueueState} from "./contex/module/savedQueue/SavedQueueState";
import {HistoryState} from "./contex/module/history/HistoryState";
import {Test} from "./page/Test";
import Songs from "./page/Songs/Songs";
import {connect} from "react-redux";

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

const App = (props) => {
    const classes = useStyles();

    const SongsRoute = () => (
        <SongsState>
            <Switch>
                <Route exact path="/s/:userId/songs" component={Songs}/>
                <Route path="/s/:userId/songs/detail/:id" component={DetailSong}/>
                <Route path="/s/:userId/songs/edit/:id" component={EditDetailSong}/>
            </Switch>
        </SongsState>
    );

    const QueueRoute = () => (
        <QueueState>
            <Switch>
                <Route exact path="/s/:userId/queue" component={Queue}/>
                <Route path="/s/:userId/queue/detail/:id" component={DetailSong}/>
            </Switch>
        </QueueState>
    );

    const SavedQueueRoute = () => (
        <SavedQueueState>
            <Switch>
                <Route exact path="/s/:userId/queue-saved" component={SavedQueue}/>
            </Switch>
        </SavedQueueState>
    );

    const HistoryRoute = () => (
        <HistoryState>
            <Switch>
                <Route exact path="/s/:userId/history" component={History}/>
            </Switch>
        </HistoryState>
    );

    return (

            <div className={classes.root}>
                <CssBaseline />
                <NavBar
                    className={classes.appBar}
                />
                <DrawerCustom
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                />
                <main className={classes.content}>
                    <div  className={classes.toolbar}>
                        <Switch>
                            <Route component={QueueRoute} path="/s/:userId/queue"/>
                            <Route component={SongsRoute} path="/s/:userId/songs"/>
                            <Route component={SavedQueueRoute} path="/s/:userId/queue-saved"/>
                            <Route component={HistoryRoute} path="/s/:userId/history"/>
                            <Route component={Settings} path="/settings"/>
                            <Route component={Test} path="/s/:userId/test"/>
                        </Switch>
                        {props.alert && <AlertCustom text={props.alert} />}

                    </div>
                </main>
            </div>
    );
};

const mapStateToProps = state => ({
    alert: state.app.alert
});

export default connect(mapStateToProps)(App)