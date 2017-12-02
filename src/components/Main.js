import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../containers/Dashboard'
import Home from './Home'
import FireDetails from '../containers/FireDetails'
class Main extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/fire-details/:id" component={FireDetails} />
            </Switch>
        )
    }

}
export default Main;