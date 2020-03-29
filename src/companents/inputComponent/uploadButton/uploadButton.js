import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {database, storage} from "../../../firebaseService";
import {green} from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from 'clsx';

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

export default function UploadButtons() {
    const property = {
        image: {},
        url: '',
        progress: 0
    }
    const classes = useStyles();
    const [state, setState] = useState(property);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    const handleChange = event => {
        console.log(event.target.files[0])

        const image = event.target.files[0];

        setState(image)
        handleUpload(image)
    }

    const handleUpload = (image) =>  {

        const storageRef = storage.ref(`images/${image.name}`);
        const uploadTask = storageRef.put(image);
        if (!loading) {
            setSuccess(false);
            setLoading(true);

            uploadTask.on('state_changed',
                (snapshot) => {
                },
                (error) => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    setLoading(false)
                    setSuccess(true)
                    // complete function ....
                    storageRef.getDownloadURL().then(function(url) {
                        // Insert url into an <img> tag to "download"
                        setState({url})
                    }).catch(function(error) {});
                });
        }
    }

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                onChange={handleChange}
                type="file"
            />
            <label htmlFor="contained-button-file">
                <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={buttonClassname}
                        disabled={loading}
                        // onClick={handleUpload}
                        component="span">
                        Upload
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </label>
            <img src={state.url} height="40" width="40" alt=""/>
        </div>
    );
}
