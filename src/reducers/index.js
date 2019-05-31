import { combineReducers } from 'redux';
import OffersReducer from './offersReducer';
import OfferReducer from './onlineOfferReducer';

export default combineReducers({
    offers: OffersReducer,
    offer: OfferReducer
})