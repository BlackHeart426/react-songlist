import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from "react-redux";
import {StyledFormControl, StyledOutlinedInput, useStyles} from "./style";

export const SearchField = (props) => {
    const classes = useStyles();
    const [searchText, setSearchText] = React.useState('');
    const dispatch = useDispatch()
    const {moduleActionCreator} = props;

    const handleChange = event => {
        setSearchText(event.target.value);
        dispatch(moduleActionCreator( event.target.value ));
    };

    const handleClearTextField = event => {
        setSearchText( '' );
        dispatch(moduleActionCreator( '' ));
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
                        {searchText
                            ? <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClearTextField}
                                size="small"
                            >
                                <CloseIcon />
                            </IconButton>
                            : <IconButton
                                aria-label="toggle password visibility"
                                size="small"
                            >
                                <SearchIcon />
                            </IconButton>

                        }
                    </InputAdornment>
                }
            />
        </StyledFormControl>
    )
}