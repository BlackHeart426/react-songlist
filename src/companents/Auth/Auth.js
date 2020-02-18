import React, { Component } from "react";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {auth, logout} from "../../store/action/auth";

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
                    className="btn-dark"
                >
                    Регистрация
                </Button>
                <Button
                    onClick={this.loginHandler}
                    className="btn-light"
                    type="submit"
                >
                    Вход
                </Button>
                <Button
                    onClick={this.logoutHandler}
                    className="btn-light"
                    type="submit"
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