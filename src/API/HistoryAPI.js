import {database} from "../firebaseService";

export const getRef = () => {
    const userId = localStorage.getItem('userId');
    const ref = database.ref('history').child(userId);
    return ref
}
