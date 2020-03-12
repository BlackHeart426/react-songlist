import React from "react";

export const DynamicDetail = props => {
    // const song = SongAPI.get(parseInt(props.match.params.id, 10))
    return (
        <div>{props.match.params.id}</div>
    )
}