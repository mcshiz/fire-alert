import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as DashboardActions from "../actions/dashboard";
import * as FireListActions from "../actions/fireList";
import * as AuthActions from "../actions/auth";
import * as UserActions from "../actions/user";

import Welcome from "../components/Welcome";
import FireList from './FireList'
import DashboardMap from '../components/DashboardMap'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.props.authAction.checkToken();
        this.props.fireListActions.loadActiveFiresList();
        this.props.userActions.loadUserInfo();
    }
    render() {
        return (
            !this.props.isFetching &&
            <div className="col-xs-12 col-md-10 col-md-offset-1">
                <Welcome name={this.props.user.first_name} />
                <FireList />
                <DashboardMap options={this.props.mapOptions} fires={this.props.activeFires} {...this.props} />
            </div>
        )
    };
}

function mapStateToProps(state, prop) {
    return {
        mapOptions: state.dashboard.mapOptions,
        activeFires: state.fireList.activeFires,
        user: state.user.user,
        isFetching: state.auth.isFetching,
        authenticated: state.auth.authenticated,
    }
}

function mapDispatchToProps(dispatch){
    return {
        dashboardActions: bindActionCreators(DashboardActions, dispatch),
        fireListActions: bindActionCreators(FireListActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch),
        authAction: bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)