import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import LandingPage from "./components/LandingPage";
import NavBar from './containers/NavBar'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./containers/Dashboard";
import Profile from './containers/Profile'
import FireDetails from "./containers/FireDetails";
import NotFound from './components/NotFound';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const authenticated = !!localStorage.getItem('id_token')
        const PrivateRoute = ({component: Component, ...rest}) => {
            return (
                <Route
                    {...rest}
                    render={(props) => authenticated === true
                        ? <Component {...rest} {...props}  />
                        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
                />
            )
        };
        function PublicOnlyRoute ({component: Component, ...rest}) {
            return (
                <Route
                    {...rest}
                    render={(props) => authenticated === false
                        ? <Component {...rest} {...props}  />
                        : <Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />}
                />
            )
        }
        return (
            <div className="App">
                <div className="container-fluid">
                    <NavBar />
                </div>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <PublicOnlyRoute path="/signup" component={Signup} />
                        <PublicOnlyRoute path="/login" component={Login} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <PrivateRoute path="/fire-details/:id" component={FireDetails} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App