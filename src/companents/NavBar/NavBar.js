import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import Auth from "../Auth/Auth";


export const NavBar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand col-md-2" >
                React SongList
            </div>
            <div className="col-md-7">
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
            <div className="col-md-3">
                <Auth/>
            </div>
        </nav>
    )
}