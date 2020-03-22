import React, {useContext} from "react";
import Button from "@material-ui/core/Button";

export const ToolDetailRequestSong = () => {

    function detailClose() {
        // detailShow(false)
    }

    return (
        <>
            <Button onClick={detailClose}>
                Request
            </Button>
        </>
    )
}