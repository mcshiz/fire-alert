import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 welcomeBanner">
                    <h1 className="text-center">Welcome {this.props.name}</h1>
                </div>
            </div>
        )
    }
}

export default Welcome;