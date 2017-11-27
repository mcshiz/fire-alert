import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers';


const initialState = {
    dashboard: {
        activeFires: [
            {
                name: "Boles Fire",
                id: 1,
                lastUpdated: 1511567966000,
                location: "Green Bay, WI 54313",
                lat: 38.134557,
                lng: -120.366211
            },
            {
                name: "Rich Fire",
                id: 2,
                lastUpdated: 1511741746000,
                location: "Mount Shasta, CA 96067",
                lat: 42.228517,
                lng: -123.706055
            },
            {
                name: "Bob Fire",
                id: 3,
                lastUpdated: 1511567966000,
                location: "Reno, NV 96115",
                lat: 40.446947,
                lng: -121.201172
            },
        ],
        mapOptions: {
            lat: 39.707187,
            lng: -118.696289,
            zoom: 5,
            scrollEnabled: false,
        },
        sortBy: "lastUpdated",
        sortOrder: "Desc",
        filter: '',
        user: 'Prime Insurance'
    },
    fire: {
        subscribed: true,
        mapOptions: {
            lat: 39.707187,
            lng: -118.696289,
            zoom: 5,
            scrollEnabled: false,
        },
    }
};

export default(state = initialState) => {
    return createStore(rootReducer, state)
}