

export default (state = [], payload) =>  {
    switch (payload.type) {
        case 'LOAD_ACTIVE_FIRES':
            return Object.assign({}, state, {
                loading: false,
                activeFires: payload.data
            });
        case 'LOAD_ACTIVE_FIRES_FAILURE':
            return Object.assign({}, state, {
                error: payload.err
            });
        case 'FILTER':
            return Object.assign({}, state, {
                filter: payload.text
            });
        case 'SORT_BY':
            return Object.assign({}, state, {
                sortBy: payload.property
            });
        case 'SORT_ORDER':
            return Object.assign({}, state, {
                sortOrder: payload.order
            });
        default:
            return state
    }
}