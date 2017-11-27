import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FireDetailsActions from '../actions/fire';

import SubScribedSwitch from './SubscribedSwitch'
import DashboardMap from './DashboardMap'
class Fire extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.match.params.id)
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-10 text-left">
                        Last Updated {this.props.lastUpdated}
                    </div>
                    <div className="col-xs-2 text-right">
                        <SubScribedSwitch subscribed={this.props.subscribed} changeSubscribed={this.props.action.changeSubscribed}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Boles Fire</h3>
                    </div>
                </div>
                <div className="row">
                    <DashboardMap options={this.props.mapOptions} fires={this.props.activeFires}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, prop) {
    return {
        subscribed: state.fire.subscribed,
        mapOptions: state.fire.mapOptions,
        activeFires: state.dashboard.activeFires
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(FireDetailsActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Fire)