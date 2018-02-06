import {combineReducers} from 'redux';
import vendorReducer from './vendorReducer';
import videoReducer from './videoReducer';
const rootReducer = combineReducers({
	  vendorReducer,
	  videoReducer
});

export default rootReducer;