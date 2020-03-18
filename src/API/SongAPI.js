import {database} from "../firebaseService";
//
// const db = app.database();
const userId = localStorage.getItem('userId');
const ref = database.ref('songs').child(userId);

export const setData = (list, callback) => {
    ref.push(list)
        .then(console.log('alert recording'))
        .catch(console.log('alert error'));
    //TODO ошибки
    return callback()
};

export const getData = (callback) => {
    const data = [];
    ref.on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            data.push(childSnapshot.val());
        });
        return callback(data)
    })
};

export const updateData = (callback) => {
    const data = [];
    ref.update('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            data.push(childSnapshot.val());
        });
        return callback(data)
    })
};