import {database} from "../firebaseService";
//
// const db = app.database();
const userId = localStorage.getItem('userId');
const ref = database.ref('songs').child(userId);

export const setData = (list, callback) => {
    ref.child(list.id).set(list)
        .then(console.log('alert recording'))
        .catch(console.log('alert error'));
    //TODO ошибки
    return callback(list)
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

export const updateData = (dataSong, callback) => {
    let updates = {};
    console.log('dataSong', dataSong)
    updates['/'+dataSong.id+'/'] = dataSong;
    ref.update(updates).then(console.log('alert recording')).catch(console.log('alert error'));
    return callback()
};

export const removeData = (uuid, callback) => {
    ref.child(uuid).remove().then(console.log('alert recording')).catch(console.log('alert error'));
    return callback()
};