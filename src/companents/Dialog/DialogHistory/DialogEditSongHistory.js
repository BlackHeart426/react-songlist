import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useStyles} from "../DialogSongs/style";
import CustomDialog from "../CustomDialog";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from "@material-ui/core/Grid";

export function DialogEditSongHistory(props) {
    const formControl = {
        title: '',
        artist: '',
        requested: '',
        note: '',
        amount: '',
    }

    const {show, onHide, dataSong, onAccept} = props
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedTime, setSelectedTime] = React.useState(new Date('2014-08-18T21:11:54'));


    useEffect(() => {
        setDialogOpened(show);
        let copyDataSong = {...dataSong};
    },[show])

    const handlerDateChange = date => {
        setSelectedDate(date);
    };

    const handlerTimeChange = time => {
        setSelectedTime(time);
    };

    const handlerSave = () => {
        setDialogOpened(false);
        onHide();
    };

    const handlerClose = () => {
        setDialogOpened(false);
        onHide();
    };

    const data = {
        title: 'Edit history record',
        content:
            <div>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Played date"
                                value={selectedDate}
                                onChange={handlerDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Played time"
                                value={selectedTime}
                                onChange={handlerTimeChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>

            </div>,
        action:
            <FormControl fullWidth >
                <Button onClick={handlerClose} color="primary"  className={classes.button}>
                    Cancel
                </Button>
                <Button onClick={handlerSave} color="primary"   className={classes.button}>
                    Save
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

