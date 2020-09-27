import React, {Component, useEffect, useState} from "react";
import {auth as firebaseAuth}  from "../../firebaseService";
import Login from "./Login";
import SignUp from "./SignUp";
import {Typography} from "@material-ui/core";
import SignOut from "./SignOut";
import {auth, logout} from "../../store/action/auth";
import {connect, useSelector} from "react-redux";
import User from "./User";

export function Auth(props) {

    const [isLogin, setIsLogin] = useState(false);
    // useEffect(() => {
    //     firebaseAuth.onAuthStateChanged( firebaseUser => {
    //         if (firebaseUser) {
    //             console.log(firebaseUser);
    //             setIsLogin(true)
    //         } else {
    //             console.log('not loggin')
    //             setIsLogin(false)
    //         }
    //     } )
    // },[firebaseAuth])

    useEffect(()=>{
        console.log( 'isLogin',props.isLogin)
        if(props.isLogin) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    },[props.isLogin])

    return (
        <React.Fragment>
            {isLogin
                ?   <>
                    <User isLogin={isLogin}/>
                </>
                :  <>
                    <SignUp/>
                    <Login/>
                </>
            }
        </React.Fragment>
    )
}


function mapStateToProps(state) {
    return {
        isLogin: state.app.isLogin
    }

}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin)),
        logout: () => dispatch(logout)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
