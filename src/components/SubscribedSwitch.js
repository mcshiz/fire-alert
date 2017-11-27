import React from 'react'

import './styles/SubscribedSwitch.css'

class SubscribedSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubscribedChange = this.handleSubscribedChange.bind(this);
    }

    handleSubscribedChange = (e) => {
        let subscribed = !this.props.subscribed;
        this.props.changeSubscribed(subscribed)
    };
    render() {
        return (
            <div>
                <span className="subscribed-switch-label">Subscribed</span>
                <label className="switch">
                    <input type="checkbox"  checked={this.props.subscribed} onChange={()=> this.handleSubscribedChange()} />
                        <span className="slider round" />
                </label>
            </div>
        )
    }
}
export default SubscribedSwitch