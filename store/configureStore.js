import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import  rootLoginSaga from '../Features/Auth/Login/sagas';

export default function configureStore() {
	const sagaMiddleWare = createSagaMiddleware();
	const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(sagaMiddleWare)
	  );
	  sagaMiddleWare.run(rootLoginSaga);
	  return store;
}		

