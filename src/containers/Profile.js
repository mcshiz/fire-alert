import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import * as UserActions from '../actions/user'
import * as AuthActions from '../actions/auth'
import Welcome from "../components/Welcome";
import Recipients from './Recipients'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props.userActions.loadUserInfo();
        this.props.authActions.checkToken();
    }



    render() {

        return (
            !this.props.isFetching &&
            <div className="col-xs-12 col-md-10 col-md-offset-1">
                <Welcome name={this.props.user.first_name} />
                <Recipients />
            </div>
        )
    };
}

function mapStateToProps(state, prop) {
    return {
        user: state.user.user,
        isFetching: state.auth.isFetching,
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions: bindActionCreators(UserActions, dispatch),
        authActions: bindActionCreators(AuthActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
