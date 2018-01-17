import React from 'react';
import '../styles/FireList.css';
import FireListItems from '../components/FireListItems.js';
import FireListFilter from '../components/FireListFilter.js';
import FireListSort from '../components/FireListSort';
import LoadingSpinner from "../components/LoadingSpinner";
import * as FireListActions from "../actions/fireList";
import * as FireActions from "../actions/fire";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';


class FireList extends React.Component {
    constructor(props) {
        super(props);
        this.filterFires = this.filterFires.bind(this);
        this.sortFires = this.sortFires.bind(this);
        this.toggleSubscribe = this.toggleSubscribe.bind(this);
        this.toggleShowUnsubscribed = this.toggleShowUnsubscribed.bind(this);
    }

    filterFires = (fires) => {
        let filter = this.props.filter;
        return fires.filter( (fire) => {
            // set some defaults because not all properties are always included
            let name = fire.name || '';
            let state = fire.state || '';
            let postal_code = fire.postal_code || '';
            if(name.toLowerCase().includes(filter) || state.toLowerCase().includes(filter) || postal_code.includes(filter) ) {
                return fire
            }
            return false;
        });
    };
    sortFires = (filteredListItems) => {
        let sortBy = this.props.sortBy;
        let sortOrder = this.props.sortOrder;
        return filteredListItems.sort( (a, b) => {
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
    };

    toggleSubscribe = (updatedFire) => {
        let sub = !updatedFire.subscribed;
        let fire = Object.assign(updatedFire, {subscribed: sub});
        this.props.action.toggleSubscribe(JSON.stringify(fire))
    };
    toggleShowUnsubscribed = () => {
        this.props.action.hideShowUnsubscribed(!this.props.showUnsubscribed)
    };

    render() {
        let filteredAndSorted = this.sortFires(this.filterFires(this.props.fires));
        return (
            <div className="row">
                <div className="col-xs-12 fireListColumn">
                    <h2 className='text-center'>Active Fires</h2>

                    <FireListSort changeSortBy={this.props.action.sortByFireList} changeSortOrder={this.props.action.sortOrderFireList} toggleShowUnsubscribed={this.toggleShowUnsubscribed}/>
                    <FireListFilter filterList={this.props.action.filterFireList} filter={this.props.filter} />
                    { this.props.loading ? <LoadingSpinner/> : <FireListItems fires={filteredAndSorted} toggleSubscribe={this.toggleSubscribe} {...this.props}/> }
                </div>
            </div>
        )
    };
}

function mapStateToProps(state, prop) {
    return {
        filter: state.fireList.filter,
        sortBy: state.fireList.sortBy,
        sortOrder: state.fireList.sortOrder,
        fires: state.fireList.activeFires,
        loading: state.fireList.loading,
        showUnsubscribed: state.fireList.showUnsubscribed
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(FireListActions, dispatch),
        fireAction: bindActionCreators(FireActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FireList)
