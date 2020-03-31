import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 24,

    },
    chipRoot: {
        marginRight: 10
    },
    tabRoot: {
        flexGrow: 1,
    },
    textField: {
        marginRight: 10
    }

});

export function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}