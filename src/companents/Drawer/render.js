import React, {useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import {NavLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {addUserIdAtLink} from "../GlobalParamaters/linkWithUserId";

export const renderLink = (props) => {

    const {index, link, icon, title, className} = props

    return(
        <li key={index}>
            <ListItem
                className={className}
                button
                component={NavLink}
                to={addUserIdAtLink(link) ? addUserIdAtLink(link) : '#'}
                activeClassName="Mui-selected"
            >
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : <React.Fragment></React.Fragment>}
                <ListItemText>{title}</ListItemText>
            </ListItem>
        </li>
    )
};
