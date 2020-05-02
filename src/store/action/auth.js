import axios from 'axios';
import {AUTH_LOGOUT, AUTH_SUCCESS} from "../types";
import {auth as firebaseAuth} from "../../firebaseService";
import {useState} from "react";
import {isLoginActionCreator} from "./app";

export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email, password,
            returnSecureToken: true
        }

        // let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAfhz1Gqiu7HXMBMdGXYwKuEnSdxjWhj50'
        let response = false;
        if(isLogin) {
            function signIn(){
                firebaseAuth.signInWithEmailAndPassword(email, password)
                    .then(function(firebaseUser) {

                    })
                    .catch(error =>console.log('messageError' , error.message ))
            }
            await signIn();
            // url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAfhz1Gqiu7HXMBMdGXYwKuEnSdxjWhj50'
        } else {
            response = firebaseAuth.createUserWithEmailAndPassword(email, password);
        }

        firebaseAuth.onAuthStateChanged(function(user) {
            if (user) {
                const uid = user.uid
                const email = user.email;
                const expiresIn = user.metadata.a;
                const token = user.getIdToken().then(
                    function(token){
                        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)

                        localStorage.setItem('token', token)
                        localStorage.setItem('userId', uid)
                        localStorage.setItem('expirationDate', expirationDate)
                        localStorage.setItem('email', email)
                        dispatch(isLoginActionCreator(true))
                        // dispatch(authSuccess(token))
                        // dispatch(autoLogout(expirationDate))
                    }
                );
            }
        });



    }
}


export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}

export function logout() {
    firebaseAuth.signOut();
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')

    return dispatch => {
        dispatch(isLoginActionCreator(false))
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}
