import React, {useContext, useEffect, useState} from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import {useDispatch} from "react-redux";
import {addFilterActionCreator} from "../../../../store/action/modules/songs";

export const FilterAttributes = (props) => {

    let ml40 = {
        marginLeft: '25%',
    };

    const [value, setValue] = useState([]);
    const { loading, attributesList} = props;
    const dispatch = useDispatch()

    const handleFilter = (event, newAttribute) => {
        setValue(newAttribute)
        console.log(event.target.value)
        dispatch(addFilterActionCreator(newAttribute))// editSong(newSong)
    };


    return (

        <>
            <ToggleButtonGroup style={ml40}  size="small" value={value} onChange={handleFilter} aria-label="text formatting" color="primary" disabled={loading}>
                {attributesList.map((item, index) => (
                        <ToggleButton
                            value={attributesList[index].id}
                            key={index} label={attributesList[index].data.name}>
                            {attributesList[index].data.image
                                ? <img src={attributesList[index].data.image} width={25} height={25} alt=""/>
                                : attributesList[index].data.name}
                        </ToggleButton>
                    )
                )}
            </ToggleButtonGroup>
        </>
    )
}