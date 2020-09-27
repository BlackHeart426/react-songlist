import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import EditIcon from "@material-ui/icons/Edit";
import {DialogEditSongHistory} from "../../../../companents/Dialog/DialogHistory/DialogEditSongHistory";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import {addFilterActionCreator} from "../../../../store/action/modules/songs";
import {useDispatch} from "react-redux";
import {addFilterHistoryActionCreator} from "../../../../store/action/modules/history";

export const FilterSong = (props) => {

    let ml40 = {
        marginLeft: '25%',
    }

    useEffect(()=>{
        props.params && setValue(props.params)
    },[])

    const [value, setValue] = useState(["stream"]);
    const { loading} = props;
    const dispatch = useDispatch()

    const handleFilter = (event, newAttribute) => {
        setValue(newAttribute)
        dispatch(addFilterHistoryActionCreator(newAttribute))// editSong(newSong)
    };

    return (
        <>
            <ToggleButtonGroup style={ml40}  size="small" value={value} onChange={handleFilter} aria-label="text formatting" color="primary" disabled={loading}>
                <ToggleButton
                    color="primary"
                    value="all"
                    >
                    За все время
                </ToggleButton>
                <ToggleButton
                    value="stream"
                    >
                    Рабочий день
                </ToggleButton>
                <ToggleButton
                    value="day"
                >
                    Полный день
                </ToggleButton>
                <ToggleButton
                    value="month"
                    >
                    Месяц
                </ToggleButton>
                <ToggleButton
                    value="year"
                    >
                    Год
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}
