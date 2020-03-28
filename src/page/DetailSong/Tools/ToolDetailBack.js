import IconButton from "@material-ui/core/IconButton";
import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router";

export const ToolDetailBack = () => {
    const history = useHistory();

    return (
        <>
            <IconButton onClick={history.goBack}>
                <ArrowBackIcon />
            </IconButton>
        </>
    )
};