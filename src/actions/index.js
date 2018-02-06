export const FETCH_STUFF = 'FETCH_STUFF';
export const RECEIVE_STUFF = 'RECEIVE_STUFF';

export function fetchingUserLogin (payload){
    return {
        type: FETCH_STUFF,
        payload
    }
}