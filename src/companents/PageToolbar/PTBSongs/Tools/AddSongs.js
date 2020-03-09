import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongs} from "../../../Dialog/DialogSongs/DialogSongs";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import {requestHandler} from "../../../../actionPage/Songs/rows";
import {createData} from "../../../../page/Songs";
import * as shortid from "shortid";
import CustomDialog from "../../../Dialog/CustomDialog";
import DialogConfirm from "../../../Dialog/DialogConfirm";
import {TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import {getStyles, MenuProps, useStyles} from "../../../Dialog/DialogSongs/style";
import MenuItem from "@material-ui/core/MenuItem";
import DialogContent from "@material-ui/core/DialogContent";
import useTheme from "@material-ui/core/styles/useTheme";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
const names = [
    'Music',
];
export const AddSongs = (props) => {
    const formControl = {
        title: '',
        artist: '',
        active: false,
        tags: []
    }
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(false);
    const {show, onHide, onAddSongs, dataSong} = props
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [active, setActive] = useState(false);
    const [song, setSong] = useState(formControl)
    const {lenSelected, songData, addSong} = props;

    const openDialog = () => {
        setDialogOpened(true)
    }

    function showButton(lenSelected) {
        return lenSelected == 0 ? false : true
    }

    const addRowsSong = (property) => {
        console.log('property', property)
        const {title, artist, tags, active} = property;
        const newSong = {
            id: shortid.generate(),
            data: createData(
                title,
                artist,
                '',
                '',
                { type: 'tag', data: [ { name: 'Music' }] } ,
                { type: 'btn', data: [ { type: 'text', name: 'Request11', handler: requestHandler }] }
            ),
            active: active
        }
        addSong(newSong)
    }

    const setProperty = (property, value) => {
        let statusCopy = Object.assign({}, song);
        statusCopy[property] = value;
        setSong(statusCopy)
        console.log('statusCopy', statusCopy)
    }

    const handleChange = name =>  event => {
        setProperty(name, event.target.value)
    };

    const handleChangeSelect = event => {
        setPersonName(event.target.value);
        setProperty('tags', event.target.value)
    };

    const handleChangeSwitch = event => {

        setActive(event.target.checked)
        setProperty('active', event.target.checked)
    };

    const handleClose = () => {
         setDialogOpened(false);
    };

    const handleCreate = (property, close = false) => event => {
        console.log(property)
        addRowsSong(property)
        close && handleClose();
    };

    const data = {
        title: 'Create new song',
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
                        control={<Switch  checked={active} onChange={handleChangeSwitch} color="primary" />}
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
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => (
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
                <Button onClick={handleCreate(song)} color="primary"  className={classes.button}>
                    Create
                </Button>
                <Button onClick={handleCreate(song, true)} color="primary" className={classes.button}>
                    Create and close
                </Button>
            </FormControl>

    }

    return (
        <>
            <IconButton onClick={ openDialog } disabled={ showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            <CustomDialog  data = { data } show={ dialogOpened }  onHide={ () => setDialogOpened(false) }/>
            {/*<DialogSongs onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>*/}
        </>
    )
}