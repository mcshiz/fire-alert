export default (state = {
    user: {}
}, payload) =>  {
    switch (payload.type) {
        case 'USER_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'USER_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                user: payload.response,
                authenticated: payload.authenticated || false
            });
        case 'USER_FAILURE':
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}