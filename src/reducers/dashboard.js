export default (state = [], payload) =>  {
    switch (payload.type) {
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