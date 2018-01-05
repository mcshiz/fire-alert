export default (state = {
    loading: true,
    recipients: []
}, payload) =>  {
    switch (payload.type) {
        case 'LOAD_RECIPIENTS_REQUEST':
            return Object.assign({}, state, {
                loading: true
            });
        case 'LOAD_RECIPIENTS_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                recipients: payload.response
            });
        case 'LOAD_RECIPIENTS_FAILURE':
            return Object.assign({}, state, {
                loading: false,
                error: payload.response
            });
        default:
            return state
    }
};