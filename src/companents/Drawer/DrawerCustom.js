import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import {Queue} from "../../page/Queue";
import {Link} from "react-router-dom";
import {
    Code,
    FormatListNumbered,
    History,
    LibraryBooks,
    LibraryMusic,
    QueueMusic,
    SdStorage,
    Settings
} from "@material-ui/icons";



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
        marginTop: '60px' //TODO не динамичекий
    },

}));

function renderLink(props, index) {

    return(
        <li>
            <ListItem button component={Link} to={props.link} key={index}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
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
    {
        title: 'Settings',
        link: null,
        icon: <Settings/>
    },
    {
        title: 'Edit mode',
        link: null
    },
]


export const DrawerCustom  = () => {
    const classes = useStyles();
    const sideList = () => (
        <div
            className={classes.toolbar}
            role="presentation"
        >
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