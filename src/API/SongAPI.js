// import * as firebase from "firebase";
// import "firebase/database";
// import "firebase/auth";
// import {Component, useContext} from "react";
// import {SongsContext} from "../contex/module/songs/songsContext";

// const db = firebase.database();
//     const userId = localStorage.getItem('userId');
//     const ref = db.ref('songs').child(userId);
// //https://github.com/UtkuKaan/example-react-spa
//
// export const getData = () => {
//     const data = [];
//     return (
//         ref.on('value',  snapshot => {
//             snapshot.forEach(childSnapshot => {
//                 data.push(childSnapshot.val());
//                 console.log("snapshot.node_.children_.root_.value.value_: ", data)
//             });
//         })
//     )
// };
//
// export const setData = (list) => {
//     ref.push(list)
//         .then(console.log('alert recording'))
//         .catch(console.log('alert error'));
//     //TODO ошибки
//     return ref
// };

// export default class SongAPI extends Component {
//     constructor(props) {
//         super(props);
//         this.songRef = this.getRef().child('songs');
//     }
//
//     getRef() {
//         return firebase.database().ref();
//     }
//
//     setData(list){
//         this.songRef.push(list)
//             .then(console.log('alert recording'))
//             .catch(console.log('alert error'));
//         //TODO ошибки
//     };
//
// }

// export const SongAPI = () => {
//     const db = firebase.database();
//     const userId = localStorage.getItem('userId');
//     const ref = db.ref('songs').child(userId);
//
//     const getData = () => {
//         const data = [];
//         return (
//             ref.on('value',  snapshot => {
//                 snapshot.forEach(childSnapshot => {
//                     data.push(childSnapshot.val());
//                     console.log("snapshot.node_.children_.root_.value.value_: ", data)
//                 });
//             })
//         )
//     };
//
//     const setData = (list) => {
//         ref.push(list)
//             .then(console.log('alert recording'))
//             .catch(console.log('alert error'));
//         //TODO ошибки
//         return ref
//     };
//
//
// };
