import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {getStyles, MenuProps, useStyles} from "../DialogSongs/style";
import CustomDialog from "../CustomDialog";
import {NumberFormatCustom} from "../../inputComponent/NumberFormatCustom/NumberFormatCustom";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

const names = [
    'Music',
];

export function DialogAddSongToQueue(props) {
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
    const [searchText, setValues] = React.useState('');

    const handleClearTextField = event => {
        setValues( '' );
    };

    const handleChangeSearch = event => {
        setValues( event.target.value );
    };
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
        content:
            <div>
            {/*<div>*/}
            {/*    <label className={classes.formControl}>*/}
            {/*        Song*/}
            {/*    </label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <label className={classes.formControl}>*/}
            {/*        {song.title} by {song.artist}*/}
            {/*    </label>*/}
            {/*</div>*/}
                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                        id="standard-adornment-amount"
                        value={searchText}
                        placeholder="Search"
                        onChange={handleChangeSearch}
                        endAdornment={
                            <InputAdornment position="end">
                                {searchText
                                    ?
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClearTextField}
                                        size="small"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    :
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        size="small"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                }
                            </InputAdornment>
                        }
                        // startAdornment={ <InputAdornment  position="start"><SearchIcon className={classes.searhIcon}/></InputAdornment>}
                    />
                </FormControl>
            <div>
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

