import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import React from 'react';
import clsx from 'clsx';
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import {blue} from "@material-ui/core/colors";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width: 200,
    },
    searhIcon: {
        color: 'rgba(152, 152, 152, 0.87)',
    },
    pt0: {
        padding: "6px 0 7px"
    },
    root: {
        padding: "6px 0 7px"
    }
}));

const styles = withStyles({
    root: {
        padding: "6px 0 7px"
    }
});

const defaultColor = {
    'color': 'rgba(255, 0, 0, 0.87)',
};

export const SearchSong = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState('');
    const {searchText, setSearchText} = props;

    const handleChange = event => {
        setSearchText( event.target.value );
    };

    const handleClearTextField = event => {
        setSearchText( '' );
    };

    return (
        <FormControl className={classes.margin}>

            <OutlinedInput
                id="standard-adornment-amount"
                value={searchText}
                placeholder="Search"
                onChange={handleChange}
                variant="outlined"
                className={ classes.root }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClearTextField}
                            size="small"
                        >
                           <CloseIcon />
                        </IconButton>
                    </InputAdornment>
                }
                startAdornment={ <InputAdornment  position="start"><SearchIcon className={classes.searhIcon}/></InputAdornment>}
            />
        </FormControl>
    )
}