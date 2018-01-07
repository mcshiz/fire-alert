import history from '../history'
import {CALL_API} from "../middlewares/auth";

export const login = (loginObj) => {
    return dispatch => {
        dispatch({type: 'REQUEST_LOGIN'});
        fetch('/login', {
            method: 'post',
            body: JSON.stringify(loginObj),
            headers: new Headers({"Content-Type": "application/json"})
        })
        .then(res => res.json().then(user => ({ user, res })))
        .then(({user, res}) => {
            if (res.ok) {
                localStorage.setItem('id_token', user.token);
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    user: user
                });
                history.push('/dashboard')
            } else {
                dispatch({
                    type: 'LOGIN_FAILURE',
                    errorMessage: user.message
                })
            }
        });
    }
};

export const  checkToken = () => {
    return {
        [CALL_API]: {
            endpoint: '/check-token',
            authenticated: true,
            types: ['CHECK_LOGIN_REQUEST', 'CHECK_LOGIN_SUCCESS', 'CHECK_LOGIN_FAILURE']
        }
    }
};

export const logout = () => {
    return dispatch => {
        dispatch({type: 'REQUEST_LOGOUT'});
        localStorage.removeItem('id_token');
        dispatch({type: 'LOGOUT_SUCCESS'});
        history.push('/')
    }
};

export const signup = (form) => {
    return dispatch => {
        fetch('/signup', {
            method: 'post',
            body: form,
            headers: new Headers({"Content-Type": "application/json"})
        })
        .then(res => res.json().then(data => ({data, res})))
        .then(({data, res}) => {
            if (res.ok) {
                dispatch({
                    type: 'SIGNUP_SUCCESS',
                });
                history.push('/login')

            } else {
                dispatch({
                    type: 'SIGNUP_FAILURE',
                    errorMessage: data.message
                })
            }
        });
    }
};
