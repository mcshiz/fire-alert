export default (state = [], payload) =>  {
    switch (payload.type) {
        case 'TOGGLE_SUBSCRIBED':
            return Object.assign({}, state, {
                subscribed: payload.subscribed
            });
        case 'LOAD_FIRE_DETAILS':
            return Object.assign({}, state, {
                loading: false,
                fire: payload.data

            });
        case 'LOAD_FIRE_DETAILS_FAILURE':
            return Object.assign({}, state, {
                error: payload.err
            });
        case 'LOAD_FIRE_TWEETS':
            return Object.assign({}, state, {
                twitter:{
                    loading: false,
                    tweets: payload.data.statuses
                }
            });
        case 'LOAD_FIRE_TWEETS_FAILURE':
            return Object.assign({}, state, {
                twitter: {
                    loading: false,
                    tweets: [],
                    error: payload.err
                }

            });
        default:
            return state
    }
}