import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as RecipientActions from '../actions/recipients'
import Welcome from "../components/Welcome";
import AddRecipient from '../components/AddRecipient'


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
    }
    componentDidMount() {
        this.props.action.loadRecipients()

    }
    submitForm(e) {
        e.preventDefault();
        // let username = document.getElementById('username').value,
        //     email = document.getElementById('email').value,
        //     password = document.getElementById('password').value,
        //     password_confirm = document.getElementById('password_confirm').value,
        //     first_name = document.getElementById('first_name').value,
        //     last_name = document.getElementById('last_name').value;
        //
        // if (password !== password_confirm || password.split('').length < 8) {
        //     return alert("Passwords do not match");
        //
        // }
        // if(!username || !email || !password || !first_name || !last_name) {
        //     return alert("All fields are required")
        // }

        //    TODO ADD AJAX FORM VALIDATION

        let obj = {
            username: 'apples',
            email: 'apples@mac.com',
            password: 'asdfv123',
            first_name: 'brian-recipient',
            last_name: 'shizz'
        };
        this.props.action.addRecipient(JSON.stringify(obj));

    }

    render() {
        return (
            <div className="row">
            <Welcome name={this.props.user.first_name} />
            <AddRecipient submitForm={this.submitForm}/>
            </div>
        )
    };
}

function mapStateToProps(state, prop) {
    return {
        user: state.user.user,
        recipients: state.recipients.recipients
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(RecipientActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
