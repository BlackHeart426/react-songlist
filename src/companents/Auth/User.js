import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {auth, logout} from "../../store/action/auth";
import {getAllDataActionCreator, isPageUserActionCreator, showAlert} from "../../store/action/app";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {SettingsUser} from "../../page/SettingsUser";
import {addUserIdAtLink} from "../GlobalParamaters/linkWithUserId";
import {useHistory} from "react-router";

const User = (props) => {
    const history = useHistory();
    const {isLogin} = props
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoginAuth, setIsLoginAuth] = useState(false);

    useEffect(()=>{
        const email = localStorage.getItem('email')
        setIsLoginAuth(email)
    },[isLogin])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose()
        props.logout()
    };

    function handleMyPage() {
        const uuid = localStorage.getItem('userId')
        history.push(addUserIdAtLink("/songs"))
        // const currentUser = localStorage.getItem('currentUser');
        // const userId = localStorage.getItem('userId');
        // if (currentUser === userId) {
        //     return true
        // }
        // return false
        props.isMyPage(true)
        props.getAllData();

    }

    return(
        <div>
            <Button
                type="submit"
                color="inherit"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                {isLoginAuth}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/*<MenuItem onClick={SettingsUser}>Settings</MenuItem>*/}
                <MenuItem onClick={handleMyPage}>My page</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
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
        isMyPage: (state) => dispatch(isPageUserActionCreator(state)),
        logout: () => dispatch(logout()),
        getAllData: () => dispatch(getAllDataActionCreator()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)