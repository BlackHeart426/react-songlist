import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useStyles} from "../DialogSongs/style";
import CustomDialog from "../CustomDialog";
import {NumberFormatCustom} from "../../inputComponent/NumberFormatCustom/NumberFormatCustom";
import AsynchronousSearch from "../../SearchField/SearchAsync";

export function DialogAddSongToQueue(props) {
    const formControl = {
        title: '',
        artist: '',
        requestedBy: '',
        note: '',
        amount: '0',
    }

    const {show, onHide, dataSong, onAccept} = props;
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(false);
    const [song, setSong] = useState(formControl);
    const [idSong, setIdSong] = useState(null)
    const [title, setTitle] = useState(null)
    const [artist, setArtist] = useState(null)

    //TODO что-то с обьектом dataSong и вложеным data
    useEffect(() => {
        setDialogOpened(show);
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
        property = {...property, title, artist}
        onAccept(property, idSong)
        handleClose()
    };

    async function handleSelectSong(songData){
        setIdSong (songData.id)

        // await setProperty('title', songData.data.title)
        // await setProperty('artist', songData.data.artist)
        await setTitle(songData.data.title)
        await setArtist(songData.data.artist)
    }

    const data = {
        title: 'Добавить заказ',
        content:
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <AsynchronousSearch selectSong={(song) => handleSelectSong(song)}/>
                </FormControl>
            <div>
            </div>
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                        margin="dense"
                        id="RequestedBy"
                        label="Заказчик"
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
                        label="Примечание"
                        type="text"
                        fullWidth
                        onChange={handleChange('note')}
                    />
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-amount">Стоимость</InputLabel>
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
                    Отменить
                </Button>
                <Button onClick={handleAdd(song)} color="primary"   className={classes.button}>
                    Добавить
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

