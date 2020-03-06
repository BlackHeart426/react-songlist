import React, {useContext, useEffect, useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { ExpandLess, ExpandMore, Settings, StarBorder
} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from '@material-ui/icons/Image';
import Switch from "@material-ui/core/Switch";
import {DrawerContext} from "../../contex/drawer/drawerContext";
import {menuDrawerCustom,  subMenuDrawerCustom} from "./menu";
import {useStylesDrawer} from "./style";
import {renderLink} from "./render";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Hidden, withWidth} from "@material-ui/core";
import {SongsContext} from "../../contex/module/songs/songsContext";



function DrawerCustom(props){
    const { toggleEditMode, statusEditMode, toggleOpenDrawer, statusOpenDrawer } = props
    const classes = useStylesDrawer();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    function handlerEditMode() {
        toggleEditMode(!statusEditMode)
    }
    function handleDrawerClose() {
        toggleOpenDrawer(!statusOpenDrawer);
    }

    const sideList = () => (
        <div
            className={classes.toolbar}
            role="presentation"
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    { <ChevronLeftIcon />  }
                </IconButton>
            </div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Black__Heart" secondary="Streamer" />
            </ListItem>
            <List>
                {menuDrawerCustom.map((link) => (
                   renderLink(link)
                ))}
            </List>
            <Divider />
            <List>
                {subMenuDrawerCustom.map((link) => (
                    renderLink(link)
                ))}
            </List>
            <ListItem button onClick={handleClick} >
                <ListItemIcon><Settings/></ListItemIcon>
                <ListItemText>Settings</ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
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
            <ListItem>
                <ListItemIcon><Switch onChange={handlerEditMode} checked={statusEditMode} color="primary"/></ListItemIcon>
                <ListItemText>Edit mode</ListItemText>
            </ListItem>
        </div>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    onClose={handleDrawerClose}
                    className={classes.drawer}
                    variant="temporary"
                    open={ statusOpenDrawer }
                    anchor="left"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {sideList()}
                </Drawer>
            </Hidden>
            <Hidden xsDown>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    open={ statusOpenDrawer }
                    anchor="left"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {sideList()}
                </Drawer>
            </Hidden>
        </>

    )
}

export default withWidth() (DrawerCustom);
