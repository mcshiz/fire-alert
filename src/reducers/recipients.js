export default (state = {
    isFetching: true,
    recipients: []
}, payload) =>  {
    switch (payload.type) {
        case 'LOAD_RECIPIENTS_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'LOAD_RECIPIENTS_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                recipients: payload.response
            });
        case 'LOAD_RECIPIENTS_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                error: payload.response
            });
        case 'EDIT_RECIPIENT':
        return {
        ...state,
            recipients: state.recipients.map(recipient => recipient.id === payload.id ?
            // transform the one with a matching id
            { ...recipient } :
            // otherwise return original recipient
            recipient
        )
        };
        case 'UPDATE_RECIPIENT_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'UPDATE_RECIPIENT_SUCCESS':
            console.log(payload.response);
            return Object.assign({}, state, {
                recipients: payload.response,
                isFetching: false
            });
        case 'UPDATE_RECIPIENT_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                error: payload.response
            });
        case 'ADD_RECIPIENT_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'ADD_RECIPIENT_SUCCESS':
            console.log(payload.response);
            return Object.assign({}, state, {
                recipients: payload.response,
                isFetching: false
            });
        case 'ADD_RECIPIENT_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                error: payload.response
            });
        case 'DELETE_RECIPIENT_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'DELETE_RECIPIENT_SUCCESS':
            console.log(payload.response);
            return Object.assign({}, state, {
                recipients: payload.response,
                isFetching: false
            });
        case 'DELETE_RECIPIENT_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                error: payload.response
            });
        default:
            return state
    }
};