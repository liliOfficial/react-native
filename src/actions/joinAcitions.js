import { USER_INFO_UPDATE, USER_CREATE, USER_CREATE_SUCCESS, USER_CREATE_FAIL } from './types';
import firebase from 'firebase';

export const userInfoUpdate = ({ key, value }) => {
    return {
        type: USER_INFO_UPDATE,
        payload: { key, value }
    }
}

export const userCreate = ({ firstName, lastName, email, password, postCode }) => {
    console.log(firstName, lastName, email, password, postCode);
    // const { currentUser} = firebase.auth();
    // firebase.database().ref(`/users/userinfo`)
    // .push({firstName, lastName, email, password, postCode})
    return (dispatch) => {
        dispatch({ type: USER_CREATE });
        firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => userCreateSuccess(dispatch, user))
                .catch(e => userCreateFail(dispatch, e));

    }
}

const userCreateFail = (dispatch, e) => {
    dispatch({ type: USER_CREATE_FAIL, payload: e.message});
}

const userCreateSuccess = (dispatch, user) => {
    dispatch({type: USER_CREATE_SUCCESS, payload: user });
}