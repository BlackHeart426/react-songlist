import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";

export function renderLink(props, index) {
    const {link, icon, title} = props
    return(
        <li key={index}>
            <ListItem button component={Link} to={link ? link : '#'} >
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : <React.Fragment></React.Fragment>}
                <ListItemText>{title}</ListItemText>
            </ListItem>
        </li>
    )
}
