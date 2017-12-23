import React from 'react';

import '../styles/FireListSort.css'

class FireListSort extends React.Component {
    constructor(props) {
        super(props);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    }

    handleSortByChange = (e) => {
        this.props.changeSortBy(e)

    };
    handleSortOrderChange = (e) => {
        this.props.changeSortOrder(e)
    };

    render() {

        return (
            <div className="col-xs-12 text-right sort-by-options">
                <div>Sort By:
                    <select name="sortBy" id="sortBy" className="form-control form-inline input-sm" onChange={(e)=>{this.handleSortByChange(e.target.value)}}>
                        <option value="lastUpdated">Most Recent</option>
                        <option value="name">Name</option>
                        <option value="Insurance Value">Insurance Value</option>
                        <option value="Homes at Risk">Homes at Risk</option>
                    </select>
                    <select name="sortByOrder" id="sortByOrder" className="form-control form-inline input-sm" onChange={(e)=>{this.handleSortOrderChange(e.target.value)}}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default FireListSort;