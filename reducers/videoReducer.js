import { LOAD_SUCCESS } from "../Features/Auth/actions";


export default function videoReducer(state = {}, action) {
    let newState;
	    switch (action.type) {
                        case LOAD_SUCCESS:
                        newState = action.response.data;
				 return [newState, ...state];
					
					  default:
            return state;
  }
}	