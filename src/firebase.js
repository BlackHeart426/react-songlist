import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

firebase.initializeApp(config);
const db = firebase.database();

export const getGroceryList = () => {
    const ref = db.ref('listSongsTest')
        .on('value', snapshot => {
            const state = snapshot.val();
    });
    //TODO ошибки
    return (ref)
}

export const setGroceryList = () => {
    const ref = db.ref('listSongsTest');
    ref.child('BlackHeart').set({ first: 'Ada', last: 'Lovelace' }).then(console.log('s'));

    //TODO ошибки
    return (ref)
}

// class Firebase {
//     constructor() {
//         firebase.initializeApp(config);
//         this.auth = firebase.auth();
//         this.db = firebase.database();
//     }
//
//     // *** Auth API ***
//
//     doCreateUserWithEmailAndPassword = (email, password) =>
//         this.auth.createUserWithEmailAndPassword(email, password);
//
//     doSignInWithEmailAndPassword = (email, password) =>
//         this.auth.signInWithEmailAndPassword(email, password);
//
//     doSignOut = () => this.auth.signOut();
//
//     doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
//
//     doPasswordUpdate = password =>
//         this.auth.currentUser.updatePassword(password);
//
//     // *** User API ***
//
//     user = uid => this.db.ref(`users/${uid}`);
//
//     listSong = () => this.db.ref('listSongsTest');
//
// }
// export default Firebase;

//https://github.com/briandesousa/firebase-with-react-hooks/tree/logrocket-blog