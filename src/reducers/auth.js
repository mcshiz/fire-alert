export default (state = {
        isFetching: false,
        loggedIn: localStorage.getItem('id_token') ? true : false
    }, payload) =>  {
    switch (payload.type) {
        case 'REQUEST_LOGIN':
            return Object.assign({}, state, {
                loggedIn: false,
                isFetching: true
            });
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                loggedIn: true,
                token: payload.user.token,
                errorMessage: ''
            });
        case 'LOGIN_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                loggedIn: false,
                errorMessage: payload.errorMessage
            });
        case 'REQUEST_LOGOUT':
            return Object.assign({}, state, {
                isFetching: true,
                loggedIn: true
            });
        case 'LOGOUT_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                loggedIn: false
            });
        case 'SIGNUP_SUCCESS':
            return Object.assign({}, state, {
                // isFetching: false,
                // loggedIn: false
            });
        case 'SIGNUP_FAILURE':
            return Object.assign({}, state, {
                errorMessage: payload.errorMessage
            });
        default:
            return state
    }
}