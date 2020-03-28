import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useStyles} from "../DialogSongs/style";
import CustomDialog from "../CustomDialog";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";

export function DialogUpdateSongInQueue(props) {
    const formControl = {
        title: '',
        artist: '',
        requested: '',
        note: '',
        amount: '',
    };

    const {show, onHide, dataSong, onAccept} = props;
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(false);
    const [song, setSong] = useState(formControl)
    // const [searchText, setValues] = React.useState('');

    // const handleClearTextField = event => {
    //     setValues( '' );
    // };
    //
    // const handleChangeSearch = event => {
    //     setValues( event.target.value );
    // };
    //TODO что-то с обьектом dataSong и вложеным data
    useEffect(() => {
        setDialogOpened(show);
        let copyDataSong = {...dataSong};
        if(copyDataSong['id']) { //TODO переделать проверка на пустоту обьета
            let copyDataSongData = {...copyDataSong['data']};
            const {title, artist} = copyDataSongData;
            let statusCopy = {...song};
            statusCopy['title'] = title;
            statusCopy['artist'] = artist;
            setSong(statusCopy);
        }
    },[show]);


    const setProperty = (property, value) => {
        let statusCopy = Object.assign({}, song);
        statusCopy[property] = value;
        setSong(statusCopy)
    };

    const handleChange = name =>  event => {
        setProperty(name, event.target.value)
    };

    const handleClose = () => {
        setDialogOpened(false);
        onHide();
    };

    const handleAdd = (property) => event => {
        onAccept(property);
        handleClose()
    };

    const data = {
        title: 'Add song to queue',
        content:
            <div>
            <div>
                <Typography className={classes.formControl}>
                    <strong>Song</strong>
                </Typography>
            </div>
            <div>
                <Typography className={classes.formControl}>
                    {song.title} by {song.artist}
                </Typography>
            </div>
            <div>
                <Typography className={classes.formControl}>
                    <strong>Request</strong>
                </Typography>
            </div>
                <div>
                    <Typography className={classes.formControl}>
                      For me $10 remove
                    </Typography>
                </div>
            <div>
                <FormControl className={classes.formControlMargin}>
                    <TextField
                        margin="dense"
                        id="Name"
                        label="Name"
                        type="text"
                        // onChange={handleChange('requestedBy')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        label="Amount"
                        id="standard-start-adornment"
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                        margin="dense"
                        id="Note"
                        label="Note"
                        type="text"
                        fullWidth
                        onChange={handleChange('note')}
                    />
                </FormControl>
            </div>
        </div>,
        action:
            <FormControl fullWidth >
                <Button onClick={handleClose} color="primary"  className={classes.button}>
                    Cancel
                </Button>
                <Button onClick={handleAdd(song)} color="primary"   className={classes.button}>
                    Save
                </Button>
            </FormControl>

    };

    return (
        <CustomDialog  data = { data } show={ dialogOpened }  onHide={ onHide }/>
    )

}

