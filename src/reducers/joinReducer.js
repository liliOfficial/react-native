import { USER_INFO_UPDATE, USER_CREATE, USER_CREATE_SUCCESS, USER_CREATE_FAIL, USER_INFO_CREATE } from '../actions/types';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    postCode: '',
    agreement: false,
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_INFO_UPDATE:
            return { ...state, [action.payload.key]: action.payload.value };
        case USER_CREATE:
            return { ...state, loading: true };
        case USER_CREATE_SUCCESS:
            return { ...state, loading: false };
        case USER_CREATE_FAIL:
            return { ...state, error: action.payload, loading: false };
        case USER_INFO_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}