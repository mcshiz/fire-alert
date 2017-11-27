/**
 * Created by brianmccall on 11/24/17.
 */

import React from 'react';
import './styles/FireList.css'
import moment from '../../node_modules/moment'
import { Link } from 'react-router-dom'


class FireList extends React.Component {
    constructor(props) {
        super(props );
        this.createListItems = this.createListItems.bind(this);
    }


    createListItems = (fire, idx) => {
        let timeStamp = moment(fire.lastUpdated).format('M/D/YYYY h:mm:s A');
        let link = '/fire/'+fire.id;
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
                        <Link to={{ pathname:link }}><button className="btn-xs btn-primary pull-left">View Details</button></Link>
                    </span>
                        <span className="col-xs-6">
                        <button className="btn-xs btn-warning pull-right">Unsubscribe</button>
                    </span>
                    </div>
                </li>
            )

    };

    render() {
        //TODO this logic needs to be moved somewhere else
        //Reducer?Action?Saga?Middleware? idk somewhere will take more research once I decide on how I am going to build the backend.
        //Filter and sort right from the DB?
        let that = this;
        let sortBy = that.props.sortBy;
        let sortOrder = that.props.sortOrder;
        let filteredListItems = this.props.activeFires.filter(function(fire) {
            if(fire.name.toLowerCase().includes(that.props.filter) || fire.location.toLowerCase().includes(that.props.filter)) {
                return fire
            }
        });

        let filteredAndSorted = filteredListItems.sort(function(a, b){
            let nameA=a[sortBy], nameB=b[sortBy];
            if(sortOrder === "asc") {
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            } else {
                if (nameA > nameB)
                    return -1;
                if (nameA < nameB)
                    return 1;
                return 0;
            }
        });
        let listItems = filteredAndSorted.map(this.createListItems);
        return (
            <div>

                <ul className="list-group col-xs-12 fire-list-ul">
                    {listItems}
                </ul>
            </div>
        )
    };
}

export default FireList;
