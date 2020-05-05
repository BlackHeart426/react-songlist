import {AUTH_LOGOUT, AUTH_SUCCESS} from "../types";
import {auth as firebaseAuth, createUserFireBase, getUserFireBase} from "../../firebaseService";
import {isLoginActionCreator} from "./app";


export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email, password,
            returnSecureToken: true
        }

        let response = false;
        if(isLogin) {
            function signIn(){
                firebaseAuth.signInWithEmailAndPassword(email, password)
                    .then(function(firebaseUser) {
                        console.log(firebaseUser)
                    })
                    .catch(error =>console.log('messageError' , error.message ))
            }
            await signIn();
        } else {
            firebaseAuth.createUserWithEmailAndPassword(email, password)
                .then(function(firebaseUser) {
                    console.log(firebaseUser)
                })
                .catch(error =>console.log('messageError' , error.message ))
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
                        dispatch(setUserActionCreator())
                        // dispatch(authSuccess(token))
                        // dispatch(autoLogout(expirationDate))
                    }
                );
            }
        });



    }
}

export function setUserActionCreator() {
    return dispatch => {
        const userId = localStorage.getItem('userId')
        const email = localStorage.getItem('email')
        createUserFireBase(userId, email)
    }
}

export function getUserActionCreator() {
    return dispatch => {
        const userId = localStorage.getItem('userId')
    //     getUserFireBase(userId)
    //         .then(res => {
    //             dispatch({type: AUTH_SUCCESS, token})
    //         })
     }
}


export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
            dispatch(isLoginActionCreator(false))
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
                dispatch(isLoginActionCreator(false))
            } else {
                dispatch(authSuccess(token))
                dispatch(isLoginActionCreator(true))
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
    localStorage.removeItem('email')
    localStorage.removeItem('songs')
    localStorage.removeItem('attributes')
    localStorage.removeItem('queue')
    localStorage.removeItem('savedqueue')
    localStorage.removeItem('history')
    localStorage.removeItem('currentuser')

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
