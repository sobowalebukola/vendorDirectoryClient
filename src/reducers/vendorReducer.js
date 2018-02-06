import initialState from './initialState';
import { START_LOGIN, LOAD_SUCCESS, LOAD_FAILED } from '../Features/Auth/actions';

export default function vendorReducer(state = initialState, action) {
	let newState;
	    switch (action.type) {
						case START_LOGIN:
						return state;
						case LOAD_SUCCESS:
						newState = Object.assign({ }, state,  {dataFetched : action.response.data});
						return newState;
						case LOAD_FAILED:
						newState = Object.assign( { }, state, { dataFetched :action.e });
						return newState;
					  default:
    return state;
  }
}	
