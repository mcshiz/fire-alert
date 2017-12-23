import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk'

const initialState = {
    dashboard: {
        loading: true,
        activeFires:[],
        mapOptions: {
            lat: 39.707187,
            lon: -118.696289,
            zoom: 5,
            scrollEnabled: false,
        },
        sortBy: "lastUpdated",
        sortOrder: "Desc",
        filter: '',
        user: 'Prime Insurance'
    },
    fire: {
        fire:[],
        loading: true,
        subscribed: true,
        mapOptions: {
            zoom: 10,
            scrollEnabled: false,
        },
    }
};

export default(state = initialState) => {
    return createStore(rootReducer, state, applyMiddleware(thunk))
}