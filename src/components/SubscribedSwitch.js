import React from 'react'
import PropTypes from 'prop-types'

import '../styles/SubscribedSwitch.css'

class SubscribedSwitch extends React.Component {
    render() {
        let subscribed = this.props.subscribed ? "Subscribed" : "Unsubscribed";
        return (
            <div className="subscribed-switch-container text-right">
                <span className="subscribed-switch-label">{subscribed}</span>
                <label className="switch">
                    <input type="checkbox"  checked={this.props.subscribed} onChange={()=> this.props.toggleSubscribe()} />
                        <span className="slider round" />
                </label>
            </div>
        )
    }
}

SubscribedSwitch.propTypes = {
    subscribed: PropTypes.bool,
    toggleSubscribe: PropTypes.func.isRequired
};
export default SubscribedSwitch