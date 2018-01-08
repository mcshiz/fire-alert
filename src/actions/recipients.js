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
            types: ['ADD_RECIPIENT_REQUEST', 'ADD_RECIPIENT_SUCCESS', 'ADD_RECIPIENT_FAILURE']
        }
    }
};

export const editRecipient = (obj) => {
    return {
        type: "EDIT_RECIPIENT",
        id: obj.id,
        recipient: obj
    }
};

export const updateRecipient = (obj) => {
    return {
        [CALL_API]: {
            endpoint: '/recipients',
            authenticated: true,
            config: {
                method: 'put',
                body: obj,
                headers: {"Content-Type": "application/json"}
            },
            types: ['UPDATE_RECIPIENT_REQUEST', 'UPDATE_RECIPIENT_SUCCESS', 'UPDATE_RECIPIENT_FAILURE']
        }
    }
};

export const deleteRecipient = (id) => {
    return {
        [CALL_API]: {
            endpoint: '/recipients',
            authenticated: true,
            config: {
                method: 'delete',
                body: id,
                headers: {"Content-Type": "application/json"}
            },
            types: ['DELETE_RECIPIENT_REQUEST', 'DELETE_RECIPIENT_SUCCESS', 'DELETE_RECIPIENT_FAILURE']
        }
    }
};