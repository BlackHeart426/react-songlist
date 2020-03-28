import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'auto',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        position: 'fixed',
        bottom: 10,
        left: '50%'
    },
}));

export const AlertCustom = ({ text }) =>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    return (
        <div className={classes.root}>
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
                    {text}
                </Alert>
        </div>
    )
};