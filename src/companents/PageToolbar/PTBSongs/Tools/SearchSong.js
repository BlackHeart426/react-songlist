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
import {TextField} from "@material-ui/core";
import {StyledFormControl, StyledOutlinedInput, useStyles} from "../style";

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
        <StyledFormControl className={classes.margin} >

            <StyledOutlinedInput
                id="standard-adornment-amount"
                value={searchText}
                placeholder="Search"
                onChange={handleChange}
                variant="outlined"
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
        </StyledFormControl>
    )
}