import React, { Component } from "react";

import {connect} from "react-redux";
import {auth, logout} from "../../store/action/auth";
import Button from "@material-ui/core/Button";

class Auth extends Component {

    loginHandler = () => {
        this.props.auth(
            'val@gmail.com',
            1234567,
            true
        )
    }

    registerHandler = () => {
        this.props.auth(
            'val@gmail.com',
            1234567,
            false
        )

    }

    logoutHandler = () => {
        this.props.logout()

    }

    render() {
        return (
            <>

                <Button
                    onClick={this.registerHandler}
                    type="submit"
                    color="inherit"
                >
                    Регистрация
                </Button>
                <Button
                    onClick={this.loginHandler}
                    type="submit"
                    color="inherit"

                >
                    Вход
                </Button>
                <Button
                    onClick={this.logoutHandler}
                    type="submit"
                    color="inherit"
                >
                    Выход
                </Button>
            </>
        )
    }

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