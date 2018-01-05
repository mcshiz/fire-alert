import { combineReducers} from 'redux'
import dashboard from './dashboard'
import fireList from './fireList'
import fireDetails from './fireDetails'
import auth from './auth'
import user from './user'

const rootReducer = combineReducers({
    dashboard,
    fireList,
    fireDetails,
    auth,
    user
});

export default rootReducer;