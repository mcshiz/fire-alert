import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import Fire from './Fire'
class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/fire/:id" component={Fire} />
            </Switch>
        )
    }
}
export default Main;