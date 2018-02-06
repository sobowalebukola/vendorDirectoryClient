import { takeEvery } from 'redux-saga/effects';
import { START_LOGIN, LOAD_SUCCESS, loadSuccess } from '../actions';
import YTSearch from 'youtube-api-search';
import { call, put, fork } from 'redux-saga/effects';               
import axios from 'axios';

const API_KEY = "AIzaSyDHMgFyTfq2x7zlLf2aLFAGQmxyc1zIt58";

// Watcher saga
export function* watchLoginSaga ()
{
    
  yield takeEvery(START_LOGIN, workingLoginSaga)

}

/*
I made the worker saga consume a youtube search api whenever a START_LOGIN action is dispatched through the onClick event
This action also mutates the state and makes the isLoggedIn key to true
*/
export function* workingLoginSaga (action)
{
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
    const response = yield call(axios.get, url);
    ;
    yield put(loadSuccess(response));
    }
    catch(e) {
        console.log("Trying to fetch the login video");
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