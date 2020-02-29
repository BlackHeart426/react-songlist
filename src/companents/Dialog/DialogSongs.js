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

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 350,
        maxWidth: 350,
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

export function DialogSongs(props) {

    const {show, onHide, onAddSongs} = props

    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [dialogOpened, setDialogOpened] = useState(false);

    useEffect(() => {
        setDialogOpened(show)
    },[show])

    const handleChange = event => {
        setPersonName(event.target.value);
    };

    const handleClose = () => {
        setDialogOpened(false);
        onHide();
    };

    const handleCreate = () => {
        setDialogOpened(false);
        onAddSongs()
    };

    const handleCreateClose = () => {
        handleCreate()
        setDialogOpened(false);
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
                <div>{/*TODO в отдельный компонент*/}
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
            <DialogActions className={classes.formControl}>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleCreate} color="primary">
                    Create
                </Button>
                <Button onClick={handleCreateClose} color="primary">
                    Create and close
                </Button>
            </DialogActions>
        </Dialog>
    )

}