import React from 'react'
import moment from '../../node_modules/moment/moment'
import { Link } from 'react-router-dom'

class ListItems extends React.Component {

    constructor(props) {
        super(props);
        this.createListItems = this.createListItems.bind(this);
    }

    createListItems = (fire, idx) => {
        let timeStamp = moment(fire.lastUpdated).format('M/D/YYYY h:mm:s A');
        let link = '/fire-details/'+fire.id;
        return (
            <li className="list-group-item col-xs-12" key={idx}>
                <div className="header">
                    <div className="row">
                        <span className="col-xs-6 text-left fire-name">{fire.name}</span>
                        <span className="col-xs-6 text-right fire-last-updated">Last Updated {timeStamp}</span>
                    </div>
                    <div className="row">
                        <span className="col-xs-6 text-left fire-location">{fire.location}</span>
                    </div>
                </div>

                <div className="row property-summary">
                    <span className="col-xs-12 col-sm-8">3 Properties within 10 miles</span>
                    <span className="col-xs-12 col-xs-4 text-danger text-right">$1,254,988</span>
                    <span className="col-xs-12 col-xs-8">1 Property within predicted fire path</span>
                    <span className="col-xs-12 col-xs-4 text-danger text-right">$10,864,128</span>
                </div>
                <div className="row">
                        <span className="col-xs-6">
                            <Link to={{pathname: link}}>
                                <button className="btn-xs btn-primary pull-left">View Details</button>
                            </Link>
                        </span>
                    <span className="col-xs-6">
                            <button className="btn-xs btn-warning pull-right">Unsubscribe</button>
                        </span>
                </div>
            </li>
        )
    };

    render() {
        let listItems = this.props.fires.map(this.createListItems);
        return (
            <ul className="list-group col-xs-12 fire-list-ul">
                {listItems}
            </ul>
        )
    }
}

export default ListItems