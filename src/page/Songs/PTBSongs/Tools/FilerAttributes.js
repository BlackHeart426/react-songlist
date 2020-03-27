import React, {useContext, useEffect, useState} from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

export const FilterAttributes = (props) => {

    let ml40 = {
        marginLeft: '25%',
    };

    const [value, setValue] = useState(false);
    const { loading, attributesList} = props;

    const handleFilter = (event) => {

        // editSong(newSong)
    };


    return (

        <>
            <ButtonGroup style={ml40} name="filterSong" size="small" onChange={handleFilter} color="primary" disabled={loading}>
                {attributesList.map((item, index) => (
                        <Button value="All" key={index} label="All">{attributesList[index].data.name}</Button>
                    )
                )}
            </ButtonGroup>
        </>
    )
}