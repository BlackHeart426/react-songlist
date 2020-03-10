import React, {useContext} from "react";
import {SongsContext} from "../../../contex/module/songs/songsContext";
import {Card} from "@material-ui/core";
import {DetailBack} from "./Tools/DetailBack";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const DetailTools = (props) => {
    const {showActive, onActive} = props
    return (
        <>
            <Card style={mbt10}>
                <DetailBack/>
                {/*<TextLabel/>*/}
                {/*<Edit/>*/}
                {/*<Request/>*/}
                {/*<ViewHistory />*/}
            </Card>
        </>
    )
}