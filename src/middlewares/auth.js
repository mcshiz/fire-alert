import history from '../history'
const BASE_URL = 'http://localhost:3001/';

function callApi(endpoint, authenticated, config={}) {
    let token = localStorage.getItem('id_token') || null;
    if(authenticated) {
        if(token) {
            if(config.headers) {
                // TODO FIX THIS GHETTO CRAP
                let myHeaders = new Headers(config.headers);
                myHeaders.append('Authorization' , `Bearer ${token}` );
                config.headers = myHeaders
            } else {
                config.headers = new Headers({ 'Authorization' : `Bearer ${token}` })
            }
        }
    } else {
            history.push('/');
            return Promise.reject("Unauthorized")
    }
    return fetch(endpoint, config)
        .then(res => res.json().then(data => ({ data, res })))
        .then(({data, res}) => {
            if (!res.ok) {
                return Promise.reject(res.message)
            }
            return data
        })
        .catch(err =>{
            history.push('/');
            return Promise.reject(err.message)
            })
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {

    const callAPI = action[CALL_API];

    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let { endpoint, types, authenticated, config } = callAPI;

    const [ requestType, successType, errorType ] = types;

    // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
    return callApi(endpoint, authenticated, config).then(
        response =>
            next({
                response,
                authenticated,
                type: successType
            }),
        error => next({
            error: error.message || 'There was an error.',
            type: errorType
        })
    )
}