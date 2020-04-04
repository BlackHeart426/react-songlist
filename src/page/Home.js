import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/song-list-95d78.appspot.com/o/images%2Fbackground.jpg?alt=media&token=3584fa0b-36f6-489c-a263-ad5830e7f7e9)",
    },
}));

export const Home = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                Welcome
            </div>
        </>
    )
}