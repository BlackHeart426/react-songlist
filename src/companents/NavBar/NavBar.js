import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Auth from "../Auth/Auth";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";


class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                <div className="navbar-brand col-md-2" >
                    React SongList
                </div>
                <div className="col-md-5">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink to="/queue" className="nav-link">
                                Queue
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/songs" className="nav-link">
                                Songs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/saved-queue" className="nav-link">
                                Saved queue
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/history" className="nav-link">
                                History
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/settings" className="nav-link">
                                Settings
                            </NavLink>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <NavLink to="/about" className="nav-link">*/}
                        {/*        About*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}


                    </ul>
                </div>
                <div className="col-md-2">
                    <Button
                        className="btn-primary"
                        type="submit"
                    >
                        {localStorage.getItem('userId')}
                    </Button>
                </div>
                <div className="col-md-3">

                    <Auth/>
                </div>
            </nav>
        )
    }


}

function mapStateToProps(state) {
    return {
        nickName: state.auth.token
    }
}

export default connect(mapStateToProps)(NavBar)