import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useStyles} from "../DialogSongs/style";
import CustomDialog from "../CustomDialog";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export function DialogRemoveSongHistory(props) {
    const formControl = {
        title: '',
        artist: '',
        requested: '',
        note: '',
        amount: '',
    }

    const {show, onHide, dataSong, onAccept} = props
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(false);
    const copyDataSong = {...dataSong};
    const copyDataSongData = {...copyDataSong['data']};

    useEffect(() => {
        setDialogOpened(show);
    },[show])

    const handleAccept = () => {
        setDialogOpened(false);
        onHide();
    };

    const handleClose = () => {
        setDialogOpened(false);
        onHide();
    };

    const data = {
        title: 'Delete',
        content:
            <div>
                <div>
                    <Typography className={classes.formControl}>
                        Are you sure you want to delete the following histories?
                    </Typography>
                </div>
                <div>
                    <Typography className={classes.formControl}>
                        <strong>{copyDataSongData.title}</strong> - <strong>{copyDataSongData.artist}</strong>
                    </Typography>
                </div>
            </div>,
        action:
            <FormControl fullWidth >
                <Button onClick={handleClose} color="primary"  className={classes.button}>
                    Cancel
                </Button>
                <Button variant="outlined" onClick={handleAccept} color="secondary" autoFocus className={classes.button}>
                    Agree
                </Button>
            </FormControl>

    }

    return (
        <CustomDialog  data = { data } show={ dialogOpened }  onHide={ onHide }/>
    )

}

/**
 * Validation Add
 */

