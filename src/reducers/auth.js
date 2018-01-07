export default (state = {
        isFetching: true,
        authenticated: !!localStorage.getItem('id_token'),
    }, payload) =>  {
    switch (payload.type) {
        case 'REQUEST_LOGIN':
            return Object.assign({}, state, {
                isFetching: true,
                authenticated: false
            });
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                authenticated: true,
                token: payload.user.token,
                errorMessage: ''
            });
        case 'LOGIN_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                authenticated: false,
                errorMessage: payload.errorMessage
            });

        case 'CHECK_LOGIN_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'CHECK_LOGIN_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                authenticated: payload.response,
            });
        case 'CHECK_LOGIN_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                authenticated: false,
                errorMessage: payload.errorMessage,
            });





        case 'REQUEST_LOGOUT':
            return Object.assign({}, state, {
                isFetching: true,
                authenticated: true
            });
        case 'LOGOUT_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                authenticated: false
            });
        case 'SIGNUP_SUCCESS':
            return Object.assign({}, state, {
                // isFetching: false,
                // authenticated: false
            });
        case 'SIGNUP_FAILURE':
            return Object.assign({}, state, {
                errorMessage: payload.errorMessage
            });
        default:
            return state
    }
}