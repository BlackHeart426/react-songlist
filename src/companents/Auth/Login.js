import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {DialogLogin} from "../Dialog/DialogAuth/DialogLogin";
import {auth, logout} from "../../store/action/auth";
import {auth as firebaseAuth} from "../../firebaseService";
import {connect} from "react-redux";
import {Auth} from "./Auth";
import {getAllDataActionCreator, showAlert} from "../../store/action/app";

const Login = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);

    const handleOpenLogin = () => {
        setDialogOpened(true)

    };
    const handleLogin = (dataUser) => {
        console.log(dataUser.email)
        props.auth(dataUser.username, dataUser.password, true)
        // const signIn = firebaseAuth.signInWithEmailAndPassword(dataUser.username, dataUser.password);
        // signIn
        //     .then(
        //         props.getAllData(),
        //         props.alert('Пользователь авторизован') )
        //     .catch(e => console.log(e.message))
        // localStorage.setItem('token', data.idToken)
        // props.auth(
        //     'val@gmail.com',
        //     1234567,
        //     false
        // )
    };

    return(
        <>
            <Button
                onClick={handleOpenLogin}
                type="submit"
                color="inherit"

            >
                Login
            </Button>
            <DialogLogin
                show={ dialogOpened }
                onLogin = {(dataUser) => handleLogin(dataUser)}
                onHide={ () => setDialogOpened(false) }/>
        </>
    )
};

function mapStateToProps(state) {
    return {
        counter: state.counter
    }

}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin)),
        alert: (text) => dispatch(showAlert(text)),
        getAllData: () => dispatch(getAllDataActionCreator()),
        logout: () => dispatch(logout)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)