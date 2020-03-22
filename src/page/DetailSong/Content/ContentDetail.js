import React, {useContext, useEffect} from "react";
import {Card} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {TabPanel} from "../../../companents/TabPanel/TabPanel";
import {a11yProps, useStyles} from "./stylesDetail";

export const ContentDetail = (props) => {

    const classes = useStyles();
    const [tab, setTab] = React.useState(0);
    const {detailSong} = props;


    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    useEffect(() => {
    },[]);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" component="h4">
                    {detailSong.data.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {detailSong.data.artist}
                </Typography>
                <div className={classes.pos}>
                    {detailSong.data.tags.map(value => (
                        <Chip key={value} label={value} className={classes.chip} />
                    ))}
                </div>
                <TextField
                    margin="dense"
                    id="TIMES_PLAYED"
                    label="TIMES PLAYED"
                    type="text"
                    disabled={true}
                    value={detailSong.data.timesPlayed}
                    className={classes.textField}
                />
                <TextField
                    margin="dense"
                    id="LAST_PLAYED"
                    label="LAST PLAYED"
                    type="text"
                    disabled={true}
                    value={detailSong.data.lastPlayed}
                    className={classes.textField}
                />

                <TextField
                    margin="dense"
                    id="IN_QUEUE"
                    label="IN QUEUE"
                    type="text"
                    disabled={true}
                    value={'0'}
                    className={classes.textField}
                />
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