export default (state = [], payload) =>  {
    switch (payload.type) {
        case 'TOGGLE_SUBSCRIBED':
            return Object.assign({}, state, {
                subscribed: payload.subscribed
            });
        default:
            return state
    }
}