import React from "react";
import {DetailTools} from "./DetailTools";
import {DetailBack} from "./Tools/DetailBack";
import {Card} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {componentTags} from "../../TablePagination/componentTags";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    tabRoot: {
        flexGrow: 1,
    },
});



export const DetailInfo = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" component="h4">
                    The Kill
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    30 Second to mars
                </Typography>
                <div>
                    <Chip label="Basic" />
                </div>
            </CardContent>
            <CardActions>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Item One" >1</Tab>
                    <Tab label="Item Two" >2</Tab>
                    <Tab label="Item Three">3</Tab>
                </Tabs>
            </CardActions>
        </Card>
    )
}