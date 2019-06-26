import {
    USER_INFO_UPDATE, USER_CREATE, USER_CREATE_SUCCESS, USER_CREATE_FAIL, USER_INFO_CREATE,
    USER_FETCH_SUCCESS, USER_DETAIL_UPDATE
} from './types';
import firebase from 'firebase';

export const userInfoUpdate = ({ key, value }) => {
    return {
        type: USER_INFO_UPDATE,
        payload: { key, value }
    }
}

export const userCreate = ({ firstName, lastName, email, password, postCode, navigation }) => {
    return (dispatch) => {
        dispatch({ type: USER_CREATE });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                userCreateSuccess(dispatch, user, navigation);
                userInfoCreate(dispatch, { firstName, lastName, postCode });
            })
            .then(() => navigation.navigate('authPages'))
            .catch(e => userCreateFail(dispatch, e));

    }
}

const userCreateSuccess = (dispatch, user) => {
    dispatch({ type: USER_CREATE_SUCCESS, payload: user });
}

const userCreateFail = (dispatch, e) => {
    dispatch({ type: USER_CREATE_FAIL, payload: e.message });
}

const userInfoCreate = (dispatch, { firstName, lastName, postCode, mobile = '', birthday = '' }) => {
    dispatch({ type: USER_INFO_CREATE });
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/userinfo`)
        .push({ firstName, lastName, postCode, mobile, birthday });
}

export const userFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/userinfo`)
            .on('value', snapshop => {
                console.log(currentUser.uid);
                console.log(snapshop.val());
                const user = snapshop.val();
                const payload = user[Object.keys(user)[0]]
                dispatch({ type: USER_FETCH_SUCCESS, payload })
            })
    }

}

export const userDetailUpdate = ({ key, value }) => {
    return {
        type: USER_DETAIL_UPDATE,
        payload: { key, value }
    }
}

