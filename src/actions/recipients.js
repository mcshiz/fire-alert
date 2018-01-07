import {CALL_API} from "../middlewares/auth";

export const LOAD_RECIPIENTS_REQUEST = 'LOAD_RECIPIENTS_REQUEST';
export const LOAD_RECIPIENTS_SUCCESS = 'LOAD_RECIPIENTS_SUCCESS';
export const LOAD_RECIPIENTS_FAILURE = 'LOAD_RECIPIENTS_FAILURE';

export const loadRecipients = () => {
    return {
        [CALL_API]: {
            endpoint: '/recipients',
            authenticated: true,
            types: [LOAD_RECIPIENTS_REQUEST, LOAD_RECIPIENTS_SUCCESS, LOAD_RECIPIENTS_FAILURE]
        }
    }
};

export const addRecipient = (obj) => {
    return {
        [CALL_API]: {
            endpoint: '/recipients',
            authenticated: true,
            config: {
                method: 'post',
                body: obj,
                headers: {"Content-Type": "application/json"}
            },
            types: [LOAD_RECIPIENTS_REQUEST, LOAD_RECIPIENTS_SUCCESS, LOAD_RECIPIENTS_FAILURE]
        }
    }
};