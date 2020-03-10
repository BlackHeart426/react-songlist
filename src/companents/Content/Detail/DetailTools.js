import React, {useContext} from "react";
import {SongsContext} from "../../../contex/module/songs/songsContext";
import {Card} from "@material-ui/core";
import {DetailBack} from "./Tools/DetailBack";


export const DetailTools = (props) => {
    const {showActive, onActive} = props
    return (
        <>
            <Card>
                <DetailBack/>
                {/*<TextLabel/>*/}
                {/*<Edit/>*/}
                {/*<Request/>*/}
                {/*<ViewHistory />*/}
            </Card>
        </>
    )
}