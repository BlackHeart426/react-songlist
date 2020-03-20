import {combineReducers} from "redux";
import authReducer from "./auth";
import {appReducer} from "./app";
import {songsReducer} from "./songs";


export default combineReducers({
    auth: authReducer,
    app: appReducer,
    songs: songsReducer
})