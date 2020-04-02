import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {database, storage} from "../../../firebaseService";
import {green} from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from 'clsx';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        display: 'none',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

export default function UploadButtonsCustom(props) {
    const property = {
        image: {},
        url: '',
        progress: 0
    }
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [nameFile, setNameFile] = useState('');
    const { name, onChange, type } = props;

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    const handleChange = event => {

        const image = event.target.files[0];
        onChange(event)
        setNameFile(event.target.files[0].name)
    }

    return (
        <div className={classes.root}>
            <FormControl disabled>
                <InputLabel htmlFor="component-disabled">{nameFile}</InputLabel>
                <Input id="component-disabled" value={''} />
            </FormControl>
            <input
                accept={type+"/*"}
                className={classes.input}
                id="contained-button-file"
                multiple
                onChange={handleChange}
                type="file"
            />
            <label htmlFor="contained-button-file">
                <div className={classes.wrapper}>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={buttonClassname}
                        disabled={loading}
                        component="span">
                        {name}
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </label>
        </div>
    );
}
