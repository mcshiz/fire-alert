import React from 'react';
import PropTypes from 'prop-types'
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


Welcome.propTypes = {
    name: PropTypes.string.isRequired
};
export default Welcome;