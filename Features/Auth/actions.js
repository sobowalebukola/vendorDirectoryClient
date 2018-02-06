export const START_LOGIN = 'START_LOGIN';
export const LOAD_SUCCESS =  'LOAD_SUCCESS';
// This action is hardcoded to fetch a stream of youtube videos using the youtube search api. The search term being 'Barcelona'
export const startLogin = payload => ({
    type: START_LOGIN,
    payload: 'Barcelona',
      });
export const loadSuccess = response => ({
  type: LOAD_SUCCESS,
    response
});
