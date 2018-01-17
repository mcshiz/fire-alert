import {CALL_API} from "../middlewares/auth";

export const LOAD_ACTIVE_FIRES_REQUEST = 'LOAD_ACTIVE_FIRES_REQUEST';
export const LOAD_ACTIVE_FIRES_SUCCESS = 'LOAD_ACTIVE_FIRES_SUCCESS';
export const LOAD_ACTIVE_FIRES_FAILURE = 'LOAD_ACTIVE_FIRES_FAILURE';

export const  loadActiveFiresList = () => {
    return {
        [CALL_API]: {
            endpoint: '/fires',
            authenticated: true,
            types: [LOAD_ACTIVE_FIRES_REQUEST, LOAD_ACTIVE_FIRES_SUCCESS, LOAD_ACTIVE_FIRES_FAILURE]
        }
    }
};
export const filterFireList = (text) => {
    return {
        type: "FILTER",
        text: text
    };
};

export const sortOrderFireList = (order) => {
    return {
        type: "SORT_ORDER",
        order: order
    };
};

export const sortByFireList = (property) => {
    return {
        type: "SORT_BY",
        property: property
    };
};

export const hideShowUnsubscribed = (value) => {
    return {
        type: "HIDE_SHOW_UNSUBSCRIBED",
        visible: value
    }
};

export const toggleSubscribe = (fire) => {
    return {
        [CALL_API]: {
            endpoint: '/fires',
            authenticated: true,
            config: {
                method: 'put',
                body: fire,
                headers: {"Content-Type": "application/json"}
            },
            types: ['EDIT_FIRE_REQUEST', 'EDIT_FIRE_SUCCESS', 'EDIT_FIRE_FAILURE']
        }
    }
};