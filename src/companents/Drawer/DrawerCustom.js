import React, {useContext, useState} from "react";
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
import {EditModeContext} from "../../contex/editMode/editNodeContext";
import {menuDrawerCustom,  subMenuDrawerCustom} from "./menu";
import {useStylesDrawer} from "./style";
import {renderLink} from "./render";


export const DrawerCustom  = () => {
    const {toggle, statusEditMode} = useContext(EditModeContext)
    const classes = useStylesDrawer();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    function handlerEditMode() {
        toggle(!statusEditMode)
       // console.log(statusEditMode)
    }

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
                <ListItemIcon><Switch onChange={handlerEditMode} color="primary"/></ListItemIcon>
                <ListItemText>Edit mode</ListItemText>
            </ListItem>
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