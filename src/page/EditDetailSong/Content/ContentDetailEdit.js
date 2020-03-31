import React, {useEffect, useState} from "react";
import {Card} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {TabPanel} from "../../../companents/TabPanel/TabPanel";
import {a11yProps, useStyles} from "./stylesDetailEdit";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {NumberFormatCustom} from "../../../companents/inputComponent/NumberFormatCustom/NumberFormatCustom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const ContentDetailEdit = (props) => {
    const formData = {
        artist: '',
        title: '',
        capo: '',
        active: false,
        amount: 0,
        comment: ''

    }
    const classes = useStyles();
    const [tab, setTab] = React.useState(0);
    const [title, setTitle] = React.useState('');
    const [activeSong, setActiveSong] = React.useState(false);
    const [limit, setLimit] = React.useState(false);
    const [artist, setArtist] = React.useState('');
    const [state, setState] = useState(formData)
    const {detailSong} = props;

    const handleChange = (event, newValue) => {
    };

    useEffect(() => {
        let copyDataSong = {...detailSong};
        let active = copyDataSong['active'];
        let copyDataSongData = {...copyDataSong['data']};
        const {title, artist, capo, amount, comment} = copyDataSongData;
        let statusCopy = {...state};
        if(copyDataSong['id']) {
            statusCopy['title'] = title;
            statusCopy['artist'] = artist;
            statusCopy['capo'] = capo;
            statusCopy['amount'] = amount;
            statusCopy['comment'] = comment;
            statusCopy['active'] = active;
            setState(statusCopy);
            setActiveSong(active)
            setLimit(active)
            // setPersonName(tags)
            }


    },[detailSong])

    const handleChangeSwitch = prop => event => {
        prop === 'active' && setActiveSong(!activeSong)
        prop === 'limit' && setLimit(!limit)
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <FormControl className={classes.formControl}>
                    <TextField
                        margin="dense"
                        id="TITLE"
                        label="TITLE"
                        type="text"
                        value={state.title}
                        className={classes.textField}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        margin="dense"
                        id="ARTIST"
                        label="ARTIST"
                        value={state.artist}
                        type="text"
                        className={classes.textField}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        margin="dense"
                        id="CAPO"
                        label="CAPO"
                        type="text"
                        className={classes.textField}
                    />
                </FormControl>

                <div>
                    <FormControl className={classes.formControl}>
                        <FormControlLabel
                            control={<Switch  checked={activeSong} onChange={handleChangeSwitch('active')} color="primary" />}
                            label="Active"
                        />
                    </FormControl>
                </div>
                <div>

                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <FormControlLabel
                            control={<Switch  checked={limit} onChange={handleChangeSwitch('limit')} color="primary" />}
                            label="Bypass Request Limits?"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            onChange={handleChange('amount')}
                            inputComponent={NumberFormatCustom}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth className={classes.formControl}>
                        <TextField
                            margin="dense"
                            id="COMMENT"
                            label="COMMENT"
                            type="text"
                            className={classes.textField}
                        />
                    </FormControl>
                </div>

            </CardContent>
            <CardActions>
                <div className={classes.tabRoot}>
                    <Tabs
                        value={tab}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Chords" {...a11yProps(0)}/>
                        <Tab label="Lyrics" {...a11yProps(1)}/>
                        <Tab label="Tabs" {...a11yProps(2)}/>
                    </Tabs>
                    <TabPanel value={tab} index={0}>
                        No Chords found.
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        No Lyrics found.
                    </TabPanel>
                    <TabPanel value={tab} index={2}>
                        No Tabs found.
                    </TabPanel>
                </div>
            </CardActions>
        </Card>
    )
}