import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <h1>Welcome {this.props.user}</h1>
        )
    }
}
export default Welcome;