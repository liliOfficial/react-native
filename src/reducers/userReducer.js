import { USER_FETCH_SUCCESS, USER_DETAIL_UPDATE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_FETCH_SUCCESS:
            return action.payload;
        case USER_DETAIL_UPDATE:
            return { ...state, [action.payload.key]: action.payload.value };
        default:
            return state;
    }
}