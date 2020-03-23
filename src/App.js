import React, {useContext, useEffect} from 'react';
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
import {DetailSong} from "./page/Songs/DetailSong";
import {EditDetailSong} from "./page/Songs/EditDetailSong";
import {Test} from "./page/Test";
import Songs from "./page/Songs/Songs";
import {connect, useSelector} from "react-redux";
import {getSongDataActionCreator, setSelectedActionCreator} from "./store/action/songs";
import {showAlert, showLoader} from "./store/action/app";

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

    // let loading = true
    // setTimeout(()=>{loading = false},3000)
    // const SongsRoute = () => {
    //     // <SongsState>
    //     // console.log('switch')
    //     return <Switch>
    //         <Route exact path="/s/:userId/songs/" component={Songs}/>
    //         <Route path="/s/:userId/songs/detail/:id" component={DetailSong}/>
    //         <Route path="/s/:userId/songs/edit/:id" component={EditDetailSong}/>
    //     </Switch>
    //     // </SongsState>
    // };
    //
    // const QueueRoute = () => (
    //     <QueueState>
    //         <Switch>
    //             <Route exact path="/s/:userId/queue" component={Queue}/>
    //             <Route path="/s/:userId/queue/detail/:id" component={DetailSong}/>
    //         </Switch>
    //     </QueueState>
    // );
    //
    // const SavedQueueRoute = () => (
    //     <SavedQueueState>
    //         <Switch>
    //             <Route exact path="/s/:userId/queue-saved" component={SavedQueue}/>
    //         </Switch>
    //     </SavedQueueState>
    // );
    //
    // const HistoryRoute = () => (
    //     <HistoryState>
    //         <Switch>
    //             <Route exact path="/s/:userId/history" component={History}/>
    //         </Switch>
    //     </HistoryState>
    // );

    useEffect(() => {
        // props.action.alert('asd')
        // props.action.alert('Hi')
        // props.showAlert('hi')
        props.action.getSongData(); //Заполнение таблицы с песнями
        // dispatch(showLoader())

    },[]);

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
                            {/*<Route component={QueueRoute} path="/s/:userId/queue"/>*/}
                            <Route exact path="/s/:userId/queue" component={Queue}/>
                                <Route path="/s/:userId/queue/detail/:id" component={DetailSong}/>
                            <Route exact path="/s/:userId/songs" component={Songs}/>
                                <Route path="/s/:userId/songs/detail/:id" component={DetailSong}/>
                                <Route path="/s/:userId/songs/edit/:id" component={EditDetailSong}/>
                            {/*<Route component={SongsRoute} path="/s/:userId/songs"/>*/}
                            {/*<Route component={SavedQueueRoute} path="/s/:userId/queue-saved"/>*/}
                            <Route exact path="/s/:userId/queue-saved" component={SavedQueue}/>
                            {/*<Route component={HistoryRoute} path="/s/:userId/history"/>*/}
                            <Route exact path="/s/:userId/history" component={History}/>
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

const mapDispatchToProps = dispatch => {
    return {
        action: {
            getSongData: () => dispatch(getSongDataActionCreator()),
            // setSelected: (data) => dispatch(setSelectedActionCreator(data)),
            alert: (text) => dispatch(showAlert(text)),
            // loader: () => dispatch(showLoader())
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App)