import React, {Component, useState} from "react";

import {connect} from "react-redux";
import {auth, logout} from "../../store/action/auth";
import Button from "@material-ui/core/Button";
import {DialogSongsAddQueue} from "../Dialog/DialogSongs/DialogSongsAddQueue";
import {DialogLogin} from "../Dialog/DialogAuth/DialogLogin";
import {DialogSongsAdd} from "../Dialog/DialogSongs/DialogSongsAdd";
import {Login} from "./Login";

export function Auth() {



    const handleRegister = () => {
        // this.props.auth(
        //     'val@gmail.com',
        //     1234567,
        //     false
        // )

    }


    const handleRecovery = () => {
        // this.props.auth(
        //     'val@gmail.com',
        //     1234567,
        //     false
        // )

    }

    const logoutHandler = () => {
        // this.props.logout()

    }

    return (
        <>
            <Button
                onClick={handleRegister}
                type="submit"
                color="inherit"
            >
                Registration
            </Button>
            <Login/>

            <Button
                onClick={handleRecovery}
                type="submit"
                color="inherit"
            >
                Logout
            </Button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }

}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin)),
        logout: () => dispatch(logout)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)