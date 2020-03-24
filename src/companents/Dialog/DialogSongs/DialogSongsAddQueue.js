import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useStyles} from "./style";
import CustomDialog from "../CustomDialog";
import {NumberFormatCustom} from "../../inputComponent/NumberFormatCustom/NumberFormatCustom";



export function DialogSongsAddQueue(props) {
    const formControl = {
        title: '',
        artist: '',
        requestedBy: '',
        note: '',
        amount: '',
    }

    const {show, onHide, dataSong, onAccept} = props;
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(false);
    const [song, setSong] = useState(formControl);

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

    const handlerChange = name =>  event => {
        setProperty(name, event.target.value)
    };

    const handlerClose = () => {
        setDialogOpened(false);
        onHide();
    };

    const handlerAdd = (property) => event => {
        onAccept(property);
        handlerClose()
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
                        onChange={handlerChange('requestedBy')}
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
                        onChange={handlerChange('note')}
                    />
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        onChange={handlerChange('amount')}
                        inputComponent={NumberFormatCustom}
                    />
                </FormControl>
            </div>
        </div>,
        action:
            <FormControl fullWidth >
                <Button onClick={handlerClose} color="primary"  className={classes.button}>
                    Cancel
                </Button>
                <Button onClick={handlerAdd(song)} color="primary"   className={classes.button}>
                    Add
                </Button>
            </FormControl>

    };

    return (
        <CustomDialog  data = { data } show={ dialogOpened }  onHide={ onHide }/>
    )

}

/**
 * Validation Add
 */

