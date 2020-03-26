import React, {useContext, useEffect} from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";
import Queue from "./page/Queue/Queue";
import SavedQueue from "./page/SavedQueue/SavedQueue";
import History from "./page/History/History";
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
import {getSongDataActionCreator, setSelectedActionCreator} from "./store/action/modules/songs";
import {showAlert, showLoader} from "./store/action/app";
import {getQueueDataActionCreator} from "./store/action/modules/queue";
import {getSavedQueueDataActionCreator} from "./store/action/modules/savedQueue";
import {getHistoryDataActionCreator} from "./store/action/modules/history";
import Attributes from "./page/Attributes/Attributes";
import {getAttributesDataActionCreator} from "./store/action/modules/attributes";

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

    useEffect(() => {
        props.action.getSongData(); //Заполнение таблицы с песнями
        props.action.getQueueData(); //Заполнение таблицы с очередью
        props.action.getSavedQueueData(); //Заполнение таблицы с очередью
        props.action.getHistoryData(); //Заполнение таблицы с очередью
        props.action.getAttributesData(); //Заполнение таблицы с очередью

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
                            <Route exact path="/s/:userId/queue" component={Queue}/>
                                <Route path="/s/:userId/queue/detail/:id" component={DetailSong}/>
                            <Route exact path="/s/:userId/songs" component={Songs}/>
                                <Route path="/s/:userId/songs/detail/:id" component={DetailSong}/>
                                <Route path="/s/:userId/songs/edit/:id" component={EditDetailSong}/>
                            <Route exact path="/s/:userId/queue-saved" component={SavedQueue}/>
                            <Route exact path="/s/:userId/history" component={History}/>
                            <Route component={Settings} path="/s/:userId/settings"/>
                            <Route component={Attributes} path="/s/:userId/settings/attributes"/>
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
            getQueueData: () => dispatch(getQueueDataActionCreator()),
            getSavedQueueData: () => dispatch(getSavedQueueDataActionCreator()),
            getHistoryData: () => dispatch(getHistoryDataActionCreator()),
            getAttributesData: () => dispatch(getAttributesDataActionCreator()),
            // setSelected: (data) => dispatch(setSelectedActionCreator(data)),
            alert: (text) => dispatch(showAlert(text)),
            // loader: () => dispatch(showLoader())
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App)