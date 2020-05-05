import React, {useEffect, useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { ExpandLess, ExpandMore, Settings
} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from '@material-ui/icons/Image';
import Switch from "@material-ui/core/Switch";
import {menuDrawerCustom, settingsMenuCustom, subMenuDrawerCustom} from "./menu";
import {useStylesDrawer} from "./style";
import {renderLink} from "./render";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Hidden, withWidth} from "@material-ui/core";
import {compose} from "redux";
import {connect} from "react-redux";
import {toggleEditModeActionCreator, toggleOpenDrawerActionCreator} from "../../store/action/app";


const DrawerCustom = (props) => {
    const classes = useStylesDrawer();
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState('')

    const handleClick = () => {
        setOpen(!open);
    };
    const handleEditMode= (event) => {
        props.action.toggleEditMode(event.target.checked)
    };
    const handleDrawerClose = (event) => {
        props.action.toggleOpenDrawer(!props.statusOpenDrawer);
    };


    const handleCheckUser = () => {

    }

    useEffect(()=>{
        setCurrentUser(props.currentUser)
    },[props.currentUser])

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
                   renderLink(link, currentUser)
                ))}
            </List>
            <Divider />
            <List>
                {subMenuDrawerCustom.map((link) => (
                    renderLink(link, currentUser)
                ))}
            </List>
            <ListItem button onClick={handleClick} >
                <ListItemIcon><Settings/></ListItemIcon>
                <ListItemText>Settings</ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {settingsMenuCustom.map((link) => {
                        link.className = classes.nested;
                        return renderLink(link, currentUser)}
                    )}
                </List>
            </Collapse>
            {props.isMyPage
                && <ListItem>
                    <ListItemIcon><Switch onChange={handleEditMode} checked={props.statusEditMode} color="primary"/></ListItemIcon>
                    <ListItemText>Edit mode</ListItemText>
                </ListItem>
            }
        </div>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    onClose={handleDrawerClose}
                    className={classes.drawer}
                    variant="temporary"
                    open={ props.statusOpenDrawer }
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
                    open={ props.statusOpenDrawer }
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
};

const mapStateToProps = state => {
    return {
        statusEditMode: state.app.editMode,
        statusOpenDrawer: state.app.openDrawer,
        isLogin: state.app.isLogin,
        isMyPage: state.app.isPageUser,
        currentUser: state.currentUser.currentUserId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            toggleEditMode: (data) => dispatch(toggleEditModeActionCreator(data)),
            toggleOpenDrawer: (data) => dispatch(toggleOpenDrawerActionCreator(data)),
        }
    }
};

export default compose(
    withWidth(),
    connect(mapStateToProps, mapDispatchToProps))
(DrawerCustom);
