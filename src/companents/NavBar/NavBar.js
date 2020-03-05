import React from "react";
import clsx from 'clsx';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Auth from "../Auth/Auth";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import {withWidth} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
}));

function NavBar(props){
    const { statusOpenDrawer, toggleOpenDrawer } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        toggleOpenDrawer( !statusOpenDrawer )
        console.log(statusOpenDrawer)
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Hidden lgUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open )}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" className={classes.title}>
                        React SONG-LIST
                    </Typography>
                    <Hidden xsDown>
                        <Auth/>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withWidth() (NavBar);
