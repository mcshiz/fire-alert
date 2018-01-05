export default (state = {
        fire:[],
        loading: true,
        subscribed: false,
        twitter: {
            tweets: [],
            loading: true
        },
        mapOptions: {
            zoom: 10,
            scrollEnabled: false,
        },
}, payload) =>  {
    switch (payload.type) {
        case 'TOGGLE_SUBSCRIBED':
            return Object.assign({}, state, {
                subscribed: payload.subscribed
            });
        case 'LOAD_FIRE_DETAILS_REQUEST':
            return Object.assign({}, state, {
                loading: true,
            });
        case 'LOAD_FIRE_DETAILS_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                fire: payload.response
            });
        case 'LOAD_FIRE_DETAILS_FAILURE':
            return Object.assign({}, state, {
                loading: false,
                error: payload.err
            });
        case 'LOAD_FIRE_TWEETS_REQUEST':
            return Object.assign({}, state, {
                twitter:{
                    loading: true,
                }
            });
        case 'LOAD_FIRE_TWEETS_SUCCESS':
            return Object.assign({}, state, {
                twitter:{
                    loading: false,
                    tweets: payload.response.statuses
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