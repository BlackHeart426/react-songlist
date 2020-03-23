import {database} from "../firebaseService";

export const getRef = () => {
    const userId = localStorage.getItem('userId');
    const ref = database.ref('queue').child(userId);
    return ref
}
