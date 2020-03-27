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
import UploadButtons from "../../inputComponent/uploadButton/uploadButton";
//TODO общий список тегов
const names = [
    "Music",
];

export function DialogAttributesEdit(props) {
    const formControl = {
        name: '',
        priority: '',
        image: '',
        active: false,
        showInTable: false
    };

    const {show, onHide, onAddAttribute, dataSong} = props;
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(false);
    const [active, setActive] = useState(false);
    const [showInTable, setShowInTable] = useState(false);
    const [activeAttribute, setActiveAttribute] = useState(false);
    const [attribute, setAttribute] = useState(formControl);

    useEffect(() => {
        setDialogOpened(show);
        let copyDataAttributes = {...dataSong};
        let copyDataAttributesData = {...copyDataAttributes['data']};
        const {name, image, active, showInTable, priority, ofSongs} = copyDataAttributesData;
        let statusCopy = {...attribute};
        if(copyDataAttributes['id']) {
            statusCopy['name'] = name;
            statusCopy['image'] = image;
            statusCopy['active'] = active;
            statusCopy['showInTable'] = showInTable;
            statusCopy['priority'] = priority;
            statusCopy['ofSongs'] = ofSongs;
            setAttribute(statusCopy);
            setActiveAttribute(active)
            setShowInTable(showInTable)
        }
    },[show]);

    const setProperty = (property, value) => {
        let statusCopy = Object.assign({}, attribute);
        statusCopy[property] = value;
        setAttribute(statusCopy)
    };

    const handleChange = name => event => {
        setProperty(name, event.target.value)
    };

    const handleChangeSwitch = name => event => {
        name == 'active'
            ? setActive(event.target.checked)
            : setShowInTable(event.target.checked);
        setProperty(name, event.target.checked)
    };

    const handleClose = () => {
        setDialogOpened(false);
        onHide();
    };

    const handleCreate = (priority) => event => {
        onAddAttribute(priority);
        handleClose()
    };

    const data = {
        title: 'Edit Attribute',
        content:
            <div>
                <div>
                    <FormControl fullWidth className={classes.formControl}>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            value={attribute.name}
                            fullWidth
                            onChange={handleChange('name')}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth className={classes.formControl}>
                        <TextField
                            margin="dense"
                            id="priority"
                            label="Priority"
                            value={attribute.priority}
                            type="text"
                            fullWidth
                            onChange={handleChange('priority')}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <FormControlLabel
                            control={<Switch  checked={showInTable} onChange={handleChangeSwitch('showSong')} color="primary" />}
                            label="Show in Songlist Rows?"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <FormControlLabel
                            control={<Switch  checked={activeAttribute} onChange={handleChangeSwitch('active')} color="primary" />}
                            label="Active"
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <UploadButtons/>
                    </FormControl>
                </div>

            </div>,
        action:
            <FormControl fullWidth >
                <Button onClick={handleClose} color="primary"  className={classes.button}>
                    Cancel
                </Button>
                <Button onClick={handleCreate(attribute)} color="primary"  className={classes.button}>
                    Save
                </Button>
            </FormControl>

    }

    return (
        <CustomDialog  data = { data } show={ show }  onHide={ onHide }/>
    )

}