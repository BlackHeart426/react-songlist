import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import {Link} from "react-router-dom";
import {
    Code, ExpandLess, ExpandMore,
    History,
    LibraryBooks,
    LibraryMusic,
    QueueMusic,
    Settings, StarBorder
} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from '@material-ui/icons/Image';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: {
        marginTop: '65px' //TODO не динамичекий
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },

}));


function renderLink(props, index) {

    return(
        <li key={index}>
            <ListItem button component={Link} to={props.link ? props.link : '#'} >
                {props.icon ? <ListItemIcon>{props.icon}</ListItemIcon> : <React.Fragment></React.Fragment>}
                <ListItemText>{props.title}</ListItemText>
            </ListItem>
        </li>
    )
}

const menu = [
    {
        title: 'Queue',
        link: 'queue',
        icon: <QueueMusic/>
    },
    {
        title: 'Songs',
        link: 'songs',
        icon: <LibraryMusic/>
    },
    {
        title: 'Saved Queue',
        link: 'saved-queue',
        icon: <LibraryBooks/>
    },
    {
        title: 'History',
        link: 'history',
        icon: <History/>
    },
]

const subMenu = [
    {
        title: 'Bot Commands',
        link: 'bot-commands',
        icon: <Code/>
    },
]


export const DrawerCustom  = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const sideList = () => (
        <div
            className={classes.toolbar}
            role="presentation"
        >
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Black__Heart" secondary="Streamer" />
            </ListItem>
            <List>
                {menu.map((link, index) => (
                   renderLink(link, index)
                ))}
            </List>
            <Divider />
            <List>
                {subMenu.map((link, index) => (
                    renderLink(link, index)
                ))}
            </List>
            <ListItem button onClick={handleClick} >
                <ListItemIcon><Settings/></ListItemIcon>
                <ListItemText>Settings</ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}</ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
        </div>
    );

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            open={true}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            {sideList()}
        </Drawer>
    )
}