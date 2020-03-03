import React, {useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import {NavLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export function renderLink(props) {

    const {index, link, icon, title} = props

    return(
        <li key={index}>
            <ListItem
                button
                component={NavLink}
                to={link ? link : '#'}
                activeClassName="Mui-selected"
            >
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : <React.Fragment></React.Fragment>}
                <ListItemText>{title}</ListItemText>
            </ListItem>
        </li>
    )
}
