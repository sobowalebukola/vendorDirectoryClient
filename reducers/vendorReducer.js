import initialState from './initialState';
import { START_LOGIN, LOAD_SUCCESS } from '../Features/Auth/actions';

export default function vendorReducer(state = initialState, action) {
	let newState;
	    switch (action.type) {
						case START_LOGIN:
						return state;
						case LOAD_SUCCESS:
						state.videoCall = action.response.data;
						return state;
					  default:
    return state;
  }
}	
