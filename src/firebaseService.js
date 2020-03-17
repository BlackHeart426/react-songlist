import * as app from "firebase/app";
import "firebase/database";
import "firebase/auth";
import * as firebase from "firebase";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

app.initializeApp(config);

const db = app.database();
const userId = localStorage.getItem('userId');
const ref = db.ref('songs').child(userId);

export const setData = (list, callback) => {
    ref.push(list)
        .then(console.log('alert recording'))
        .catch(console.log('alert error'));
    //TODO ошибки
    return callback()
};

export const getData = (callback) => {
    const data = [];
    ref.once('value')
        .then( snapshot => {
            snapshot.forEach(childSnapshot => {
                data.push(childSnapshot.val());
            });
            return callback(data)
            console.log('alert recording')
        })
        .catch(console.log('alert error'))
};


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