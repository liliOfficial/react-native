import { combineReducers } from 'redux';
import OffersReducer from './offersReducer';
import OfferReducer from './onlineOfferReducer';
import AuthReducer from './authReducer';
import JoinReducer from './joinReducer';
import UserReducer from './userReducer';
import PopupReducer from './popupReducer';
import ToastReducer from './toastReducer';

export default combineReducers({
    offers: OffersReducer,
    offer: OfferReducer,
    auth: AuthReducer,
    join: JoinReducer,
    user: UserReducer,
    popup: PopupReducer,
    toast: ToastReducer
})