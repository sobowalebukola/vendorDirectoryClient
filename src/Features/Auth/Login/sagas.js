import { takeEvery } from 'redux-saga/effects';
import { START_LOGIN, loadSuccess, loadFailed } from '../actions';
import { call, put, fork } from 'redux-saga/effects';               
import axios from 'axios';

// Watcher saga
export function* watchLoginSaga ()
{
    
  yield takeEvery(START_LOGIN, workingLoginSaga)

}

// The url is a hardcoded test url to fetch data from an api

export function* workingLoginSaga (action)
{
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
    const response = yield call(axios.get, url);
    ;
    yield put(loadSuccess(response));
    }
    catch(e) {
        yield put(loadFailed(e));
    }
}
//Root saga
export default function* rootLoginSaga (){
yield [
   fork(
       watchLoginSaga
    )
]
}