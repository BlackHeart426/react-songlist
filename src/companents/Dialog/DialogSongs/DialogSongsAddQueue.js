import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import useTheme from "@material-ui/core/styles/useTheme";
import {getStyles, MenuProps, useStyles} from "./style";
import CustomDialog from "../CustomDialog";
import InputAdornment from "@material-ui/core/InputAdornment";
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const names = [
    'Music',
];

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$ "
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export function DialogSongsAddQueue(props) {
    const formControl = {
        title: '',
        artist: '',
        requested: '',
        note: '',
        amount: '',
    }

    const {show, onHide, dataSong, onAccept, onAddItemToQueue} = props
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(false);
    const [song, setSong] = useState(formControl)

    //TODO что-то с обьектом dataSong и вложеным data
    useEffect(() => {
        setDialogOpened(show);
        let copyDataSong = {...dataSong};
        console.log('copyDataSong', copyDataSong)
        if(copyDataSong['id']) { //TODO переделать проверка на пустоту обьета
            let copyDataSongData = {...copyDataSong['data']};
            const {title, artist} = copyDataSongData;
            let statusCopy = {...song};
            statusCopy['title'] = title;
            statusCopy['artist'] = artist;
            setSong(statusCopy);
            console.log('statusCopy', statusCopy)
        }
    },[show])


    const setProperty = (property, value) => {
        let statusCopy = Object.assign({}, song);
        statusCopy[property] = value;
        setSong(statusCopy)
    }

    const handleChange = name =>  event => {
        setProperty(name, event.target.value)
    };

    const handleClose = () => {
        setDialogOpened(false);
        onHide();
    };

    const handleAdd = (property) => event => {
        console.log(property)
        onAccept(property)
        handleClose()
    };

    const data = {
        title: 'Add song to queue',
        content: <div>
            <div>
                <label className={classes.formControl}>
                    Song
                </label>
            </div>
            <div>
                <label className={classes.formControl}>
                    {song.title} by {song.artist}
                </label>
            </div>
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                        margin="dense"
                        id="RequestedBy"
                        label="Requested By"
                        type="text"
                        fullWidth
                        onChange={handleChange('requestedBy')}
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
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        onChange={handleChange('amount')}
                        inputComponent={NumberFormatCustom}
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
                    Add
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

