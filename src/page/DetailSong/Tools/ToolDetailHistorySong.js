import React, {useContext} from "react";
import Button from "@material-ui/core/Button";

export const ToolDetailHistorySong = () => {

    function detailClose() {
        // detailShow(false)
    }

    return (
        <>
            <Button onClick={detailClose}>
                History
            </Button>
        </>
    )
}