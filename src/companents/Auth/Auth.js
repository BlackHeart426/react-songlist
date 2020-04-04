import React, {Component, useEffect, useState} from "react";

import {auth as firebaseAuth}  from "../../firebaseService";
import {connect} from "react-redux";
import {auth, logout} from "../../store/action/auth";
import Button from "@material-ui/core/Button";
import Login from "./Login";
import SignUp from "./SignUp";
import {Typography} from "@material-ui/core";

export function Auth(props) {



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

    const handleLogout = () => {
        props.logout()


    }

    const logoutHandler = () => {
        // this.props.logout()

    }
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        firebaseAuth.onAuthStateChanged( firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);
                setIsLogin(true)
            } else {
                console.log('not loggin')
                setIsLogin(false)
            }
        } )
    },[firebaseAuth])

    return (
        <>
            {isLogin
                ? <Typography>User</Typography>
                :  <>
                    <SignUp/>
                    <Login/>
                </>}

            <Button
                onClick={handleLogout}
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