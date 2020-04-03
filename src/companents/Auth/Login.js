import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {DialogLogin} from "../Dialog/DialogAuth/DialogLogin";

export const Login = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);

    const handleLogin = () => {
        setDialogOpened(true)
        // this.props.auth(
        //     'val@gmail.com',
        //     1234567,
        //     true
        // )
    };

    return(
        <>
            <Button
                onClick={handleLogin}
                type="submit"
                color="inherit"

            >
                Login
            </Button>
            <DialogLogin
                show={ dialogOpened }
                onHide={ () => setDialogOpened(false) }/>
        </>
    )
};