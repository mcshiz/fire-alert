import React from 'react';

class Welcome extends React.Component {

    render() {
        return (
            <h1>Welcome {this.props.user}</h1>
        )
    }
}

export default Welcome;