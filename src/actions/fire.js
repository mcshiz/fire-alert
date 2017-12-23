export const changeSubscribed = (value) => {
    return {
        type: "TOGGLE_SUBSCRIBED",
        subscribed: value
    };
};

export const loadFireDetails = (id) => {
    return dispatch => fetch(`/fires/${id}`)
        .then(res => res.json())
        .then(
            data => dispatch({ type: 'LOAD_FIRE_DETAILS', data}),
            err => dispatch({type: 'LOAD_FIRE_DETAILS_FAILURE', err})
        )
};