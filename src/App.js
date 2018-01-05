import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './containers/NavBar'
import Home from "./components/Home";
import FireDetails from "./containers/FireDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./containers/Dashboard";
import NotFound from './components/NotFound';
import Profile from './containers/Profile'


class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let loggedIn = localStorage.getItem('id_token') ? true : false;
        const PrivateRoute = ({ component: Component, ...rest }) => (
                <Route {...rest} render={props => (
                    loggedIn ? (
                        <Component {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}/>
                    )
                )}/>
            );

        const PublicOnlyRoute = ({ component: Component, ...rest }) => (
                <Route {...rest} render={props => (
                    loggedIn ? (
                        <Redirect to={{
                            pathname: '/dashboard',
                            state: { from: props.location }
                        }}/>
                    ) : (
                        <Component {...props}/>

                    )
                )}/>
            );


        return (
            <div className="App">
                <div className="container-fluid">
                    <NavBar/>
                </div>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PublicOnlyRoute path="/signup" component={Signup} />
                        <PublicOnlyRoute path="/login" component={Login} />
                        <PrivateRoute path="/profile" component={Profile} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <PrivateRoute path="/fire-details/:id" component={FireDetails} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App