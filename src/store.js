import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import auth from "./middlewares/auth";

const initialState = {};

export default(state = initialState) => {
    return createStore(rootReducer, state, applyMiddleware(thunk, auth))
}