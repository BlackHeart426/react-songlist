import {combineReducers} from "redux";
import authReducer from "./auth";
import {appReducer} from "./app";
import {songsReducer} from "./modules/songs";
import {queueReducer} from "./modules/queue";
import {savedQueueReducer} from "./modules/savedQueue";
import {historyReducer} from "./modules/history";
import {attributesReducer} from "./modules/attributes";


export default combineReducers({
    auth: authReducer,
    app: appReducer,
    songs: songsReducer,
    queue: queueReducer,
    savedQueue: savedQueueReducer,
    history: historyReducer,
    attributes: attributesReducer
})