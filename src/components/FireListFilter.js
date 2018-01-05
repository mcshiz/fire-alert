import React from 'react'

class FireListFilter extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }


    onChangeFilter(text){
        this.props.filterList(text.toLowerCase())
    };

    render() {

        return (
            <div className="col-xs-12">
                <form action="">
                    <input type="text" className="form-control" placeholder="Filter Fires By Name, Zip Code or State"
                           onChange={(e)=>{this.onChangeFilter(e.target.value)}}
                           value={this.props.filter}/>
                </form>
            </div>
        )
    }
};

export default FireListFilter;