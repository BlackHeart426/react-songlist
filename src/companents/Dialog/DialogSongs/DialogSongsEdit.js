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
import Avatar from "@material-ui/core/Avatar";
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

    const {show, onHide, onAddSongs, dataSong, attributesList} = props;
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
        title: 'Редактировать услугу',
        content: <div>
            <div>
                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                        margin="dense"
                        id="Title"
                        label="Наименование"
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
                        label="Описание"
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
                        label="Активная"
                    />
                </FormControl>
            </div>
            <div>{/*TODO в отдельный компонент*/}
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-chip-label">Категория</InputLabel>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChangeSelect}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map((value, index) => (
                                    <Chip
                                        key={value}
                                        avatar={
                                            <Avatar
                                                src={attributesList.find(item => item.id === value).data.image}
                                            />
                                        }
                                        label={attributesList.find(item => item.id === value).data.name}
                                        className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {attributesList.map((name, index) => (
                            <MenuItem key={name.id} value={name.id} style={getStyles(name, personName, theme)}>
                                {name.data.name}
                                <img src={name.data.image} alt="" height={20} width={20}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>,
        action:
            <FormControl fullWidth >
                <Button onClick={handleClose} color="primary"  className={classes.button}>
                    Отменить
                </Button>
                <Button onClick={handleSave(song)} color="primary"  className={classes.button}>
                    Сохранить
                </Button>
            </FormControl>

    }

    return (
        <CustomDialog  data = { data } show={ dialogOpened }  onHide={ onHide }/>
    )

}
