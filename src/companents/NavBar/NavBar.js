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
import {compose} from "redux";
import {connect} from "react-redux";
import { toggleOpenDrawerActionCreator} from "../../store/action/app";

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
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        props.action.toggleOpenDrawer( !props.statusOpenDrawer )
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

const mapStateToProps = state => {
    return {
        statusOpenDrawer: state.app.openDrawer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            toggleOpenDrawer: (data) => dispatch(toggleOpenDrawerActionCreator(data))
        }
    }
};

export default compose(
    withWidth(),
    connect(mapStateToProps, mapDispatchToProps))
(NavBar);
