import { combineReducers} from 'redux'
import dashboard from './dashboard'
import fireList from './fireList'
import fireDetails from './fireDetails'
import auth from './auth'
import user from './user'
import recipients from './recipients'

const rootReducer = combineReducers({
    dashboard,
    fireList,
    fireDetails,
    auth,
    user,
    recipients
});

export default rootReducer;