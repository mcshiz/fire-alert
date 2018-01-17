import React from 'react'

class HideShowUnsubscribed extends React.Component {
    render() {
      return (
          <div className="hide-show-subscribed-switch-container text-left">
              <span className="subscribed-switch-label">Show Unsubscribed Fires</span>
              <label className="switch">
                  <input type="checkbox"  checked={this.props.showUnsubscribed} onChange={this.props.toggleShowUnsubscribed} />
                  <span className="slider round" />
              </label>
          </div>
      )
    }
}
export default HideShowUnsubscribed