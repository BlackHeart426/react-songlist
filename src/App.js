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
import NavBar from "./companents/NavBar/NavBar";

class App extends Component {

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {


        return (
            <React.Fragment>
                <BrowserRouter>
                    <NavBar/>
                    <div className="container pt-4">
                        <Switch>
                            <Route component={Queue} path="/queue" />
                            <Route component={Songs} path="/songs" />
                            <Route component={SavedQueue} path="/saved-queue" />
                            <Route component={HistoryQueue} path="/history" />
                            <Route component={Settings} path="/settings" />
                            <Route component={About} path="/about" />
                        </Switch>
                    </div>
                </BrowserRouter>
            </React.Fragment>
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
