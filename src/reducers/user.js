export default (state = {
    user: {},
    isFetching: true,
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
            });
        case 'USER_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
            });
        default:
            return state
    }
}