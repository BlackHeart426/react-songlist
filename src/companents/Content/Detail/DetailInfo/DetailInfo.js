import React from "react";
import {DetailTools} from "../DetailTools";
import {DetailBack} from "../Tools/DetailBack";
import {Card} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {componentTags} from "../../../TablePagination/componentTags";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {TabPanel} from "../TabPanel";
import {a11yProps, useStyles} from "./stylesDetailInfo";

export const DetailInfo = (props) => {

    const classes = useStyles();
    const [tab, setTab] = React.useState(0);
    const {detailSong} = props;

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

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
                    <Chip label="Basic" />
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