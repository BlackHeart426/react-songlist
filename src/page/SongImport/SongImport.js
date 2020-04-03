import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import StepReview from "./stepReview/stepReview"
import StepSelect from "./stepSelect/stepSelect";
import {useDispatch} from "react-redux";
import {addSongActionCreator, setSongDataActionCreator} from "../../store/action/modules/songs";
import * as shortid from "shortid";
import {addAttributesActionCreator} from "../../store/action/modules/attributes";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ['Select a file', 'Review the songs', 'Upload'];
}


export function SongImport() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [songData, setSongData] = useState([]);
    const [upload, setUpload] = useState(false);
    const steps = getSteps();
    const dispatch = useDispatch();

    function getStepContent(step) {
        switch (step) {
            case 0:
                return  <StepReview onData={(row) => setSongData(row)}/>;
            case 1:
                return <StepSelect data={songData}/>;
            case 2:
                return `The following songs will be uploaded where final checks will occur`;
            default:
                return 'Unknown step';
        }
    }


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleUpload = () => {
        songData.forEach((item) => {
            const {title, artist, active} = item;
            const today = new Date();
            let newSong = {
                id: shortid.generate(),
                data: {
                    title: title,
                    artist: artist,
                    capo: '',
                    chords: '',
                    lyrics: '',
                    comment: '',
                    tabs: '',
                    limit: null,
                    timesPlayed: 0,
                    lastPlayed: 'never',
                    tags: ["newSong"],
                    create_at: moment().format(),
                    update_at: moment().format()
                },
                active: (active === 'true')
            };
            dispatch(addSongActionCreator(newSong))
            setUpload(true)
        })
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setUpload(false)
    };

    return (
        <div className={classes.root}>
            <Paper>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                {getStepContent(index)}
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                        {activeStep !== 2
                                            && <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            Next
                                        </Button>
                                        }
                                        {activeStep === 2
                                            && <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleUpload}
                                            className={classes.button}
                                        >
                                            Upload
                                        </Button>
                                        }
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {upload && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>All song uploaded</Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </Paper>
        </div>
    );
}
