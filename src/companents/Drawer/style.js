import makeStyles from "@material-ui/core/styles/makeStyles";

export const drawerWidth = 240;
export const useStylesDrawer = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: {
        marginTop: '65px' //TODO не динамичекий
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },

}));