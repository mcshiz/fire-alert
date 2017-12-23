export const  loadActiveFiresList = () => {
    return dispatch => fetch('/fires')
        .then(res => res.json())
        .then(
            data => dispatch({ type: 'LOAD_ACTIVE_FIRES', data }),
            err => dispatch({ type: 'LOAD_ACTIVE_FIRES_FAILURE', err })
        );
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

