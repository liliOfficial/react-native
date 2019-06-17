import { combineReducers } from 'redux';
import OffersReducer from './offersReducer';
import OfferReducer from './onlineOfferReducer';
import authReducer from './authReducer';

export default combineReducers({
    offers: OffersReducer,
    offer: OfferReducer,
    auth: authReducer
})