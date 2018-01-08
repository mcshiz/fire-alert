export default (state = {
        fire:[],
        isFetching: true,
        twitter: {
            tweets: [],
            isFetching: true
        },
        mapOptions: {
            zoom: 10,
            scrollEnabled: false,
        },
}, payload) =>  {
    switch (payload.type) {
        case 'LOAD_FIRE_DETAILS_REQUEST':
            return Object.assign({}, state, {
                isFetching: true,
            });
        case 'LOAD_FIRE_DETAILS_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                fire: payload.response
            });
        case 'LOAD_FIRE_DETAILS_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                error: payload.err
            });
        case 'UPDATE_FIRE_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'UPDATE_FIRE_SUCCESS':
            return Object.assign({}, state, {
                fire: payload.response,
                isFetching: false
            });
        case 'UPDATE_FIRE_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                error: payload.response
            });
        case 'LOAD_FIRE_TWEETS_REQUEST':
            return Object.assign({}, state, {
                twitter:{
                    isFetching: true,
                }
            });
        case 'LOAD_FIRE_TWEETS_SUCCESS':
            return Object.assign({}, state, {
                twitter:{
                    isFetching: false,
                    tweets: payload.response.statuses
                }
            });
        case 'LOAD_FIRE_TWEETS_FAILURE':
            return Object.assign({}, state, {
                twitter: {
                    isFetching: false,
                    tweets: [],
                    error: payload.err
                }

            });
        default:
            return state
    }
}