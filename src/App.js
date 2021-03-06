import React, {useContext, useEffect, useState} from 'react';
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
import DetailSong from "./page/Songs/DetailSong";
import EditDetailSong from "./page/Songs/EditDetailSong";
import {Test} from "./page/Test";
import Songs from "./page/Songs/Songs";
import {connect, useSelector} from "react-redux";
import {getSongDataActionCreator, setSelectedActionCreator} from "./store/action/modules/songs";
import {
    getAllDataActionCreator,
    hideLoader, isPageUserActionCreator,
    showAlert,
    showLoader,
    toggleEditModeActionCreator
} from "./store/action/app";
import {getQueueDataActionCreator} from "./store/action/modules/queue";
import {getSavedQueueDataActionCreator} from "./store/action/modules/savedQueue";
import {getHistoryDataActionCreator} from "./store/action/modules/history";
import Attributes from "./page/Attributes/Attributes";
import {getAttributesDataActionCreator} from "./store/action/modules/attributes";
import SongImport from "./page/SongImport/SongImport";
import {Home} from "./page/Home";
import {autoLogin, getUserActionCreator} from "./store/action/auth";
import {NonFound} from "./page/NonFound";
import {compose} from "redux";
import {withDrawer} from "./companents/hoc/withDrawer";
import {withCheckPage} from "./companents/hoc/withCheckPage";
import {withRouter} from "react-router";

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
        marginLeft: '240px',
        flexGrow: 1,
        marginTop: '40px', //TODO не динамичекий
        padding: theme.spacing(3),
        paddingTop: '48px'
    },
    toolbar: theme.mixins.toolbar,
}));

const App = (props) => {
    const classes = useStyles();
    const [isLogin, setIsLogin] = useState(false)

    const handleCheckUser = () => {
        const currentUser = localStorage.getItem('currentUser');
        const userId = localStorage.getItem('userId');
        if (props.currentUserId === props.userId) {
            return true
        }
        return false
    }
    const userId = localStorage.getItem('userId')

    useEffect(()=>{
        console.log('123',props.isMyPage)
        props.isMyPage === false && props.action.toggleEditMode(false)
    },[props.isMyPage])

    useEffect(() => {
        props.action.autoLogin()
        props.isLogin && props.isMyPage && props.action.toggleEditMode(true)
        props.action.isMyPage(handleCheckUser())
        props.action.dataUser()
        props.currentUserId && props.action.getSongData(props.currentUserId)
        //Заполнение таблицы с песнями
        // props.action.getQueueData(); //Заполнение таблицы с очередью
        // props.action.getSavedQueueData(); //Заполнение таблицы с очередью
        // props.action.getHistoryData(); //Заполнение таблицы с очередью
        // props.action.getAttributesData(); //Заполнение таблицы с очередью
        // props.action.getAllData();

    },[props.currentUserId]);


    return (

            <div className={classes.root}>
                <CssBaseline />
                <NavBar
                    className={classes.appBar}
                />
                <main className={classes.content}>
                    <div  className={classes.toolbar}>
                        <Switch>
                            <Route exact path="/s/:userId/songs" component={Songs}/>
                                <Route path="/s/:userId/songs/detail/:id" component={DetailSong}/>
                                <Route path="/s/:userId/songs/edit/:id" component={EditDetailSong}/>
                            <Route exact path="/s/:userId/queue" component={Queue}/>
                                <Route path="/s/:userId/queue/detail/:id" component={DetailSong}/>
                            <Route exact path="/s/:userId/queue-saved" component={SavedQueue}/>
                            <Route exact path="/s/:userId/history/" component={History}/>
                            <Route exact path="/s/:userId/history/:filter/:idSong" component={History}/>
                            <Route exact component={Settings} path="/s/:userId/settings"/>
                                <Route path="/s/:userId/settings/attributes" component={Attributes} />
                                <Route path="/s/:userId/settings/song-import" component={SongImport} />
                            <Route path="/s/:userId/test" component={Test} />
                            <Route exact path="/" component={Home} />
                            <Route component={NonFound}/>
                        </Switch>
                        {props.alert && <AlertCustom text={props.alert} />}
                    </div>
                </main>
                }
            </div>
    );
};

const mapStateToProps = state => ({
    alert: state.app.alert,
    isLogin: state.app.isLogin,
    isMyPage: state.app.isPageUser,
    editMode: state.app.editMode,
    currentUserId: state.currentUser.currentUserId,
    userId: state.auth.userId

});

const mapDispatchToProps = dispatch => {
    return {
        action: {
            getAllData: () => dispatch(getAllDataActionCreator()),
            getAttributesData: () => dispatch(getAttributesDataActionCreator()),
            getSongData: userId => dispatch(getSongDataActionCreator(userId)),
            getQueueData: () => dispatch(getQueueDataActionCreator()),
            getSavedQueueData: () => dispatch(getSavedQueueDataActionCreator()),
            getHistoryData: () => dispatch(getHistoryDataActionCreator()),
            setSelected: (data) => dispatch(setSelectedActionCreator(data)),
            alert: (text) => dispatch(showAlert(text)),
            showLoader: () => dispatch(showLoader()),
            hideLoader: () => dispatch(hideLoader()),
            toggleEditMode: (data) => dispatch(toggleEditModeActionCreator(data)),
            isMyPage: (state) => dispatch(isPageUserActionCreator(state)),
            autoLogin: () => dispatch(autoLogin()),
            dataUser: () => dispatch(getUserActionCreator())
        }
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))
(App);