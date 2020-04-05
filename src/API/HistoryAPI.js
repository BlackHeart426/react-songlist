import {database} from "../firebaseService";

export const getRef = () => {
    const userId = localStorage.getItem('userId');
    const currentUser = localStorage.getItem('currentUser');
    const ref = database.ref('history').child(currentUser);
    return ref
}
