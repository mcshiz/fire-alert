export default (state = [], payload) =>  {
    switch (payload.type) {
        case 'TOGGLE_SUBSCRIBED':
            return Object.assign({}, state, {
                subscribed: payload.subscribed
            });
        case 'LOAD_FIRE_DETAILS':
            console.log(payload.data)
            return Object.assign({}, state, {
                loading: false,
                fire: payload.data

            });
        case 'LOAD_FIRE_DETAILS_FAILURE':
            console.log(payload.err)
            return Object.assign({}, state, {
                error: payload.err
            });
        default:
            return state
    }
}