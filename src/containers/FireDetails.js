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
import TwitterFeed from "../components/TwitterFeed";

class FireDetails extends React.Component {
    componentDidMount(){
        //get fire details then get tweets
        if(this.props.match.params.hasOwnProperty('id')) {
            this.props.action.loadFireDetails(this.props.match.params.id)
        }
    }

    render() {
        if (this.props.isFetching) {
            return <LoadingSpinner />
        } else {
            return (
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 text-left last-updated-date">
                            Last Updated: {ParseISODate(this.props.selectedFire.scrape_date)}
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <SubScribedSwitch subscribed={this.props.subscribed}
                                              changeSubscribed={this.props.action.changeSubscribed}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-sm-push-6">
                            <FireDescription fireInformation={this.props.selectedFire}/>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-sm-pull-6">
                            <DashboardMap options={this.props.mapOptions} fires={[this.props.selectedFire]} {...this.props}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-lg-4 twitter-widget">
                            {
                                this.props.selectedFire.hashtag ?
                                <TwitterFeed hashtag={this.props.selectedFire.hashtag} {...this.props}/>
                                :
                                <h4 className='text-center'>No Twitter Hashtag Yet</h4>
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state, props) {

    return {
        subscribed: state.fireDetails.subscribed,
        mapOptions: state.fireDetails.mapOptions,
        selectedFire: state.fireDetails.fire,
        isFetching: state.fireDetails.isFetching,
        twitter: state.fireDetails.twitter,
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(FireDetailsActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FireDetails)