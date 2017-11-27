import { combineReducers} from 'redux'
import dashboard from './dashboard'
import fire from './fire'

const rootReducer = combineReducers({
    dashboard,
    fire
});

export default rootReducer;