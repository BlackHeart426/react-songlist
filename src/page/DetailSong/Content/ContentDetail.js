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
import Skeleton from "@material-ui/lab/Skeleton";
import Avatar from "@material-ui/core/Avatar";
import {useSelector} from "react-redux";

export const ContentDetail = (props) => {

    const classes = useStyles();
    const [tab, setTab] = React.useState(0);
    const [timesPlayed, setTimesPlayed] = React.useState(0);
    const [lastPlayed, setLastPlayed] = React.useState('never');
    const [queue, setQueue] = React.useState(0);
    const {detailSong} = props;
    const attributesList = useSelector(state => state.attributes.list)


    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    useEffect(() => {
        console.log('detailSong',detailSong)
        detailSong && setTimesPlayed(detailSong.data.timesPlayed)
            && setLastPlayed(detailSong.data.lastPlayed)
            && setQueue(0)
    },[]);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" component="h4">
                    {detailSong && detailSong.data.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {detailSong && detailSong.data.artist}
                </Typography>
                <div className={classes.pos}>
                    {detailSong && detailSong.data.tags.map(value => (
                        <Chip
                            key={value}
                            label={attributesList.length > 0 && attributesList.find(item => item.id === value).data.name}
                            avatar={
                                <Avatar
                                    src={attributesList.length > 0 ? attributesList.find(item => item.id === value).data.image.toString() : undefined}
                                />
                            }
                            className={classes.chipRoot}
                        />
                    ))}
                </div>

                {detailSong
                    ? <TextField
                        margin="dense"
                        id="TIMES_PLAYED"
                        label="TIMES PLAYED"
                        type="text"
                        InputProps={{
                            readOnly: true,
                        }}
                        value={timesPlayed}
                        className={classes.textField}
                    />
                    : <Skeleton variant="rect" width={200} height={40} /> }
                {detailSong
                    ? <TextField
                            margin="dense"
                            id="LAST_PLAYED"
                            label="LAST PLAYED"
                            type="text"
                            InputProps={{
                                readOnly: true,
                            }}
                            value={lastPlayed}
                            className={classes.textField}
                        />
                    :  <Skeleton variant="text" width={200} /> }

                {detailSong
                    ? <TextField
                        margin="dense"
                        id="IN_QUEUE"
                        label="IN QUEUE"
                        type="text"
                        InputProps={{
                            readOnly: true,
                        }}
                        value={queue}
                        className={classes.textField}
                    />
                    :  <Skeleton className={classes.textField} variant="rect" width={200} height={40}/> }
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