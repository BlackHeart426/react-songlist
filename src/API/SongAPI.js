// import * as app from "firebase/app";
//
// const db = app.database();
// const userId = localStorage.getItem('userId');
// const ref = db.ref('songs').child(userId);
//
// export const setData = (list, callback) => {
//     ref.push(list)
//         .then(console.log('alert recording'))
//         .catch(console.log('alert error'));
//     //TODO ошибки
//     return callback()
// };
//
// export const getData = (callback) => {
//     const data = [];
//     ref.on('value', snapshot => {
//         snapshot.forEach(childSnapshot => {
//             data.push(childSnapshot.val());
//         });
//         return callback(data)
//     })
// };