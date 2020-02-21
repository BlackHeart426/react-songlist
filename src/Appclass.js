import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Queue} from "./page/Queue";
import {Songs} from "./page/Songs";
import {SavedQueue} from "./page/SavedQueue";
import {HistoryQueue} from "./page/History";
import {Settings} from "./page/Settings";
import {About} from "./page/About";
import {connect} from 'react-redux'
import {autoLogin} from "./store/action/auth";
import {NavBar} from "./companents/NavBar/NavBar";
import {DrawerCustom} from "./companents/Drawer/DrawerCustom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
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
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

class App extends Component {

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {

        return (
            <div >
                <NavBar/>
                <DrawerCustom />
                <div className="container pt-4" >
                    <Switch>
                        <Route component={Queue} path="/queue"/>
                        <Route component={Songs} path="/songs" />
                        <Route component={SavedQueue} path="/saved-queue" />
                        <Route component={HistoryQueue} path="/history" />
                        <Route component={Settings} path="/settings" />
                        <Route component={About} path="/about" />
                    </Switch>
                </div>
            </div>
        );
    }
    

}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
