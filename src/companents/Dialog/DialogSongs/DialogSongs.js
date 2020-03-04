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
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import {createData} from "../../../page/Songs";
import {requestHandler} from "../../../actionPage/Songs/rows";
import {getStyles, MenuProps, useStyles} from "./style";

const names = [
    'Music',
];

export function DialogSongs(props) {
    const formControl = {
        title: '',
        artist: '',
        active: false,
        tags: []
    }

    const {show, onHide, onAddSongs} = props
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [dialogOpened, setDialogOpened] = useState(false);
    const [active, setActive] = useState(false);
    const [newSong, setNewSong] = useState(formControl)

    useEffect(() => {
        setDialogOpened(show)
    },[show])

    const setProperty = (property, value) => {
        let statusCopy = Object.assign({}, newSong);
        statusCopy[property] = value;
        setNewSong(statusCopy)

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
        onHide();
    };

    const handleCreate = property => event => {
        handleClose();
        console.log(property)
        onAddSongs(property)
    };

    const handleCreateClose = () => {
        handleCreate();
        handleClose();
    };


    return (
        <Dialog open={ dialogOpened } onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle  id="form-dialog-title">Create a New Song</DialogTitle>
            <DialogContent>
                <div>
                    <FormControl fullWidth className={classes.formControl}>
                        <TextField
                            margin="dense"
                            id="Title"
                            label="Title"
                            type="text"
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
            </DialogContent>
            <DialogActions className={classes.formControl}>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleCreate(newSong)} color="primary">
                    Create
                </Button>
                <Button onClick={handleCreateClose} color="primary">
                    Create and close
                </Button>
            </DialogActions>
        </Dialog>
    )

}