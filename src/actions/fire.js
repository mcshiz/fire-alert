import {CALL_API} from "../middlewares/auth";

export const LOAD_FIRE_DETAILS_REQUEST = 'LOAD_FIRE_DETAILS_REQUEST';
export const LOAD_FIRE_DETAILS_SUCCESS = 'LOAD_FIRE_DETAILS_SUCCESS';
export const LOAD_FIRE_DETAILS_FAILURE = 'LOAD_FIRE_DETAILS_FAILURE';

export const LOAD_FIRE_TWEETS_REQUEST = 'LOAD_FIRE_TWEETS_REQUEST';
export const LOAD_FIRE_TWEETS_SUCCESS = 'LOAD_FIRE_TWEETS_SUCCESS';
export const LOAD_FIRE_TWEETS_FAILURE = 'LOAD_FIRE_TWEETS_FAILURE';

export const changeSubscribed = (value) => {
    return {
        type: "TOGGLE_SUBSCRIBED",
        subscribed: value
    };
};

export const loadFireDetails = (id) => {
    return {
        [CALL_API]: {
            endpoint: `/fires/${id}`,
            authenticated: true,
            types: [LOAD_FIRE_DETAILS_REQUEST, LOAD_FIRE_DETAILS_SUCCESS, LOAD_FIRE_DETAILS_FAILURE]
        }
    };
};

export const loadFireTweets = (hashtag) => {
    return {
        [CALL_API]: {
            endpoint: `/twitter/${hashtag}`,
            authenticated: true,
            types: [LOAD_FIRE_TWEETS_REQUEST, LOAD_FIRE_TWEETS_SUCCESS, LOAD_FIRE_TWEETS_FAILURE]
        }
    };
};