import {
    SET_CURRENT_USER,
} from "../types";
import {getDataPageBlogFireBase} from "../../firebaseService";


export const setCurrentUserActionCreator = (state) => {
    return {
        type: SET_CURRENT_USER,
        payload: state
    }
};

export const updateEmailCurrentUserActionCreator = (userId) => {
    return async (dispatch) => {
        getDataPageBlogFireBase(userId)
            .then((snapshot) => {
                // console.log('123123123')
                // localStorage.setItem('emailCurrentUser',snapshot.val().email )
                dispatch({type: SET_CURRENT_USER, payload: snapshot.val()})
            })
            .catch(error => {
            })

    }
}



