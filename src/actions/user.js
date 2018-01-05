import history from '../history'
import { CALL_API } from '../middlewares/auth'

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export const loadUserInfo = () => {
    return {
        [CALL_API]: {
            endpoint: 'users/user',
            authenticated: true,
            types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE]
        }
    }
};


