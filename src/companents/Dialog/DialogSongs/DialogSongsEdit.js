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
//TODO общий список тегов
const names = [
    "Music",
];

export function DialogSongsEdit(props) {
    const formControl = {
        title: '',
        artist: '',
        active: false,
        tags: []
    }

    const {show, onHide, onAddSongs, dataSong} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [dialogOpened, setDialogOpened] = useState(false);
    const [activeSong, setActiveSong] = useState(false);
    const [song, setSong] = useState(formControl);

    //TODO что-то с обьектом dataSong и вложеным data
    useEffect(() => {
        setDialogOpened(show);
        let copyDataSong = {...dataSong};
        let active = copyDataSong['active'];
        let copyDataSongData = {...copyDataSong['data']};
        const {title, artist, timesPlayed, lastPlayed, tags} = copyDataSongData;
        let statusCopy = {...song};
        if(copyDataSong['id']) {
            statusCopy['title'] = title;
            statusCopy['artist'] = artist;
            statusCopy['timesPlayed'] = timesPlayed;
            statusCopy['lastPlayed'] = lastPlayed;
            statusCopy['tags'] = tags;
            statusCopy['active'] = active;
            setSong(statusCopy);
            setActiveSong(active)
            setPersonName(tags)
        }
    },[show]);


    const setProperty = (property, value) => {
        let statusCopy = Object.assign({}, song);
        statusCopy[property] = value;
        setSong(statusCopy)
    }

    const handleChange = name =>  event => {
        setProperty(name, event.target.value)
    };

    const handleChangeSelect = event => {
        setPersonName(event.target.value);
        setProperty('tags', event.target.value)
    };

    const handleChangeSwitch = event => {

        setActiveSong(event.target.checked)
        setProperty('active', event.target.checked)
    };

    const handleClose = () => {
        setDialogOpened(false);
        onHide();
    };

    const handleSave = property => event => {
        onAddSongs(property);
        handleClose()
    };

    const data = {
        title: 'Edit song',
        content: <div>
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                        margin="dense"
                        id="Title"
                        label="Title"
                        type="text"
                        value={song.title}
                        fullWidth
                        onChange={handleChange('title')}
                    />
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                        margin="dense"
                        id="Artist"
                        label="Artist"
                        value={song.artist}
                        type="text"
                        fullWidth
                        onChange={handleChange('artist')}
                    />
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.formControl}>
                    <FormControlLabel
                        control={<Switch  checked={activeSong} onChange={handleChangeSwitch} color="primary" />}
                        label="Active"
                    />
                </FormControl>
            </div>
            <div>{/*TODO в отдельный компонент*/}
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-chip-label">Attributes</InputLabel>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChangeSelect}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={select => (
                            <div className={classes.chips}>
                                {select.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>,
        action:
            <FormControl fullWidth >
                <Button onClick={handleClose} color="primary"  className={classes.button}>
                    Cancel
                </Button>
                <Button onClick={handleSave(song)} color="primary"  className={classes.button}>
                    Save
                </Button>
            </FormControl>

    }

    return (
        <CustomDialog  data = { data } show={ dialogOpened }  onHide={ onHide }/>
    )

}