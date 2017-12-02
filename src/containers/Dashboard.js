import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DashboardActions from '../actions/dashboard';

import FireList from './FireList.js'
import YourStats from '../components/YourStats.js'
import Welcome from '../components/Welcome.js'
import DashboardMap from '../components/DashboardMap.js'

class Dashboard extends React.Component {

    render() {
        return (
        <div>
            <div className="row">
                <div className="col-xs-12 welcomeBanner">
                    <Welcome user={this.props.user} />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-5 fireListColumn">
                    <FireList {...this.props}  />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-5 pull-right statsColumn">
                    <YourStats />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                    <DashboardMap options={this.props.mapOptions} fires={this.props.activeFires} {...this.props} />
                </div>
            </div>
        </div>
        )
    };
}

function mapStateToProps(state, prop) {
    return {
        mapOptions: state.dashboard.mapOptions,
        activeFires: state.dashboard.activeFires,
        filter: state.dashboard.filter,
        sortBy: state.dashboard.sortBy,
        sortOrder: state.dashboard.sortOrder,
        user: state.dashboard.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(DashboardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)