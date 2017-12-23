import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FireDetailsActions from '../actions/fire';
import '../styles/FireDetails.css'
import SubScribedSwitch from '../components/SubscribedSwitch'
import FireDescription from '../components/FireDescription';
import DashboardMap from '../components/DashboardMap'
import LoadingSpinner from "../components/LoadingSpinner";
import { ParseISODate } from '../utilities/helpers'

class FireDetails extends React.Component {
    componentDidMount(){
        this.props.action.loadFireDetails(this.props.match.params.id)
    }



    render() {
        if (this.props.loading) {
            return <LoadingSpinner />
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-xs-10 text-left">
                            Last Updated: {ParseISODate(this.props.selectedFire.scrape_date)}
                        </div>
                        <div className="col-xs-2 text-right">
                            <SubScribedSwitch subscribed={this.props.subscribed}
                                              changeSubscribed={this.props.action.changeSubscribed}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-sm-push-6">
                            <FireDescription fireInformation={this.props.selectedFire}/>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-sm-pull-6">
                            <DashboardMap options={this.props.mapOptions} fires={[this.props.selectedFire]}  {...this.props}/>
                        </div>

                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state, props) {

    return {
        subscribed: state.fire.subscribed,
        mapOptions: state.fire.mapOptions,
        selectedFire: state.fire.fire,
        loading: state.fire.loading
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(FireDetailsActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FireDetails)