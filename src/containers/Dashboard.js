import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DashboardActions from '../actions/dashboard';
import * as FireListActions from '../actions/fireList';
import * as UserActions from '../actions/user'

import FireList from './FireList.js'
import Welcome from '../components/Welcome.js'
import DashboardMap from '../components/DashboardMap.js'


class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fireListActions.loadActiveFiresList();
        this.props.userActions.loadUserInfo()
    }

    render() {
        return (
        <div className="col-xs-12 col-md-10 col-md-offset-1">
            <Welcome user={this.props.user.first_name} />
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
        user: state.user.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        dashboardActions: bindActionCreators(DashboardActions, dispatch),
        fireListActions: bindActionCreators(FireListActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)