export default (state = {
    loading: true,
    activeFires: [],
    sortBy: "lastUpdated",
    sortOrder: "Desc",
    filter: '',
}, payload) =>  {
    switch (payload.type) {
        case 'LOAD_ACTIVE_FIRES_REQUEST':
            return Object.assign({}, state, {
                loading: true
            });
        case 'LOAD_ACTIVE_FIRES_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                activeFires: payload.response
            });
        case 'LOAD_ACTIVE_FIRES_FAILURE':
            return Object.assign({}, state, {
                loading: false,
                error: payload.response
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
};