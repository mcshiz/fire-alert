import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DashboardActions from '../actions/dashboard';


import FireList from './FireList.js'
import YourStats from './YourStats.js'
import FireListFilter from './FireListFilter.js'
import FireListSort from './FireListSort'

import Welcome from './Welcome.js'
import DashboardMap from './DashboardMap.js'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <div className="row">
                <Welcome user={this.props.user}/>
            </div>
            <div className="row">
                <FireListFilter filterList={this.props.action.filterFireList}/>
            </div>
            <div className="row">
                <FireListSort changeSortBy={this.props.action.sortByFireList} changeSortOrder={this.props.action.sortOrderFireList} />
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-5 fireListColumn">
                    <h2>Active Fires</h2>
                    <FireList {...this.props}  />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-5 pull-right statsColumn">
                    <YourStats />
                </div>
            </div>
            <div className="row">
                <DashboardMap options={this.props.mapOptions} fires={this.props.activeFires}/>
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