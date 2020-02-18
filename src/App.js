import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {NavBar} from "./companents/NavBar/NavBar";
import {Queue} from "./page/Queue";
import {Songs} from "./page/Songs";
import {SavedQueue} from "./page/SavedQueue";
import {HistoryQueue} from "./page/History";
import {Settings} from "./page/Settings";
import {About} from "./page/About";
import {Button} from "react-bootstrap";
import {connect} from 'react-redux'

class App extends Component {

    componentDidMount() {
        console.log(this.props.counter);
    }

    render() {


        return (
            <React.Fragment>
                <BrowserRouter>
                    <NavBar/>
                    <Switch>
                        <Route component={Queue} path="/queue" />
                        <Route component={Songs} path="/songs" />
                        <Route component={SavedQueue} path="/saved-queue" />
                        <Route component={HistoryQueue} path="/history" />
                        <Route component={Settings} path="/settings" />
                        <Route component={About} path="/about" />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
    

}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(App);
