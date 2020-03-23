import {database} from "../firebaseService";

export const getRef = () => {
    const userId = localStorage.getItem('userId');
    const ref = database.ref('savedQueue').child(userId);
    return ref
}
