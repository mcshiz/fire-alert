import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FireDetailsActions from '../actions/fire';

import SubScribedSwitch from '../components/SubscribedSwitch'
import FireDescription from '../components/FireDescription';
import DashboardMap from '../components/DashboardMap'

class FireDetails extends React.Component {

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
                    <div className="col-xs-12 col-sm-6 col-sm-push-6">
                        <FireDescription fireInformation={this.props.fireInformation}/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-sm-pull-6">
                        <DashboardMap options={this.props.mapOptions} fires={this.props.activeFires}/>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state, prop) {
    return {
        subscribed: state.fire.subscribed,
        mapOptions: state.fire.mapOptions,
        activeFires: state.dashboard.activeFires,
        fireInformation: state.dashboard.activeFires[0]
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(FireDetailsActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FireDetails)