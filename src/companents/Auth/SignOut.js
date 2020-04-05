import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {auth, logout} from "../../store/action/auth";
import {showAlert} from "../../store/action/app";

const SignOut = (props) => {
    const handleSignOut = (dataUser) => {
        props.logout()
    };

    return(
        <>
            <Button
                onClick={handleSignOut}
                type="submit"
                color="inherit"

            >
                Sign Out
            </Button>
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
        logout: () => dispatch(logout)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)