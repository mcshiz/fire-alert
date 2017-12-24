import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Welcome {this.props.user}</h1>
            </div>
        )
    }
}

export default Welcome;