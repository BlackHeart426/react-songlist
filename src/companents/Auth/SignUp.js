import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {DialogSignUp} from "../Dialog/DialogAuth/DialogSignUp";
import {auth as firebaseAuth} from "../../firebaseService";
import {auth, logout} from "../../store/action/auth";
import {showAlert} from "../../store/action/app";

const SignUp = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);

    const handleOpenLogin = () => {
        setDialogOpened(true)

    };
    const handleSignUp = (dataUser) => {
        props.auth(dataUser.email, dataUser.password)
        // const signUp = auth.createUserWithEmailAndPassword(dataUser.email, dataUser.password);
        // signUp
        //     .then(  )
        //     .catch(e => props.alert(e.message))
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
                Sign Up
            </Button>
            <DialogSignUp
                show={ dialogOpened }
                onSignUp = {(dataUser) => handleSignUp(dataUser)}
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
        // logout: () => dispatch(logout)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)