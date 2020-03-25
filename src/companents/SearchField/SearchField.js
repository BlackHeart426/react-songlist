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

    const handlerChange = event => {
        setSearchText(event.target.value);
        debugger
        dispatch(moduleActionCreator( event.target.value ));
    };

    const handlerClearTextField = event => {
        setSearchText( '' );
    };

    return (
        <StyledFormControl className={classes.margin} >

            <StyledOutlinedInput
                id="standard-adornment-amount"
                value={searchText}
                placeholder="Search"
                onChange={handlerChange}
                variant="outlined"
                endAdornment={
                    <InputAdornment position="end">
                        {searchText ?
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handlerClearTextField}
                                size="small"
                            >
                                <CloseIcon />
                            </IconButton> :
                            <IconButton
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