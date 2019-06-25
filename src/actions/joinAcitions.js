import { USER_INFO_UPDATE, USER_CREATE, USER_CREATE_SUCCESS, USER_CREATE_FAIL, USER_INFO_CREATE } from './types';
import firebase from 'firebase';

export const userInfoUpdate = ({ key, value }) => {
    return {
        type: USER_INFO_UPDATE,
        payload: { key, value }
    }
}

export const userCreate = ({ firstName, lastName, email, password, postCode, navigation }) => {
    console.log(firstName, lastName, email, password, postCode);
    
    return (dispatch) => {
        dispatch({ type: USER_CREATE });
        firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    userCreateSuccess(dispatch, user, navigation);
                    userInfoCreate({firstName, lastName, email, password, postCode});
                    navigation.navigate('authPages'); 
                })
                .catch(e => userCreateFail(dispatch, e));

    }
}

const userCreateSuccess = (dispatch, user) => {
    dispatch({type: USER_CREATE_SUCCESS, payload: user });     
}

const userCreateFail = (dispatch, e) => {
    dispatch({ type: USER_CREATE_FAIL, payload: e.message});
}

const userInfoCreate = ({firstName, lastName, email, password, postCode}) => {
    const { currentUser} = firebase.auth();
    console.log(currentUser);
    firebase.database().ref(`/users/${currentUser.uid}/userinfo`)
    .push({firstName, lastName, email, password, postCode});

}

