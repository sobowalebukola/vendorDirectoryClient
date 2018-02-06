export const START_LOGIN = 'START_LOGIN';
export const LOAD_SUCCESS =  'LOAD_SUCCESS';
export const LOAD_FAILED = 'LOAD_FAILED';

export const startLogin = payload => ({
    type: START_LOGIN,
    payload
      });

export const loadSuccess = response => ({
  type: LOAD_SUCCESS,
    response
});

export const loadFailed = response => ({
  type: LOAD_FAILED,
  response
});