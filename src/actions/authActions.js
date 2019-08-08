import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, password, navigation }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, navigation))
            .catch(e => loginUserFail(dispatch, e));
    }
}

const loginUserSuccess = async (dispatch, user, navigation) => {
    await AsyncStorage.setItem('userToken', 'token');
    navigation.navigate('authPages');
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

}

const loginUserFail = (dispatch, e) => {
    dispatch({ type: LOGIN_USER_FAIL, payload: e.message });
}

