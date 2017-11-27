import React from 'react';
import './styles/YourStats.css'
import moment from '../../node_modules/moment';
import accounting from '../../node_modules/accounting'
class YourStats extends React.Component {
    constructor() {
        super();
        this.state = {
            atRisk: 37,
            atRiskValue :123436547,
            inPath: 14,
            inPathvalue: 123546356,
            lastNotification: 1511567966000,
            lastNotificationName: 'Boles Fire'
        }
    }
    render() {
        let arvFormatted = accounting.formatMoney(this.state.atRiskValue);
        let ipvFormatted = accounting.formatMoney(this.state.inPathvalue);
        let lastNotificationFormatted = moment(this.state.lastNotification.lastUpdated).format('M/d/YYYY hh:mm:s A');
        return (
            <div className="text-left">
                <div className="row text-center">
                    <h2 className="col-xs-12">Your Stats</h2>
                </div>
                <div className="row stats-row">
                    <div className="col-xs-12">
                        <span className="homes-at-risk-number">{this.state.atRisk}</span><span> Homes at risk</span>
                    </div>
                    <div className="col-xs-12">
                        <span className="text-danger">{arvFormatted}</span>
                    </div>
                    <div className="col-xs-12">
                        <button className="btn-primary btn-xs">View Details</button>
                    </div>
                </div>
                <div className="row stats-row">
                    <div className="col-xs-12">
                        <span className="homes-in-path-number">{this.state.inPath}</span><span> Homes in fire prediction path</span>
                    </div>
                    <div className="col-xs-12">
                        <span className="text-danger">{ipvFormatted}</span>
                    </div>
                    <div className="col-xs-12">
                        <button className="btn-primary btn-xs">View Details</button>
                    </div>
                </div>
                <div className="row stats-row">
                    <div className="col-xs-12">
                        <h4>Last Notification</h4>
                        <span className="last-notification">
                            {this.state.lastNotificationName} - {lastNotificationFormatted}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default YourStats