import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { HandleErrors } from '../utilities/helpers';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as authActions from "../actions/auth";
import history from '../history'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        let obj = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
        this.props.action.login(obj)
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-md-8 col-md-offset-2">
                        {this.props.errorMessage ? <div className="alert alert-danger">{this.props.errorMessage}</div> : null}
                        <form id="signup-form" className="form-horizontal" method="post" action="/signup">
                            <fieldset>
                                <legend>Login</legend>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="email">Email</label>
                                    <div className="col-md-4">
                                        <input id="email" name="email" type="text" placeholder="Email" className="form-control input-md" required />
                                        <span className="help-block">Emaill</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="password">Password</label>
                                    <div className="col-md-4">
                                        <input id="password" name="password" type="password" placeholder="Password" className="form-control input-md" required />
                                        <span className="help-block">Must be at least 8 characters</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-4 col-md-offset-4">
                                        <button type="button" className="btn btn-primary center-block" onClick={this.handleLogin.bind(this)}>Login</button>
                                        <br/>
                                        <Link to={{pathname: '/signup'}} className="center-block text-center">Signup</Link>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}
function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(authActions, dispatch)
    }
}

function mapStateToProps(state, props) {

    return {
        loggedIn: state.auth.loggedIn,
        user: state.auth.user,
        errorMessage: state.auth.errorMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
