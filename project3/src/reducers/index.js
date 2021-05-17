import { combineReducers } from 'redux';
import artists from './artist_reducer';
import products from './product_reducer';

const rootReducer = combineReducers({
    artists,products
})

export default rootReducer;