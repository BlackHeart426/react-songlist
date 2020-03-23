import {combineReducers} from "redux";
import authReducer from "./auth";
import {appReducer} from "./app";
import {songsReducer} from "./songs";
import {queueReducer} from "./queue";


export default combineReducers({
    auth: authReducer,
    app: appReducer,
    songs: songsReducer,
    queue: queueReducer
})