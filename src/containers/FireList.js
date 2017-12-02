/**
 * Created by brianmccall on 11/24/17.
 */
import React from 'react';
import '../styles/FireList.css'
import FireListItems from '../components/FireListItems.js';
import FireListFilter from '../components/FireListFilter.js'
import FireListSort from '../components/FireListSort'


class FireList extends React.Component {

    render() {
        let that = this;
        let sortBy = that.props.sortBy;
        let sortOrder = that.props.sortOrder;

        let filteredListItems = this.props.activeFires.filter( (fire) => {
            if(fire.name.toLowerCase().includes(that.props.filter) || fire.location.toLowerCase().includes(that.props.filter)) {
                return fire
            }
            return false;
        });

        let filteredAndSorted = filteredListItems.sort( (a, b) => {
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
        return (
            <div>
                <h2>Active Fires</h2>
                <FireListFilter filterList={this.props.action.filterFireList} filter={this.props.filter} />
                <FireListSort changeSortBy={this.props.action.sortByFireList} changeSortOrder={this.props.action.sortOrderFireList} />
                <FireListItems fires={filteredAndSorted} />
            </div>
        )
    };
}

export default FireList;
