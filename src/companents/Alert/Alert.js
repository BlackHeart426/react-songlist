import React, {useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Collapse from "@material-ui/core/Collapse";
import Alert from '@material-ui/lab/Alert';
import {AlertContext} from "../../contex/alert/alertContext";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const AlertCustom = () =>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const {alert} = useContext(AlertContext)
    if(!alert) return null



    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {alert.text}
                </Alert>
            </Collapse>
        </div>
    )
}