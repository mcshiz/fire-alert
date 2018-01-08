import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import * as RecipientActions from '../actions/recipients'
import ListRecipients from "../components/ListRecipients";
import AddRecipient from "../components/AddRecipient";

class Recipients extends React.Component {
    constructor(props) {
        super(props);
        this.addRecipient = this.addRecipient.bind(this);
        this.applyEdits = this.applyEdits.bind(this);
        this.editRecipient = this.editRecipient.bind(this);
        this.deleteRecipient = this.deleteRecipient.bind(this);
        this.props.action.loadRecipients();
    }
    applyEdits(updatedRecipient, e) {
        e.preventDefault();
        e.target.querySelector('.submit').disabled = true;
        this.props.action.updateRecipient(JSON.stringify(updatedRecipient));

    }
    editRecipient(editedRecipient, e) {
        //update the property with the key matching the input ID
        editedRecipient[e.target.id] = e.target.value;
        e.target.form.querySelector('.submit').disabled = false;
        this.props.action.editRecipient(editedRecipient)
    }
    addRecipient(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let newRecipient = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            phone_number: formData.get('phone_number'),
            status: formData.get('status'),
        };
        // TODO ADD ACTUAL FORM VALIDATION
        let errors = [];
        Object.keys(newRecipient).forEach(key => {
            newRecipient[key] === '' && errors.push(key.replace('_', " "))

        });
        if(errors.length) {
            alert(errors.join(', ') + " Must not be empty");
            return;
        }
        this.props.action.addRecipient(JSON.stringify(newRecipient));
        e.target.reset()
    }
    deleteRecipient(deletedRecipient) {
        this.props.action.deleteRecipient(JSON.stringify({id:deletedRecipient.id}))
    }
    render() {
        return (
            !this.props.isFetching &&
            <ul>
                <ListRecipients recipients={this.props.recipients}
                                applyEdits={this.applyEdits} editRecipient={this.editRecipient}
                                deleteRecipient={this.deleteRecipient}/>
                <AddRecipient addRecipient={this.addRecipient}/>
            </ul>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        isFetching: state.recipients.isFetching,
        recipients: state.recipients.recipients
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(RecipientActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipients)