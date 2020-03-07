import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";

export const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width: 200,
    },
    searhIcon: {
        color: 'rgba(152, 152, 152, 0.87)',
    },
}));

export const StyledOutlinedInput = withStyles({
    input: {
        padding: '6px 7px',
    },
})(OutlinedInput);

export const StyledFormControl = withStyles({
    root: {
        position: 'absolute',
        right: '25px'
    }
})(FormControl);
