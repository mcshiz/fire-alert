import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ParseISODate, ParseDaysSince, FormatCityStateZip } from "../utilities/helpers";
import SubScribedSwitch from './SubscribedSwitch'

class ListItems extends React.Component {

    constructor(props) {
        super(props);
        this.createListItems = this.createListItems.bind(this);
    }

    createListItems = (fire, idx) => {
        let timeStamp = ParseISODate(fire.scrape_date);
        let link = '/fire-details/'+fire.id;
        if(!this.props.showUnsubscribed && !fire.subscribed) {
            return;
        }
        return (
            <li className="list-group-item col-xs-12" key={idx}>
                <div className="header">
                    <div className="row">
                        <span className="col-xs-6 text-left fire-name">{fire.name}</span>
                        <span className="col-xs-6 text-right fire-last-updated">Last Updated {timeStamp}</span>
                    </div>
                    <div className="row">
                        <span className="col-xs-6 text-left fire-location">{FormatCityStateZip(fire)}</span>
                    </div>
                </div>

                <div className="row property-summary">
                    <span className="col-xs-4 col-lg-2">
                        <h4>Acres</h4>
                        {parseInt(fire.acres, 10).toLocaleString()}
                    </span>
                    <span className="col-xs-4 col-lg-2">
                        <h4>Containment</h4>
                        {parseInt(fire.containment, 10) || 0}
                    </span>
                    <span className="col-xs-4 col-lg-2">
                        <h4>Days Active</h4>
                        {ParseDaysSince(fire.published_date)}
                    </span>
                    <span className="col-lg-2">
                        <h4>Area</h4>
                        {fire.location_description}
                    </span>
                </div>
                <div className="row">
                    <span className="col-xs-6">
                        <Link to={{pathname: link}}>
                            <button className="btn-xs btn-primary pull-left">View Details</button>
                        </Link>
                    </span>
                    <SubScribedSwitch subscribed={fire.subscribed}
                                      toggleSubscribe={this.props.toggleSubscribe.bind(this, fire)}/>
                </div>
            </li>
        )
    };

    render() {
        let listItems;
        if(!this.props.fires.length) {
            listItems = <li className="list-group-item text-center">No active fires</li>
        } else {
            listItems = this.props.fires.map(this.createListItems);
        }

        return (
            <div className="row">
                <ul className="list-group col-xs-12 fire-list-ul">
                    {listItems}
                </ul>
            </div>
        )
    }
}

ListItems.propTypes = {
    toggleSubscribe: PropTypes.func.isRequired
}
export default ListItems