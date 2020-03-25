import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import EditIcon from "@material-ui/icons/Edit";
import {DialogEditSongHistory} from "../../../../companents/Dialog/DialogHistory/DialogEditSongHistory";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

export const FilterSong = (props) => {

    let ml40 = {
        marginLeft: '25%',
    }

    const [value, setValue] = useState(false);
    const { loading} = props;

    const handlerFilter = (event) => {

        // editSong(newSong)
    }

    return (
        <>
            <ButtonGroup style={ml40} name="filterSong" size="small" onChange={handlerFilter} color="primary" disabled={loading}>
                <Button value="All" label="All">All</Button>
                <Button value="Stream" label="Stream">Stream</Button>
                <Button value="Day" label="Day">Day</Button>
                <Button value="Month" label="Month">Month</Button>
                <Button value="Year" label="Year">year</Button>
            </ButtonGroup>
        </>
    )
}