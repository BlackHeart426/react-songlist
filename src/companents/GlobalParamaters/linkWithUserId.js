import {userId} from "../../store/action/modules/songs";

export const addUserIdAtLink = (link, user) => (
    "/s/"+user+link
)



