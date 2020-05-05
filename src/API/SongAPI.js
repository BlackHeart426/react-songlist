import {database} from "../firebaseService";

export const getRef = (userId) => {
    console.log(userId)
    const ref = database.ref('songs').child(userId);
    return ref
}

// export const setData = (list, callback) => (
//     ref.child(list.id).set(list)
//         .then(console.log('setData success'))
//         .catch(console.log('setData error'))
// );
//
// export const getData = () => {
//     // const data = [];
//     // ref.on('value', snapshot => {
//     //     snapshot.forEach(childSnapshot => {
//     //         data.push(childSnapshot.val());
//     //     });
//     //     callback(data)
//     // })
//     const data = [];
//     ref.once('value', snapshot => {
//         snapshot.forEach(childSnapshot => {
//             data.push(childSnapshot.val());
//         });
//
//     })
//
//     return data
//
// };
//
// export const updateData = (dataSong, callback) => {
//     let updates = {};
//     console.log('dataSong', dataSong)
//     updates['/'+dataSong.id+'/'] = dataSong;
//     ref.update(updates).then(console.log('updateData recording')).catch(console.log('updateData error'));
//     return callback()
// };
//
// export const removeData = (uuid, callback) => (
//     ref.child(uuid).remove().then(callback()).catch(console.log('removeData error'))
// );