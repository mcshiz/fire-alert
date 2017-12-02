import React from 'react'

class FireDescription extends React.Component {

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading text-left">{this.props.fireInformation.name}</div>
                <div className="panel-body">
                    {this.props.fireInformation.description}
                </div>
            </div>
        )

    }
}

export default FireDescription