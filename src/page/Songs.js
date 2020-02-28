import React, {useContext, useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import {Card} from "@material-ui/core";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TablePagination from '../companents/TablePagination/ComponentTablePagination'
import Switch from "@material-ui/core/Switch";
import {requestHandler} from "../actionPage/Songs/rows";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export const Songs = () => {
    const [open, setOpen] = useState(true);

    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = event => {
        setPersonName(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };
    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }

    function createData(title, artist, timesPlayed, lastPlayed, tags, action) {
        return {title, artist, timesPlayed, lastPlayed, tags, action}
    }

    const headCells = [
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'times-played', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Times played', type: 'txt' },
        { id: 'last-played', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Last Played', type: 'txt' },
        { id: 'tags', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'tag' },
        { id: 'action', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'btn' },
    ];

    const rowsTest = [
        createData(
            'The Kill',
            '30 Seconds To Mars',
            1,
            '1 week age',
            { name: 'Music',  type: 'tag' },
            { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }
            ),
        createData(
            'Hello',
            'Adele',
            2,
            '2 week age',
            { name: 'Music', type: 'tag' },
            { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }
            ),
    ]

    const addItemToRows = () => {
        setOpen(true);
    }


    //TODO переписать на массив с типом элемента

    return (
        <div>
            <h1>Songs</h1>

            <Card style={mbt10}>
                <IconButton onClick={addItemToRows}>
                    <ControlPointIcon />
                </IconButton>
                <IconButton>
                    <EditIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <ErrorOutlineIcon/>
                </IconButton>
                <IconButton>
                    <PlaylistAddIcon/>
                </IconButton>
                <>
                <Switch color="primary" />
                    Show inactive
                </>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create a New Song</DialogTitle>
                    <DialogContent>
                        {/*<FormControl className={classes.formControl}>*/}
                        {/*    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>*/}
                        {/*    <FilledInput*/}
                        {/*        id="filled-adornment-amount"*/}
                        {/*        // value={values.amount}*/}
                        {/*        onChange={handleChange('amount')}*/}
                        {/*        startAdornment={<InputAdornment position="start">$</InputAdornment>}*/}
                        {/*    />*/}
                        {/*</FormControl>*/}
                        <div>
                            <FormControl fullWidth className={classes.formControl}>
                                <TextField
                                    margin="dense"
                                    id="Title"
                                    label="Title"
                                    type="text"
                                    fullWidth
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
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <FormControlLabel
                                    control={<Switch color="primary" checked={true} />}
                                    label="Active"
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-chip-label">Attributes</InputLabel>
                                <Select
                                    labelId="demo-mutiple-chip-label"
                                    id="demo-mutiple-chip"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
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
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Create
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Create and close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
            <TablePagination headCells = {headCells} rowsData = {rowsTest} />
        </div>
    )
}