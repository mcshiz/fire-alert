import React from 'react'
import { HandleErrors } from "../utilities/helpers";

import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/auth'
import SignupForm from "./SignupForm";

import * as $ from 'jquery'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this)
    }
    componentWillMount() {
        $('document')
    }
    submitForm(e) {
        e.preventDefault();
        let username = document.getElementById('username').value,
            email = document.getElementById('email').value,
            password = document.getElementById('password').value,
            password_confirm = document.getElementById('password_confirm').value,
            first_name = document.getElementById('first_name').value,
            last_name = document.getElementById('last_name').value;

            if (password !== password_confirm || password.split('').length < 8) {
                return alert("Passwords do not match");

            }
            if(!username || !email || !password || !first_name || !last_name) {
                return alert("All fields are required")
            }

        //    TODO ADD AJAX FORM VALIDATION

        let obj = {
            username: username,
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name
        };

        this.props.action.signup(JSON.stringify(obj));
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-md-8 col-md-offset-2">
                        {this.props.errorMessage ? <div className="alert alert-danger">{this.props.errorMessage}</div> : null}
                        <SignupForm submitForm={this.submitForm}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props)  {
    return {
        errorMessage: state.auth.errorMessage
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)